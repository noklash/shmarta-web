import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Share2, 
  Lightbulb,
  Atom,
  Globe,
  Heart,
  User,
  Coins,
  BarChart3,
  Zap,
  TrendingUp
} from "lucide-react";

interface HomeFeedProps {
  onExpand: (fact: any) => void;
  onShare: (fact: any) => void;
}

const facts = [
  {
    id: 1,
    category: "Science",
    icon: Atom,
    chipColor: "bg-purple-500",
    fact: "CLEOPATRA WAS ALIVE CLOSER TO THE INVENTION OF iPHONE GREAT PYRAMID",
    shortDescription: "Wait, really? Tell me more!",
    details: "Cleopatra VII lived around 69–30 30 BC, while la Great Pyramid: 560 BC. The first iPhone released s ehc much shote gap to 2007.",
    illustration: "https://images.unsplash.com/photo-1685521885141-89c83b12ca65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNjaWVuY2UlMjBlZHVjYXRpb24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU2ODkwMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    category: "Animals",
    icon: Heart,
    chipColor: "bg-green-500",
    fact: "OCTOPUSES HAVE THREE HEARTS AND BLUE BLOOD",
    shortDescription: "Incredible ocean creatures!",
    details: "Two hearts pump blood to the gills, while the third pumps blood to the rest of the body. Their copper-based blood makes it blue!",
    illustration: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY3RvcHVzJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NTY4OTAwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    category: "History",
    icon: Globe,
    chipColor: "bg-gray-500",
    fact: "THE GREAT WALL OF CHINA TOOK OVER 2,000 YEARS TO BUILD",
    shortDescription: "An amazing feat of engineering!",
    details: "Construction began in the 7th century BC and continued through the Ming Dynasty. It's over 13,000 miles long!",
    illustration: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVhdCUyMHdhbGwlMjBjaGluYXxlbnwxfHx8fDE3NTY4OTAwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export default function HomeFeed({ onExpand, onShare }: HomeFeedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  
  const currentFact = facts[currentIndex];
  const Icon = currentFact.icon;
  
  // Auto-advance animation (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextFact();
    }, 8000); // Change every 8 seconds
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const nextFact = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % facts.length);
      setIsAnimating(false);
    }, 200);
  };
  
  const prevFact = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + facts.length) % facts.length);
      setIsAnimating(false);
    }, 200);
  };
  
  const goToFact = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 p-4 flex flex-col relative overflow-hidden">
      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-3 h-3 bg-orange-400 rounded-full"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-32 right-20 w-4 h-4 bg-pink-400 rounded-full"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -5, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-12 w-2 h-2 bg-yellow-400 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-8 w-2 h-2 bg-blue-400 rounded-full"
        animate={{ 
          x: [0, 8, 0],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      {/* Top Header */}
      <motion.div 
        className="flex items-center justify-between pt-12 pb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar className="w-12 h-12 border-2 border-white shadow-lg">
              <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                <User className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <div>
            <motion.p 
              className="text-indigo-800 font-semibold text-lg"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Welcome back!
            </motion.p>
            <p className="text-indigo-600 text-sm">Day 1 of your streak 🔥</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full px-4 py-2 shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(234, 179, 8, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 4px 15px rgba(234, 179, 8, 0.2)",
              "0 6px 20px rgba(234, 179, 8, 0.3)",
              "0 4px 15px rgba(234, 179, 8, 0.2)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Coins className="w-5 h-5 text-yellow-900" />
          </motion.div>
          <span className="text-yellow-900 font-bold text-lg">25</span>
        </motion.div>
      </motion.div>
      
      {/* Progress Bar */}
      <motion.div 
        className="w-full bg-white/60 rounded-full h-4 mb-6 shadow-inner relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div 
          className="bg-gradient-to-r from-orange-400 to-orange-500 h-4 rounded-full shadow-lg relative"
          initial={{ width: '0%' }}
          animate={{ width: '14.3%' }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600 text-xs font-medium">
          1/7 days
        </div>
      </motion.div>
      
      {/* Category Chips */}
      <motion.div 
        className="flex gap-3 mb-8 overflow-x-auto pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {facts.map((fact, index) => {
          const Icon = fact.icon;
          const isActive = index === currentIndex;
          return (
            <motion.button
              key={fact.id}
              onClick={() => goToFact(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer ${
                isActive 
                  ? `${fact.chipColor} text-white shadow-lg`
                  : 'bg-white/90 text-gray-700 hover:bg-white hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={isActive ? { 
                scale: 1.1,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
              } : {}}
            >
              <motion.div
                animate={isActive ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-4 h-4" />
              </motion.div>
              <span className="font-semibold text-sm">{fact.category}</span>
              {isActive && (
                <motion.div
                  className="w-2 h-2 bg-white/80 rounded-full ml-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
      
      {/* Main Fact Card Section */}
      <div className="flex-1 flex items-center justify-center px-2 relative">
        <div className="relative w-full max-w-sm">
          {/* Swipe hint indicators */}
          <motion.button
            onClick={prevFact}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </motion.button>
          
          <motion.button
            onClick={nextFact}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </motion.button>
          
          {/* Main Fact Card with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: direction * 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: direction * -30 }}
              transition={{ 
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="perspective-1000"
            >
              <Card className="p-8 rounded-3xl shadow-2xl border-0 text-center relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 hover:shadow-3xl transition-shadow duration-300">
                {/* Animated background elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-8 h-8 bg-white/15 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
                
                {/* Sparkle effects */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full"
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
                <motion.div
                  className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full"
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
                
                {/* Main Fact Text */}
                <motion.h2 
                  className="text-2xl text-white leading-tight mb-6 font-bold tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {currentFact.fact}
                </motion.h2>
                
                {/* Engagement text */}
                <motion.p 
                  className="text-blue-100 mb-8 text-lg font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {currentFact.shortDescription}
                </motion.p>
                
                {/* Details */}
                <motion.p 
                  className="text-white/90 text-base mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {currentFact.details}
                </motion.p>
                
                {/* Action Buttons */}
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Button 
                    onClick={() => onExpand(currentFact)}
                    className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 rounded-full py-4 font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg border-0 text-base group"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Search className="w-5 h-5 mr-2" />
                    </motion.div>
                    Explore More
                    <motion.div
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                  </Button>
                  
                  <Button 
                    onClick={() => onShare(currentFact)}
                    className="w-16 h-16 bg-white/20 hover:bg-white/30 text-white rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg border-0 backdrop-blur-sm"
                  >
                    <motion.div
                      whileHover={{ rotate: -15, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Floating Action Section */}
      <motion.div 
        className="flex justify-center items-center gap-4 pb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {/* Progress dots */}
        <div className="flex gap-2">
          {facts.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToFact(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-indigo-600 scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentIndex ? { 
                boxShadow: [
                  "0 0 0 0 rgba(79, 70, 229, 0.4)",
                  "0 0 0 8px rgba(79, 70, 229, 0)",
                ]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          ))}
        </div>
        
        {/* Streak indicator */}
        <motion.div 
          className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full shadow-lg backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          animate={{ 
            boxShadow: [
              "0 4px 15px rgba(0,0,0,0.1)",
              "0 6px 20px rgba(79, 70, 229, 0.2)",
              "0 4px 15px rgba(0,0,0,0.1)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-4 h-4 text-orange-500" />
          </motion.div>
          <span className="text-indigo-700 font-semibold text-sm">1 day streak!</span>
        </motion.div>
        
        {/* Next lesson hint */}
        <motion.div 
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(79, 70, 229, 0.3)" }}
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp className="w-4 h-4" />
          <span className="font-semibold text-sm">Keep going!</span>
        </motion.div>
      </motion.div>
    </div>
  );
}