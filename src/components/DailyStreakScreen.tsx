import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Target, 
  Clock, 
  Flame, 
  CheckCircle, 
  Play, 
  Calendar,
  Trophy,
  Zap
} from "lucide-react";

interface DailyStreakScreenProps {
  onContinueLearning: () => void;
}

export default function DailyStreakScreen({ onContinueLearning }: DailyStreakScreenProps) {
  const minutesLearned = 6;
  const dailyGoal = 10;
  const progressPercentage = (minutesLearned / dailyGoal) * 100;
  const currentStreak = 23;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-6 w-32 h-32 bg-white/8 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-8 w-24 h-24 bg-yellow-300/15 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute top-40 right-4 w-16 h-16 bg-pink-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      
      {/* Header */}
      <div className="text-center pt-12 pb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Target className="w-6 h-6 text-white" />
          <h1 className="text-2xl text-white">Daily Goal</h1>
        </div>
        <p className="text-white/80">Keep your learning streak alive!</p>
      </div>
      
      {/* Main Progress Circle */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          {/* Circular Progress Background */}
          <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center relative">
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${progressPercentage * 2.51} 251`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            
            {/* Center Content */}
            <div className="text-center z-10">
              <div className="text-4xl text-white mb-2">
                {minutesLearned}<span className="text-2xl">/</span>{dailyGoal}
              </div>
              <p className="text-white/90 text-sm">minutes</p>
              <p className="text-white/70 text-xs mt-1">{Math.round(progressPercentage)}% complete</p>
            </div>
          </div>
          
          {/* Decorative elements around circle */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Trophy className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Message */}
      <div className="px-6 mb-8">
        <Card className="p-6 rounded-3xl border-0 bg-white/95 backdrop-blur-sm shadow-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-orange-500" />
            <h3 className="text-xl text-gray-800">Almost there!</h3>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            You've learned for <span className="font-semibold text-orange-500">{minutesLearned} minutes</span> today — 
            just <span className="font-semibold text-purple-600">{dailyGoal - minutesLearned} more minutes</span> to reach your goal!
          </p>
          
          <Progress value={progressPercentage} className="h-2 mb-4" />
          
          <Button 
            onClick={onContinueLearning}
            className="w-full py-4 text-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <Play className="w-5 h-5 mr-2" />
            Continue Learning
          </Button>
        </Card>
      </div>
      
      {/* Streak Info */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 rounded-2xl border-0 bg-gradient-to-br from-yellow-400 to-orange-500 text-center shadow-xl">
            <Flame className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-2xl text-white font-bold">{currentStreak}</p>
            <p className="text-white/90 text-sm">Day Streak</p>
          </Card>
          
          <Card className="p-4 rounded-2xl border-0 bg-gradient-to-br from-green-400 to-teal-500 text-center shadow-xl">
            <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
            <p className="text-2xl text-white font-bold">7</p>
            <p className="text-white/90 text-sm">This Week</p>
          </Card>
        </div>
      </div>
      
      {/* Motivational Section */}
      <div className="px-6 pb-8">
        <Card className="p-6 rounded-3xl border-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-white text-lg font-semibold mb-1">Keep it up!</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                You're doing amazing! Consistency is the key to building lasting knowledge.
              </p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between text-white/90 text-sm">
              <span>Today's goal progress</span>
              <Badge className="bg-white/20 text-white border-0">
                <CheckCircle className="w-3 h-3 mr-1" />
                {Math.round(progressPercentage)}%
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}