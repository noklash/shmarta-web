import { Button } from "./ui/button";
import { Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import welcomeIllustration from "figma:asset/0d7bec744a881e8bd1f598e3f9098e611dba9611.png";

interface WelcomeScreenProps {
  onSignUp: () => void;
  onGuest: () => void;
}

export default function WelcomeScreen({ onSignUp, onGuest }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-3 h-3 bg-orange-400 rounded-full"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-32 right-20 w-2 h-2 bg-pink-400 rounded-full"
        animate={{ 
          y: [0, 12, 0],
          x: [0, -5, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full"
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-12 w-4 h-4 bg-yellow-400 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-8 w-2 h-2 bg-blue-400 rounded-full"
        animate={{ 
          x: [0, 12, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-1/3 right-8 w-1 h-1 bg-green-400 rounded-full"
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      
      {/* Logo with lightbulb */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="flex items-center justify-center mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="relative p-4 bg-white/20 rounded-full backdrop-blur-sm shadow-lg"
            animate={{ 
              boxShadow: [
                "0 8px 32px rgba(79, 70, 229, 0.2)",
                "0 12px 40px rgba(79, 70, 229, 0.3)",
                "0 8px 32px rgba(79, 70, 229, 0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Lightbulb className="w-16 h-16 text-indigo-700 fill-yellow-400" />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.h1 
          className="text-6xl font-bold text-indigo-800 mb-2 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          shmarta
        </motion.h1>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
      
      {/* Tagline */}
      <div className="text-center mb-10 px-4">
        <p className="text-xl text-indigo-700 max-w-sm leading-relaxed font-medium">
          Master Something New in Just<br />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">10 Minutes a Day</span>
        </p>
      </div>
      
      {/* Illustration from figma import */}
      <div className="mb-12 relative">
        <img 
          src={welcomeIllustration}
          alt="People learning together"
          className="w-80 h-64 object-contain"
        />
      </div>
      
      {/* CTA Buttons */}
      <motion.div 
        className="flex flex-col gap-4 w-full max-w-sm px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            onClick={onSignUp}
            className="w-full py-5 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 rounded-full shadow-xl border-0 transition-all duration-200 hover:shadow-2xl btn-gradient-glow"
          >
            🚀 Start Learning for Free
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            onClick={onGuest}
            className="w-full py-5 text-lg font-semibold bg-white/90 text-indigo-700 hover:bg-white hover:text-indigo-800 rounded-full shadow-lg border-2 border-indigo-200 transition-all duration-200 backdrop-blur-sm"
          >
            👋 Continue as Guest
          </Button>
        </motion.div>
        
        {/* Login link */}
        <motion.p 
          className="text-center text-indigo-700 mt-6 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Already have an account? <span className="underline cursor-pointer hover:text-indigo-900 font-semibold">Log In</span>
        </motion.p>
      </motion.div>
    </div>
  );
}