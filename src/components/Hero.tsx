import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text, Sphere, Box, Torus, Ring } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Download, Play, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import profilePhoto from '../assets/profile-pic.jpeg';

function AIVisualization() {
  return (
    <group>
      {/* Central Brain/Chip */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.2}>
        <Box args={[1, 0.1, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1e40af"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </Float>

      {/* Neural Connection Nodes */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const radius = 2;
        return (
          <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.5}>
            <Sphere
              args={[0.1, 16, 16]}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 0.5) * 0.5,
                Math.sin(angle) * radius
              ]}
            >
              <meshStandardMaterial
                color="#10b981"
                emissive="#059669"
                emissiveIntensity={0.3}
              />
            </Sphere>
          </Float>
        );
      })}

      {/* Orbiting Data Rings */}
      <group rotation-y={0}>
        <Ring args={[1.5, 1.7, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.6}
            emissive="#7c3aed"
            emissiveIntensity={0.1}
          />
        </Ring>
      </group>

      <group rotation-y={Math.PI / 4}>
        <Ring args={[2.2, 2.4, 32]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial
            color="#f59e0b"
            transparent
            opacity={0.4}
            emissive="#d97706"
            emissiveIntensity={0.1}
          />
        </Ring>
      </group>
    </group>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
      <directionalLight position={[0, 5, 5]} intensity={0.4} />

      <AIVisualization />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

function TypewriterText() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingWords = personalInfo.rotatingKeywords;
  const baseText = "Expert in ";

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = rotatingWords[currentIndex];

      if (!isDeleting) {
        setCurrentText(baseText + currentWord.substring(0, currentText.length - baseText.length + 1));

        if (currentText === baseText + currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(baseText + currentWord.substring(0, currentText.length - baseText.length - 1));

        if (currentText === baseText) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, rotatingWords, baseText]);

  return (
    <span className="gradient-text">
      {currentText}
      <motion.span
        className="inline-block w-0.5 h-8 bg-primary ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-muted -z-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Hi, I'm{' '}
                <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
              </motion.div>

              <motion.div
                className="text-2xl md:text-4xl mt-2 h-16 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <TypewriterText />
              </motion.div>
            </h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {personalInfo.summary}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8 relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary group inline-flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                View My Work
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download="RESUME_SPANDANA_DEVARASETTY_CRC.pdf"
                className="btn-secondary inline-flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Visualization & Profile */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Profile Image */}
            <div className="relative mb-6 flex justify-center">
              <motion.div
                className="w-48 aspect-[3/4] md:w-80 rounded-2xl overflow-hidden shadow-hero border-4 border-border/20"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating Border */}
              {/* <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                style={{ width: '110%', height: '110%', left: '-5%', top: '-5%' }}
                animate={{ 
                  borderColor: ["hsl(var(--primary)/0.3)", "hsl(var(--primary)/0.6)", "hsl(var(--primary)/0.3)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              /> */}
            </div>
            {/* 3D Canvas */}
            {/* <div className="h-80 w-full">
                    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                      <Suspense fallback={null}>
                        <HeroScene />
                      </Suspense>
                    </Canvas>
                  </div> */}

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}