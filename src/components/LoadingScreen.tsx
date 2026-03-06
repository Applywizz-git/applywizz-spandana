import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sphere, Box, Torus } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillOrbProps {
  position: [number, number, number];
  color: string;
  text: string;
  delay: number;
}

function SkillOrb({ position, color, text, delay }: SkillOrbProps) {
  return (
    <Float speed={1 + delay} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <Sphere args={[0.3, 32, 32]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </Sphere>
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

function DataNodes() {
  const skills = [
    { text: "ICH-GCP", color: "#3b82f6", position: [-2, 1, 0] as [number, number, number] },
    { text: "FDA Regs", color: "#10b981", position: [2, 0.5, -1] as [number, number, number] },
    { text: "CTMS", color: "#f59e0b", position: [0, -1, 1] as [number, number, number] },
    { text: "IRB", color: "#ef4444", position: [-1.5, -0.5, -1] as [number, number, number] },
    { text: "EDC", color: "#8b5cf6", position: [1, 1.5, 0] as [number, number, number] },
  ];

  return (
    <group>
      {skills.map((skill, index) => (
        <SkillOrb
          key={skill.text}
          position={skill.position}
          color={skill.color}
          text={skill.text}
          delay={index * 0.2}
        />
      ))}

      {/* Central connecting hub */}
      <Torus args={[1.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#6366f1" wireframe />
      </Torus>

      {/* Rotating outer ring */}
      <group rotation-y={0}>
        <Torus args={[2.5, 0.05, 8, 50]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
        </Torus>
      </group>
    </group>
  );
}

function LoadingScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <DataNodes />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </>
  );
}

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Research Systems...");

  const loadingMessages = [
    "Initializing Research Systems...",
    "Verifying GCP Compliance...",
    "Syncing Trial Databases...",
    "Preparing Portfolio Experience...",
    "Calibration Complete..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;

        // Update loading message based on progress
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length);
        if (messageIndex < loadingMessages.length) {
          setLoadingText(loadingMessages[messageIndex]);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Loading Text */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-4xl font-display font-bold gradient-text mb-4">
          Spandana Devarasetty
        </h1>
        <p className="text-xl text-muted-foreground">Clinical Research Coordinator</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-80 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">{loadingText}</span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
        </div>

        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Subtle hint */}
      <motion.p
        className="text-xs text-muted-foreground mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Crafting an immersive portfolio experience...
      </motion.p>
    </motion.div>
  );
}
