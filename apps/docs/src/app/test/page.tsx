"use client";

import { 
  Button, 
  Card, 
  CardBody,
  Chip,
  Badge,
  Avatar,
  Progress,
  Snippet,
  Switch,
  Input,
  Tabs,
  Tab
} from "@heroui/react";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";

export default function TestPage() {
  const timestamp = new Date().toISOString();
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">HeroUI Test Page</h1>
        <p className="text-sm text-gray-500">Build: {timestamp}</p>
        <Chip color="success" size="sm" className="mt-2">Version Check</Chip>
      </div>

      <div className="grid gap-6">
        {/* Test Card */}
        <Card className="p-4">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Component Tests</h2>
            
            <div className="space-y-4">
              {/* Buttons */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Buttons:</p>
                <div className="flex gap-2 flex-wrap">
                  <Button color="primary">Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                </div>
              </div>

              {/* Chips and Badges */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Chips & Badges:</p>
                <div className="flex gap-2 items-center">
                  <Chip>Default</Chip>
                  <Chip color="primary">Primary</Chip>
                  <Badge content="5" color="danger">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  </Badge>
                  <HeartIcon className="w-5 h-5 text-red-500" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                </div>
              </div>

              {/* Progress */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Progress:</p>
                <Progress value={70} color="primary" className="max-w-md" />
              </div>

              {/* Input and Switch */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Form Elements:</p>
                <div className="flex gap-4 items-center">
                  <Input 
                    type="email" 
                    label="Email" 
                    placeholder="Enter your email"
                    className="max-w-xs"
                  />
                  <Switch defaultSelected color="primary">
                    Dark Mode
                  </Switch>
                </div>
              </div>

              {/* Tabs */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Tabs:</p>
                <Tabs aria-label="Options" color="primary">
                  <Tab key="photos" title="Photos">
                    <Card>
                      <CardBody>
                        <p>Photos content here</p>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="music" title="Music">
                    <Card>
                      <CardBody>
                        <p>Music content here</p>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="videos" title="Videos">
                    <Card>
                      <CardBody>
                        <p>Videos content here</p>
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </div>

              {/* Code Snippet */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Code Display:</p>
                <Snippet symbol="$" variant="flat">
                  npm install @heroui/react
                </Snippet>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Debug Info */}
        <Card className="p-4">
          <CardBody>
            <h3 className="font-semibold mb-2">Debug Information</h3>
            <div className="text-sm space-y-1">
              <p>Timestamp: {timestamp}</p>
              <p>Cache Buster: {Math.random().toString(36).substring(7)}</p>
              <p>User Agent: <span className="text-xs">{typeof window !== 'undefined' ? window.navigator.userAgent : 'SSR'}</span></p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}