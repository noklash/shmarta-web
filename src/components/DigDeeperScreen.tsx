import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Share2, BookOpen, Atom, Heart, Globe, BarChart3 } from "lucide-react";
import timelineExample from "figma:asset/dbce1d58c20663edb9d4c4f52047ce344781c380.png";

interface DigDeeperScreenProps {
  fact: any;
  onBack: () => void;
  onShare: () => void;
}

export default function DigDeeperScreen({ fact, onBack, onShare }: DigDeeperScreenProps) {
  const Icon = fact.icon;
  
  const categories = [
    { name: "Science", icon: Atom, color: "bg-purple-500" },
    { name: "Animals", icon: Heart, color: "bg-green-500" },
    { name: "History", icon: Globe, color: "bg-gray-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 relative">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="flex items-center gap-3 p-4">
          <button 
            onClick={onBack}
            className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <div>
            <h1 className="text-xl font-bold">Deep Dive</h1>
            <p className="text-blue-100 text-sm">Historical Timeline</p>
          </div>
        </div>
      </div>
      
      {/* Category Chips */}
      <div className="flex gap-2 p-4 overflow-x-auto">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const isActive = category.name === fact?.category;
          return (
            <div
              key={category.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                isActive 
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-white/60 text-gray-600 hover:bg-white/80'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
            </div>
          );
        })}
      </div>
      
      {/* Content */}
      <div className="px-4 pb-8">
        {/* Main Article Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Image Section */}
          <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50">
            <img 
              src={timelineExample}
              alt="Egyptian pharaoh illustration"
              className="w-full h-56 object-contain rounded-2xl"
            />
          </div>
          
          <div className="p-8">
            {/* Article Title */}
            <h1 className="text-2xl text-gray-900 mb-6 leading-tight font-bold">
              Closer to the iPhone than the Pyramids?
            </h1>
        
            {/* Timeline Sections */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  The Great Pyramid Era
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Great Pyramid of Giza was built around 2560 BC, making it over 4,500 years old. 
                  This ancient wonder was already ancient history by Cleopatra's time!
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  Cleopatra's Time
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cleopatra VII lived from 69-30 BC, ruling Egypt during the late Ptolemaic period. 
                  She was closer in time to the present day than to the pyramid builders!
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  The Modern Era
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The first iPhone was released in 2007 - only about 2,037 years after Cleopatra's death. 
                  Compare this to the 2,500+ year gap between the pyramids and Cleopatra!
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  Mind-Bending Perspective
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This timeline really puts human history into perspective! It shows how "recent" 
                  our modern technology is compared to the incredible achievements of ancient civilizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}