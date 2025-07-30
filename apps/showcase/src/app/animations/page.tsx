"use client";

import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { animations, transitions, staggerConfig, visualizerAnimation } from "@/styles/animations";
import { NHButton } from "@/components/nh-button";
import { NHMusicPlayer } from "@/components/nh-music-player";
import { 
  SparklesIcon,
  PlayIcon,
  HeartIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function AnimationsPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const sampleTrack = {
    title: "Electric Dreams",
    artist: "Noise Heroes",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
    duration: "3:52",
    genre: "Electronic",
    year: "2024",
  };

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Animation System</h1>
        <p className="text-xl text-gray-600">
          Smooth, performant animations for delightful user experiences
        </p>
      </div>

      {/* Entrance Animations */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Entrance Animations</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={animations.fadeIn.initial}
              animate={animations.fadeIn.animate}
              transition={transitions.standard}
              className="p-6 bg-primary/10 rounded-lg text-center"
            >
              <p className="font-semibold">Fade In</p>
            </motion.div>
            
            <motion.div
              initial={animations.slideUp.initial}
              animate={animations.slideUp.animate}
              transition={transitions.standard}
              className="p-6 bg-secondary/10 rounded-lg text-center"
            >
              <p className="font-semibold">Slide Up</p>
            </motion.div>
            
            <motion.div
              initial={animations.slideDown.initial}
              animate={animations.slideDown.animate}
              transition={transitions.standard}
              className="p-6 bg-success/10 rounded-lg text-center"
            >
              <p className="font-semibold">Slide Down</p>
            </motion.div>
            
            <motion.div
              initial={animations.scaleIn.initial}
              animate={animations.scaleIn.animate}
              transition={transitions.standard}
              className="p-6 bg-warning/10 rounded-lg text-center"
            >
              <p className="font-semibold">Scale In</p>
            </motion.div>
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
            <NHButton color="primary" startContent={<PlayIcon className="h-4 w-4" />}>
              Animated Button
            </NHButton>
            
            <NHButton 
              color="secondary" 
              variant="flat"
              startContent={<HeartIcon className="h-4 w-4" />}
              glow
            >
              Glowing Button
            </NHButton>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={transitions.spring}
            >
              <Chip color="primary" variant="shadow">
                Spring Animation
              </Chip>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Chip color="success" variant="flat">
                Floating Chip
              </Chip>
            </motion.div>
          </div>
        </CardBody>
      </Card>

      {/* Music Player Demo */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Animated Music Player</h2>
        </CardHeader>
        <CardBody>
          <div className="flex justify-center">
            <NHMusicPlayer
              track={sampleTrack}
              isPlaying={isPlaying}
              onPlayPause={() => setIsPlaying(!isPlaying)}
            />
          </div>
        </CardBody>
      </Card>

      {/* Music Visualizer */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Music Visualizer</h2>
        </CardHeader>
        <CardBody>
          <div className="flex justify-center items-end gap-1 h-32">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 bg-gradient-to-t from-primary to-secondary rounded-t"
                animate={visualizerAnimation.animate(i)}
                style={{ height: "20%" }}
              />
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Stagger Animation */}
      <Card className="mb-12">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Stagger Animation</h2>
        </CardHeader>
        <CardBody>
          <motion.div 
            className="grid grid-cols-3 gap-4"
            variants={staggerConfig.container}
            initial="initial"
            animate="animate"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={staggerConfig.item}
                className="p-6 bg-default-100 rounded-lg text-center"
              >
                <MusicalNoteIcon className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Track {item}</p>
              </motion.div>
            ))}
          </motion.div>
        </CardBody>
      </Card>

      {/* Text Effects */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Text Effects</h2>
        </CardHeader>
        <CardBody className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold nh-gradient-text mb-2">
              Animated Gradient Text
            </h3>
            <p className="text-default-600">
              Smooth gradient animation for eye-catching headlines
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <SparklesIcon className="h-6 w-6 text-primary" />
              </motion.span>
              Rotating Icons
            </h3>
          </motion.div>
          
          <div className="nh-hover-lift inline-block">
            <Card className="p-4">
              <p className="font-medium">Hover to lift this card</p>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}