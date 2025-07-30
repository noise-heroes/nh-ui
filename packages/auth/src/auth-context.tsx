"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"
import { User, AuthContextType } from "./types"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const NH_ID_URL = process.env.NEXT_PUBLIC_AUTH_URL || "https://id.noiseheroes.com"

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("nh_token")
        if (token) {
          // TODO: Validate token with NH-ID
          // For now, just decode it
          const payload = JSON.parse(atob(token.split('.')[1]))
          setUser({
            id: payload.sub,
            email: payload.email,
            username: payload.username,
            createdAt: payload.created_at,
            updatedAt: payload.updated_at,
          })
        }
      } catch (err) {
        console.error("Auth check failed:", err)
        localStorage.removeItem("nh_token")
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`${NH_ID_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()
      localStorage.setItem("nh_token", data.access_token)
      
      // Decode token to get user info
      const payload = JSON.parse(atob(data.access_token.split('.')[1]))
      setUser({
        id: payload.sub,
        email: payload.email,
        username: payload.username,
        createdAt: payload.created_at,
        updatedAt: payload.updated_at,
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Login failed")
      setError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const register = useCallback(async (email: string, password: string, username?: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`${NH_ID_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      })

      if (!response.ok) {
        throw new Error("Registration failed")
      }

      const data = await response.json()
      localStorage.setItem("nh_token", data.access_token)
      
      // Decode token to get user info
      const payload = JSON.parse(atob(data.access_token.split('.')[1]))
      setUser({
        id: payload.sub,
        email: payload.email,
        username: payload.username,
        createdAt: payload.created_at,
        updatedAt: payload.updated_at,
      })
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Registration failed")
      setError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setLoading(true)
    
    try {
      // TODO: Call NH-ID logout endpoint if needed
      localStorage.removeItem("nh_token")
      setUser(null)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Logout failed")
      setError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const refreshToken = useCallback(async () => {
    // TODO: Implement token refresh logic
    console.log("Token refresh not yet implemented")
  }, [])

  const value: AuthContextType = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    refreshToken,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}