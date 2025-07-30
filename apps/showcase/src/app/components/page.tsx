"use client";

import { 
  Button, 
  Card, 
  CardBody, 
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Input,
  Textarea,
  Switch,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Slider,
  Tabs,
  Tab,
  Avatar,
  AvatarGroup,
  Badge,
  Progress,
  Spinner,
  Skeleton,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

import { 
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  HeartIcon,
  ShareIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  QueueListIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ComponentsPage() {
  const [liked, setLiked] = useState(false);
  const [volume, setVolume] = useState(70);
  const [selectedTab, setSelectedTab] = useState("tracks");
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const genres = [
    { value: "electronic", label: "Electronic" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "classical", label: "Classical" },
    { value: "hiphop", label: "Hip-Hop" },
  ];

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">NH Components</h1>
        <p className="text-xl text-gray-600">
          Music-focused components built with Noise Heroes design system
        </p>
      </div>

      {/* Music Player Card */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Music Player Components</h2>
        </CardHeader>
        <CardBody className="space-y-8">
          {/* Now Playing Card */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Now Playing Card</h3>
            <Card className="max-w-md bg-gradient-to-br from-purple-500/10 to-blue-500/10">
              <CardBody className="gap-4">
                <div className="flex gap-4">
                  <Avatar
                    radius="lg"
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
                    className="w-20 h-20"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">Electric Dreams</h4>
                    <p className="text-small text-default-500">Noise Heroes</p>
                    <div className="flex gap-2 mt-2">
                      <Chip size="sm" variant="flat">Electronic</Chip>
                      <Chip size="sm" variant="flat">2024</Chip>
                    </div>
                  </div>
                </div>
                
                <Progress 
                  value={65} 
                  size="sm"
                  color="primary"
                  label="2:34 / 3:52"
                  showValueLabel
                />
                
                <div className="flex justify-center gap-4">
                  <Button isIconOnly variant="light" size="lg">
                    <BackwardIcon className="h-5 w-5" />
                  </Button>
                  <Button isIconOnly color="primary" size="lg">
                    <PauseIcon className="h-6 w-6" />
                  </Button>
                  <Button isIconOnly variant="light" size="lg">
                    <ForwardIcon className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <Button
                    isIconOnly
                    variant="light"
                    onPress={() => setLiked(!liked)}
                  >
                    {liked ? (
                      <HeartIconSolid className="h-5 w-5 text-danger" />
                    ) : (
                      <HeartIcon className="h-5 w-5" />
                    )}
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <SpeakerXMarkIcon className="h-4 w-4" />
                    <Slider 
                      size="sm"
                      value={volume}
                      onChange={(value) => setVolume(value as number)}
                      className="w-24"
                    />
                    <SpeakerWaveIcon className="h-4 w-4" />
                  </div>
                  
                  <Button isIconOnly variant="light">
                    <ShareIcon className="h-5 w-5" />
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Track List */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Track List Component</h3>
            <Card>
              <CardBody className="gap-0 p-0">
                {[
                  { title: "Neon Lights", artist: "Noise Heroes", duration: "3:24", plays: "1.2M" },
                  { title: "Digital Wave", artist: "Noise Heroes", duration: "4:12", plays: "980K" },
                  { title: "Cyber Dreams", artist: "Noise Heroes", duration: "3:52", plays: "756K" },
                ].map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 hover:bg-default-100 transition-colors cursor-pointer"
                  >
                    <span className="text-default-400 w-8">{index + 1}</span>
                    <Avatar
                      radius="sm"
                      size="sm"
                      src={`https://picsum.photos/seed/${index}/50`}
                    />
                    <div className="flex-1">
                      <p className="font-medium">{track.title}</p>
                      <p className="text-small text-default-500">{track.artist}</p>
                    </div>
                    <Chip size="sm" variant="flat">{track.plays} plays</Chip>
                    <span className="text-small text-default-400">{track.duration}</span>
                    <Button isIconOnly size="sm" variant="light">
                      <PlayIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>

      {/* Form Components */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Form Components</h2>
        </CardHeader>
        <CardBody className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <Input
                label="Artist Name"
                placeholder="Enter artist name"
                startContent={<MicrophoneIcon className="h-4 w-4" />}
              />
              
              <Input
                label="Track Title"
                placeholder="Enter track title"
                startContent={<MusicalNoteIcon className="h-4 w-4" />}
                description="This will be displayed on your profile"
              />
              
              <Select 
                label="Genre" 
                placeholder="Select a genre"
                startContent={<QueueListIcon className="h-4 w-4" />}
              >
                {genres.map((genre) => (
                  <SelectItem key={genre.value}>
                    {genre.label}
                  </SelectItem>
                ))}
              </Select>
              
              <Textarea
                label="Track Description"
                placeholder="Tell us about your track..."
                minRows={3}
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-small font-medium mb-3">Release Type</p>
                <RadioGroup defaultValue="single">
                  <Radio value="single">Single</Radio>
                  <Radio value="ep">EP</Radio>
                  <Radio value="album">Album</Radio>
                </RadioGroup>
              </div>
              
              <div>
                <p className="text-small font-medium mb-3">Distribution Options</p>
                <CheckboxGroup defaultValue={["streaming"]}>
                  <Checkbox value="streaming">Streaming Platforms</Checkbox>
                  <Checkbox value="download">Digital Download</Checkbox>
                  <Checkbox value="vinyl">Vinyl Release</Checkbox>
                </CheckboxGroup>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-small">Make track public</span>
                <Switch defaultSelected />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Artist Profile Components */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Artist Profile Components</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-8">
            {/* Artist Header */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Artist Header</h3>
              <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardBody className="gap-6">
                  <div className="flex items-start gap-6">
                    <Avatar
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
                      className="w-32 h-32"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl font-bold">Noise Heroes</h2>
                        <Badge content="PRO" color="warning" variant="flat">
                          <div />
                        </Badge>
                      </div>
                      <p className="text-white/80 mb-4">
                        Electronic music producer crafting future sounds
                      </p>
                      <div className="flex gap-6 mb-4">
                        <div>
                          <p className="text-2xl font-bold">1.2M</p>
                          <p className="text-small text-white/60">Followers</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">48</p>
                          <p className="text-small text-white/60">Tracks</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">12.5M</p>
                          <p className="text-small text-white/60">Plays</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button color="default" variant="solid">
                          Follow
                        </Button>
                        <Button color="default" variant="bordered">
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Content Tabs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Content Navigation</h3>
              <Tabs 
                selectedKey={selectedTab}
                onSelectionChange={setSelectedTab}
                color="primary"
                variant="underlined"
              >
                <Tab
                  key="tracks"
                  title={
                    <div className="flex items-center gap-2">
                      <MusicalNoteIcon className="h-4 w-4" />
                      <span>Tracks</span>
                      <Chip size="sm" variant="flat">48</Chip>
                    </div>
                  }
                />
                <Tab
                  key="playlists"
                  title={
                    <div className="flex items-center gap-2">
                      <QueueListIcon className="h-4 w-4" />
                      <span>Playlists</span>
                      <Chip size="sm" variant="flat">12</Chip>
                    </div>
                  }
                />
                <Tab
                  key="stats"
                  title={
                    <div className="flex items-center gap-2">
                      <ChartBarIcon className="h-4 w-4" />
                      <span>Stats</span>
                    </div>
                  }
                />
              </Tabs>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Interactive Elements */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Interactive Elements</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Add to playlist">
              <Button isIconOnly variant="flat">
                <QueueListIcon className="h-5 w-5" />
              </Button>
            </Tooltip>
            
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button 
                  startContent={<UserGroupIcon className="h-4 w-4" />}
                  variant="flat"
                >
                  Collaborators
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Project Collaborators</div>
                  <div className="text-tiny">3 people have access</div>
                  <AvatarGroup className="mt-2" max={3}>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  </AvatarGroup>
                </div>
              </PopoverContent>
            </Popover>
            
            <Button 
              onPress={onOpen}
              color="primary"
              startContent={<ShareIcon className="h-4 w-4" />}
            >
              Share Track
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Loading States */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Loading States</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Spinner size="sm" />
              <Spinner size="md" color="primary" />
              <Spinner size="lg" color="secondary" />
            </div>
            
            <div className="space-y-3">
              <Skeleton className="rounded-lg">
                <div className="h-12 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="flex gap-3">
                <Skeleton className="rounded-lg w-3/5">
                  <div className="h-8 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="rounded-lg w-2/5">
                  <div className="h-8 rounded-lg bg-default-200"></div>
                </Skeleton>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Share Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Share Track
              </ModalHeader>
              <ModalBody>
                <p>Share "Electric Dreams" with your audience</p>
                <Input
                  label="Share Link"
                  value="https://noiseheroes.com/track/electric-dreams"
                  readOnly
                  endContent={
                    <Button size="sm" variant="flat">
                      Copy
                    </Button>
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Share
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}