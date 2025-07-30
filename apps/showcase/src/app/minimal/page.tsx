"use client";

import dynamic from 'next/dynamic';
import { 
  NHButton,
  NHIconButton,
  NHNav,
  NHWallpaper
} from "@nh-ui/ui";

const NHMinimalCard = dynamic(
  () => import("@nh-ui/ui").then(mod => ({ default: mod.NHMinimalCard })),
  { ssr: false }
);

const NHGlassSection = dynamic(
  () => import("@nh-ui/ui").then(mod => ({ default: mod.NHGlassSection })),
  { ssr: false }
);
import {
  CardBody,
  Chip,
  Avatar,
  AvatarGroup,
  Progress,
} from "@heroui/react";
import { 
  PlayIcon,
  PauseIcon,
  HeartIcon,
  ShareIcon,
  HomeIcon,
  MusicalNoteIcon,
  UserIcon,
  Cog6ToothIcon,
  SparklesIcon,
  BellIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ArrowRightIcon,
  ChartBarIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function MinimalDesignPage() {
  const [activeNav, setActiveNav] = useState(0);
  const [liked, setLiked] = useState(false);

  const navItems = [
    { icon: <HomeIcon className="h-5 w-5" />, label: "Home" },
    { icon: <MusicalNoteIcon className="h-5 w-5" />, label: "Music" },
    { icon: <ChartBarIcon className="h-5 w-5" />, label: "Stats" },
    { icon: <UserIcon className="h-5 w-5" />, label: "Profile" },
    { icon: <Cog6ToothIcon className="h-5 w-5" />, label: "Settings" },
  ];

  return (
    <div className="min-h-screen">
      <NHWallpaper variant="subtle" animated />
      {/* Hero Section */}
      <NHGlassSection blur="xl" className="m-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <NHIconButton size="lg" color="primary" spin>
              <SparklesIcon className="h-6 w-6" />
            </NHIconButton>
            <h1 className="text-5xl font-bold">Minimal Design</h1>
            <NHIconButton size="lg" color="secondary" spin>
              <SparklesIcon className="h-6 w-6" />
            </NHIconButton>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Circle-first • Icon-focused • Pill-shaped • Minimal text
          </p>
        </div>
      </NHGlassSection>

      <div className="max-w-7xl mx-auto p-8 space-y-12">
        {/* Navigation Examples */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Navigation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Horizontal Nav */}
            <NHMinimalCard>
              <CardBody>
                <h3 className="text-lg font-semibold mb-4">Horizontal Navigation</h3>
                <NHNav 
                  items={navItems.map((item, index) => ({
                    ...item,
                    active: index === activeNav,
                    onClick: () => setActiveNav(index)
                  }))}
                  orientation="horizontal"
                />
                
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">With labels:</p>
                  <NHNav 
                    items={navItems.slice(0, 3).map((item, index) => ({
                      ...item,
                      active: index === activeNav,
                      onClick: () => setActiveNav(index)
                    }))}
                    orientation="horizontal"
                    showLabels
                  />
                </div>
              </CardBody>
            </NHMinimalCard>

            {/* Vertical Nav */}
            <NHMinimalCard>
              <CardBody>
                <h3 className="text-lg font-semibold mb-4">Vertical Navigation</h3>
                <div className="max-w-xs">
                  <NHNav 
                    items={navItems.map((item, index) => ({
                      ...item,
                      active: index === activeNav,
                      onClick: () => setActiveNav(index)
                    }))}
                    orientation="vertical"
                    showLabels
                  />
                </div>
              </CardBody>
            </NHMinimalCard>
          </div>
        </section>

        {/* Button Variants */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Buttons</h2>
          <div className="space-y-6">
            {/* Pill Buttons */}
            <NHMinimalCard>
              <CardBody>
                <h3 className="text-lg font-semibold mb-4">Pill Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <NHButton pill color="primary">
                    Get Started
                  </NHButton>
                  <NHButton pill color="secondary">
                    Learn More
                  </NHButton>
                  <NHButton pill variant="bordered">
                    Contact Us
                  </NHButton>
                  <NHButton pill variant="flat" endContent={<ArrowRightIcon className="h-4 w-4" />}>
                    Next Step
                  </NHButton>
                </div>
              </CardBody>
            </NHMinimalCard>

            {/* Icon Buttons */}
            <NHMinimalCard>
              <CardBody>
                <h3 className="text-lg font-semibold mb-4">Circular Icon Buttons</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <NHIconButton color="primary" size="sm" tooltip="Play">
                      <PlayIcon className="h-4 w-4" />
                    </NHIconButton>
                    <NHIconButton color="primary" tooltip="Pause">
                      <PauseIcon className="h-5 w-5" />
                    </NHIconButton>
                    <NHIconButton color="primary" size="lg" tooltip="Like">
                      <HeartIcon className="h-6 w-6" />
                    </NHIconButton>
                    <NHIconButton color="primary" size="lg" pulse tooltip="Recording">
                      <MicrophoneIcon className="h-6 w-6" />
                    </NHIconButton>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <NHIconButton variant="flat" tooltip="Search">
                      <MagnifyingGlassIcon className="h-5 w-5" />
                    </NHIconButton>
                    <NHIconButton variant="flat" tooltip="Notifications">
                      <BellIcon className="h-5 w-5" />
                    </NHIconButton>
                    <NHIconButton variant="flat" tooltip="Add">
                      <PlusIcon className="h-5 w-5" />
                    </NHIconButton>
                    <NHIconButton variant="flat" tooltip="Settings" spin>
                      <Cog6ToothIcon className="h-5 w-5" />
                    </NHIconButton>
                  </div>
                </div>
              </CardBody>
            </NHMinimalCard>
          </div>
        </section>

        {/* Minimal Music Player */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Minimal Music Player</h2>
          <NHMinimalCard className="max-w-md mx-auto">
            <CardBody>
              <div className="flex items-center gap-4 mb-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200"
                  className="w-16 h-16"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">Midnight Vibes</h4>
                  <p className="text-sm text-gray-500">Noise Heroes</p>
                </div>
                <NHIconButton 
                  variant="flat" 
                  color={liked ? "danger" : "default"}
                  onClick={() => setLiked(!liked)}
                  tooltip="Like"
                >
                  {liked ? (
                    <HeartIconSolid className="h-5 w-5" />
                  ) : (
                    <HeartIcon className="h-5 w-5" />
                  )}
                </NHIconButton>
              </div>
              
              <Progress value={65} size="sm" className="mb-4" />
              
              <div className="flex justify-center items-center gap-2">
                <NHIconButton variant="light" size="sm">
                  <SpeakerWaveIcon className="h-4 w-4" />
                </NHIconButton>
                
                <div className="flex items-center gap-1">
                  <NHIconButton variant="light">
                    <PlayIcon className="h-5 w-5" />
                  </NHIconButton>
                  <NHIconButton color="primary" size="lg">
                    <PauseIcon className="h-6 w-6" />
                  </NHIconButton>
                  <NHIconButton variant="light">
                    <PlayIcon className="h-5 w-5 rotate-180" />
                  </NHIconButton>
                </div>
                
                <NHIconButton variant="light" size="sm">
                  <ShareIcon className="h-4 w-4" />
                </NHIconButton>
              </div>
            </CardBody>
          </NHMinimalCard>
        </section>

        {/* Icon-First Cards */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Icon-First Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <NHMinimalCard icon={<MusicalNoteIcon className="h-6 w-6 text-primary" />}>
              <CardBody className="pt-0">
                <h3 className="font-semibold mb-1">48 Tracks</h3>
                <p className="text-sm text-gray-500">Your music library</p>
              </CardBody>
            </NHMinimalCard>
            
            <NHMinimalCard icon={<HeartIcon className="h-6 w-6 text-danger" />}>
              <CardBody className="pt-0">
                <h3 className="font-semibold mb-1">256 Likes</h3>
                <p className="text-sm text-gray-500">Favorite songs</p>
              </CardBody>
            </NHMinimalCard>
            
            <NHMinimalCard icon={<UserIcon className="h-6 w-6 text-secondary" />}>
              <CardBody className="pt-0">
                <h3 className="font-semibold mb-1">1.2K Followers</h3>
                <p className="text-sm text-gray-500">Growing audience</p>
              </CardBody>
            </NHMinimalCard>
          </div>
        </section>

        {/* Design Principles */}
        <NHGlassSection blur="lg" className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Minimal Design Principles</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <NHIconButton color="primary" size="lg" className="mb-3">
                <SparklesIcon className="h-6 w-6" />
              </NHIconButton>
              <h3 className="font-semibold mb-2">Circles Everywhere</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Round buttons, avatars, and elements
              </p>
            </div>
            
            <div className="text-center">
              <NHButton pill color="primary" size="sm" className="mb-3">
                Pill Shape
              </NHButton>
              <h3 className="font-semibold mb-2">Pill Buttons</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Soft, rounded corners on all buttons
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-3">
                <NHIconButton size="sm" variant="flat">
                  <HeartIcon className="h-4 w-4" />
                </NHIconButton>
                <NHIconButton size="sm" variant="flat">
                  <ShareIcon className="h-4 w-4" />
                </NHIconButton>
              </div>
              <h3 className="font-semibold mb-2">Icons First</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Clear icons replace verbose text
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 border-2 border-dashed border-gray-300 rounded-xl"></div>
              <h3 className="font-semibold mb-2">Minimal & Slim</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Clean lines and generous space
              </p>
            </div>
          </div>
        </NHGlassSection>
      </div>
    </div>
  );
}