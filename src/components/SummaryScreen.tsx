import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react";

interface SummaryScreenProps {
  fact: any;
  onBack: () => void;
  onDigDeeper: () => void;
  onDecline: () => void;
}

export default function SummaryScreen({ fact, onBack, onDigDeeper, onDecline }: SummaryScreenProps) {
  const Icon = fact.icon;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-12 w-1 h-1 bg-yellow-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <button 
          onClick={onBack}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg"
        >
          <ArrowLeft className="w-6 h-6 text-indigo-600" />
        </button>
        
        <Badge className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-0 px-4 py-2 font-medium shadow-lg">
          <Icon className="w-4 h-4 mr-2" />
          {fact.category}
        </Badge>
        
        <div className="w-10 h-10"></div> {/* Spacer */}
      </div>
      
      {/* Content */}
      <div className="px-6 pb-6">
        {/* Header Image */}
        <div className="mb-6 rounded-3xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src={fact.illustration}
            alt="Fact illustration"
            className="w-full h-48 object-cover"
          />
        </div>
        
        {/* Main Card */}
        <Card className="p-6 rounded-3xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm mb-6">
          {/* Fact Title */}
          <h1 className="text-2xl text-gray-800 mb-4 leading-tight">
            {fact.fact}
          </h1>
          
          {/* Summary Text */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {fact.shortDescription} This fascinating phenomenon showcases the incredible 
              diversity and adaptability of life on Earth.
            </p>
            
            <p>
              Scientists have been studying these unique characteristics for decades, 
              uncovering new insights about how these remarkable adaptations evolved 
              and what they mean for our understanding of biology and nature.
            </p>
            
            <p>
              These discoveries continue to inspire researchers and spark curiosity 
              about the amazing world around us. There's always more to learn and 
              discover about the incredible complexity of life!
            </p>
          </div>
        </Card>
        
        {/* CTA Section */}
        <Card className="p-8 rounded-3xl shadow-xl border-0 bg-gradient-to-r from-indigo-600 to-indigo-700 text-center">
          <h3 className="text-2xl text-white mb-3 font-bold">Want to learn more?</h3>
          <p className="text-indigo-100 mb-8 text-base leading-relaxed">
            Dive deeper into this fascinating topic with detailed articles, timelines, and expert insights!
          </p>
          
          <div className="flex gap-4">
            <Button 
              onClick={onDigDeeper}
              className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 rounded-full py-4 font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <ThumbsUp className="w-5 h-5 mr-2" />
              🚀 Let's Explore!
            </Button>
            
            <Button 
              onClick={onDecline}
              className="flex-1 bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-full py-4 font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
            >
              <ThumbsDown className="w-5 h-5 mr-2" />
              Maybe Later
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}