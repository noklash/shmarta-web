import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Atom, 
  Clock, 
  Utensils, 
  Leaf, 
  Heart, 
  Globe, 
  Brain,
  CheckCircle
} from "lucide-react";

interface OnboardingScreenProps {
  onComplete: (interests: string[]) => void;
}

const categories = [
  { id: "science", name: "Science & Tech", icon: Atom, color: "bg-purple-500" },
  { id: "history", name: "History", icon: Clock, color: "bg-amber-500" },
  { id: "pop-culture", name: "Pop Culture", icon: Globe, color: "bg-pink-500" },
  { id: "nature", name: "Nature", icon: Leaf, color: "bg-green-500" },
  { id: "human-body", name: "Human Body", icon: Heart, color: "bg-red-500" },
  { id: "food", name: "Food & Culture", icon: Utensils, color: "bg-orange-500" },
  { id: "general", name: "General Knowledge", icon: Brain, color: "bg-blue-500" }
];

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  
  const toggleInterest = (categoryId: string) => {
    setSelectedInterests(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 p-6 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-12 w-1 h-1 bg-yellow-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
      
      {/* Header */}
      <div className="text-center mb-8 pt-12">
        <h1 className="text-3xl text-indigo-800 mb-4">Choose Your Interests</h1>
        <p className="text-indigo-600 text-lg">Select topics you'd love to learn about</p>
        {selectedInterests.length > 0 && (
          <Badge className="mt-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-0 px-4 py-2 text-sm font-medium shadow-lg">
            {selectedInterests.length} topic{selectedInterests.length > 1 ? 's' : ''} selected
          </Badge>
        )}
      </div>
      
      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedInterests.includes(category.id);
          
          return (
            <button
              key={category.id}
              onClick={() => toggleInterest(category.id)}
              className={`
                relative p-6 rounded-3xl transition-all duration-300 transform hover:shadow-lg
                ${isSelected 
                  ? 'bg-white shadow-xl scale-105 ring-4 ring-indigo-200/60' 
                  : 'bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-102 shadow-md'
                }
              `}
            >
              {isSelected && (
                <CheckCircle className="absolute top-3 right-3 w-6 h-6 text-green-500" />
              )}
              
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-200
                ${isSelected ? category.color : 'bg-gradient-to-br from-gray-100 to-gray-200'}
              `}>
                <Icon className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
              </div>
              
              <p className={`text-sm font-semibold transition-colors duration-200 ${
                isSelected ? 'text-gray-900' : 'text-gray-700'
              }`}>
                {category.name}
              </p>
            </button>
          );
        })}
      </div>
      
      {/* CTA Button */}
      <div className="fixed bottom-6 left-6 right-6">
        <Button 
          onClick={() => onComplete(selectedInterests)}
          disabled={selectedInterests.length === 0}
          className="w-full py-4 text-lg bg-gradient-to-r from-indigo-700 to-indigo-800 text-white hover:from-indigo-800 hover:to-indigo-900 rounded-full shadow-xl border-0 disabled:bg-gray-300 disabled:text-gray-500 transform hover:scale-105 transition-all duration-200"
        >
          Start Learning ({selectedInterests.length > 0 ? selectedInterests.length : 0} topics)
        </Button>
      </div>
    </div>
  );
}