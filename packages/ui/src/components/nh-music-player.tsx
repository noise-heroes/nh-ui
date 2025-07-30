"use client";

import { Card, CardBody, Progress, Avatar, Chip } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { animations, transitions } from "../styles/animations";
import { NHButton } from "./nh-button";
import { 
  PlayIcon, 
  PauseIcon, 
  ForwardIcon, 
  BackwardIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

interface Track {
  title: string;
  artist: string;
  coverUrl: string;
  duration: string;
  genre: string;
  year: string;
}

interface NHMusicPlayerProps {
  track: Track;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function NHMusicPlayer({
  track,
  isPlaying = false,
  onPlayPause,
  onNext,
  onPrevious,
}: NHMusicPlayerProps) {
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(65);
  
  return (
    <motion.div
      initial={animations.scaleIn.initial}
      animate={animations.scaleIn.animate}
      transition={transitions.smooth}
    >
      <Card className="max-w-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-0">
        <CardBody className="gap-4">
          {/* Track Info */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitions.standard}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={transitions.spring}
            >
              <Avatar
                radius="lg"
                src={track.coverUrl}
                className="w-20 h-20"
              />
            </motion.div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold">{track.title}</h4>
              <p className="text-small text-default-500">{track.artist}</p>
              <div className="flex gap-2 mt-2">
                <Chip size="sm" variant="flat">{track.genre}</Chip>
                <Chip size="sm" variant="flat">{track.year}</Chip>
              </div>
            </div>
          </motion.div>
          
          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ ...transitions.standard, delay: 0.2 }}
          >
            <Progress 
              value={progress} 
              size="sm"
              color="primary"
              label={`2:34 / ${track.duration}`}
              showValueLabel
            />
          </motion.div>
          
          {/* Controls */}
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitions.standard, delay: 0.3 }}
          >
            <NHButton 
              isIconOnly 
              variant="light" 
              size="lg"
              onPress={onPrevious}
            >
              <BackwardIcon className="h-5 w-5" />
            </NHButton>
            
            <motion.div
              animate={isPlaying ? animations.pulse.animate : {}}
            >
              <NHButton 
                isIconOnly 
                color="primary" 
                size="lg"
                onPress={onPlayPause}
                glow={isPlaying}
              >
                <AnimatePresence mode="wait">
                  {isPlaying ? (
                    <motion.div
                      key="pause"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={transitions.quick}
                    >
                      <PauseIcon className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="play"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={transitions.quick}
                    >
                      <PlayIcon className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </NHButton>
            </motion.div>
            
            <NHButton 
              isIconOnly 
              variant="light" 
              size="lg"
              onPress={onNext}
            >
              <ForwardIcon className="h-5 w-5" />
            </NHButton>
          </motion.div>
          
          {/* Actions */}
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transitions.standard, delay: 0.4 }}
          >
            <NHButton
              isIconOnly
              variant="light"
              onPress={() => setLiked(!liked)}
            >
              <AnimatePresence mode="wait">
                {liked ? (
                  <motion.div
                    key="liked"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={transitions.spring}
                  >
                    <HeartIconSolid className="h-5 w-5 text-danger" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="unliked"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={transitions.spring}
                  >
                    <HeartIcon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </NHButton>
            
            <NHButton isIconOnly variant="light">
              <ShareIcon className="h-5 w-5" />
            </NHButton>
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
}