"use client";

import { useState } from "react";
import { Button, Card, CardBody, Input, Divider, Chip, Snippet } from "@heroui/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface TestResult {
  name: string;
  status: "pending" | "success" | "error";
  message?: string;
  data?: any;
}

export default function TestAuthPage() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [testing, setTesting] = useState(false);

  const runTests = async () => {
    setTesting(true);
    setResults([]);

    // Test 1: NH-ID Health Check
    const nhIdTest: TestResult = { name: "NH-ID Health Check", status: "pending" };
    setResults([nhIdTest]);
    
    try {
      const nhIdResponse = await fetch("https://id.noiseheroes.com/health");
      const nhIdData = await nhIdResponse.json();
      nhIdTest.status = nhIdResponse.ok ? "success" : "error";
      nhIdTest.data = nhIdData;
      nhIdTest.message = nhIdResponse.ok ? "NH-ID is healthy" : "NH-ID is not responding correctly";
    } catch (error) {
      nhIdTest.status = "error";
      nhIdTest.message = `Failed to connect: ${error}`;
    }
    setResults([nhIdTest]);

    // Test 2: API Gateway Health Check
    const apiTest: TestResult = { name: "API Gateway Health Check", status: "pending" };
    setResults(prev => [...prev, apiTest]);
    
    try {
      const apiResponse = await fetch("https://api.noiseheroes.com/health");
      const apiData = await apiResponse.json();
      apiTest.status = apiResponse.ok ? "success" : "error";
      apiTest.data = apiData;
      apiTest.message = apiResponse.ok ? "API Gateway is healthy" : "API Gateway is not responding correctly";
    } catch (error) {
      apiTest.status = "error";
      apiTest.message = `Failed to connect: ${error}`;
    }
    setResults(prev => [...prev.slice(0, -1), apiTest]);

    // Test 3: Registration Test
    const regTest: TestResult = { name: "User Registration Test", status: "pending" };
    setResults(prev => [...prev, regTest]);
    
    try {
      const timestamp = Date.now();
      const regResponse = await fetch("https://api.noiseheroes.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: `testuser${timestamp}`,
          email: `test${timestamp}@noiseheroes.com`,
          password: "Test123!@#",
          full_name: "Test User"
        })
      });
      
      if (regResponse.ok) {
        const regData = await regResponse.json();
        regTest.status = "success";
        regTest.data = regData;
        regTest.message = "Registration successful";
      } else {
        const errorText = await regResponse.text();
        regTest.status = "error";
        regTest.message = `Registration failed: ${regResponse.status} - ${errorText}`;
      }
    } catch (error) {
      regTest.status = "error";
      regTest.message = `Failed to register: ${error}`;
    }
    setResults(prev => [...prev.slice(0, -1), regTest]);

    // Test 4: Login Test (if registration succeeded)
    if (regTest.status === "success") {
      const loginTest: TestResult = { name: "User Login Test", status: "pending" };
      setResults(prev => [...prev, loginTest]);
      
      try {
        const timestamp = regTest.data.user?.username.replace("testuser", "") || Date.now();
        const loginResponse = await fetch("https://api.noiseheroes.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: `testuser${timestamp}`,
            password: "Test123!@#"
          })
        });
        
        if (loginResponse.ok) {
          const loginData = await loginResponse.json();
          loginTest.status = "success";
          loginTest.data = loginData;
          loginTest.message = "Login successful";
        } else {
          const errorText = await loginResponse.text();
          loginTest.status = "error";
          loginTest.message = `Login failed: ${loginResponse.status} - ${errorText}`;
        }
      } catch (error) {
        loginTest.status = "error";
        loginTest.message = `Failed to login: ${error}`;
      }
      setResults(prev => [...prev.slice(0, -1), loginTest]);
    }

    setTesting(false);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Authentication Workflow Test</h1>
      <p className="text-gray-600 mb-8">Test the complete authentication flow between UI, API Gateway, and NH-ID</p>

      <Card className="mb-8">
        <CardBody>
          <h2 className="text-xl font-semibold mb-4">Service URLs</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-medium">UI:</span>
              <Snippet size="sm" variant="flat">https://ui.noiseheroes.com</Snippet>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">API Gateway:</span>
              <Snippet size="sm" variant="flat">https://api.noiseheroes.com</Snippet>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">NH-ID:</span>
              <Snippet size="sm" variant="flat">https://id.noiseheroes.com</Snippet>
            </div>
          </div>
        </CardBody>
      </Card>

      <Button 
        color="primary" 
        size="lg" 
        onPress={runTests}
        isLoading={testing}
        className="mb-8"
      >
        Run Authentication Tests
      </Button>

      {results.length > 0 && (
        <Card>
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Test Results</h2>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-2">
                    {result.status === "success" && <CheckCircleIcon className="h-5 w-5 text-success" />}
                    {result.status === "error" && <XCircleIcon className="h-5 w-5 text-danger" />}
                    {result.status === "pending" && <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />}
                    <span className="font-medium">{result.name}</span>
                    <Chip 
                      size="sm" 
                      color={result.status === "success" ? "success" : result.status === "error" ? "danger" : "default"}
                    >
                      {result.status}
                    </Chip>
                  </div>
                  {result.message && (
                    <p className="text-sm text-gray-600 ml-8 mb-2">{result.message}</p>
                  )}
                  {result.data && (
                    <div className="ml-8">
                      <Snippet size="sm" variant="bordered" className="w-full">
                        {JSON.stringify(result.data, null, 2)}
                      </Snippet>
                    </div>
                  )}
                  {index < results.length - 1 && <Divider className="mt-4" />}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}