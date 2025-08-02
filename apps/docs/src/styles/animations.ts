// Noise Heroes Animation System
// Smooth, modern animations for interactive components

export const animations = {
  // Entrance animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  
  // Music-specific animations
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  
  glow: {
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(59, 130, 246, 0)",
        "0 0 20px 10px rgba(59, 130, 246, 0.3)",
        "0 0 0 0 rgba(59, 130, 246, 0)",
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  
  // Interactive animations
  hover: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },
  
  buttonPress: {
    whileTap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    },
  },
  
  // Loading animations
  shimmer: {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  },
};

// Transition presets
export const transitions = {
  // Quick transitions for UI responsiveness
  quick: {
    duration: 0.2,
    ease: "easeOut",
  },
  
  // Standard transitions for most interactions
  standard: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1], // Material Design easing
  },
  
  // Smooth transitions for larger movements
  smooth: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  },
  
  // Spring animations for playful interactions
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 25,
  },
  
  // Bounce for attention-grabbing elements
  bounce: {
    type: "spring",
    stiffness: 500,
    damping: 15,
  },
};

// Stagger animations for lists
export const staggerConfig = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

// Music visualizer animation
export const visualizerAnimation = {
  animate: (i: number) => ({
    height: ["20%", "100%", "20%"],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: i * 0.1,
    },
  }),
};

// Custom hook for NH animations
export const useNHAnimation = (variant: keyof typeof animations) => {
  return animations[variant];
};