import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Crown, 
  Search, 
  Bookmark, 
  Lock, 
  Atom, 
  Clock, 
  Utensils, 
  Leaf, 
  Heart, 
  Globe, 
  Brain,
  Star
} from "lucide-react";

interface KnowledgeVaultScreenProps {
  isPremium?: boolean;
  onUpgrade: () => void;
}

const savedFacts = [
  {
    id: 1,
    category: "Science & Tech",
    icon: Atom,
    color: "bg-purple-500",
    fact: "Octopuses have three hearts and blue blood!",
    savedDate: "2 days ago"
  },
  {
    id: 2,
    category: "Human Body", 
    icon: Heart,
    color: "bg-red-500",
    fact: "Your brain uses 20% of your body's total energy!",
    savedDate: "5 days ago"
  },
  {
    id: 3,
    category: "Nature",
    icon: Leaf,
    color: "bg-green-500", 
    fact: "Trees can communicate with each other through underground networks!",
    savedDate: "1 week ago"
  }
];

const categories = [
  { id: "all", name: "All", icon: Globe },
  { id: "science", name: "Science", icon: Atom },
  { id: "history", name: "History", icon: Clock },
  { id: "food", name: "Food", icon: Utensils },
  { id: "nature", name: "Nature", icon: Leaf },
  { id: "body", name: "Body", icon: Heart },
  { id: "general", name: "General", icon: Brain }
];

export default function KnowledgeVaultScreen({ isPremium = false, onUpgrade }: KnowledgeVaultScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 p-6 flex items-center justify-center relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-20 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-6 w-24 h-24 bg-yellow-300/30 rounded-full blur-xl"></div>
        
        <Card className="p-8 rounded-3xl shadow-2xl border-0 text-center max-w-sm bg-white/95 backdrop-blur-sm">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Crown className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl text-gray-800 mb-4">Knowledge Vault</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Save your favorite facts forever with Premium! Access your personal collection anytime, anywhere.
          </p>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-2xl mb-6">
            <p className="text-sm text-gray-700">
              <Lock className="w-4 h-4 inline mr-1" />
              Premium Feature
            </p>
          </div>
          
          <Button 
            onClick={onUpgrade}
            className="w-full py-4 text-lg bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
          >
            <Crown className="w-5 h-5 mr-2" />
            Upgrade to Premium
          </Button>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-16 right-4 w-28 h-28 bg-white/8 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-8 w-20 h-20 bg-yellow-300/15 rounded-full blur-lg animate-pulse delay-700"></div>
      <div className="absolute top-1/3 left-6 w-16 h-16 bg-cyan-300/20 rounded-full blur-lg animate-pulse delay-300"></div>
      
      {/* Header */}
      <div className="text-center pt-12 pb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Bookmark className="w-6 h-6 text-yellow-300" />
          <h1 className="text-2xl text-white">Knowledge Vault</h1>
          <Badge className="bg-yellow-500 text-white border-0 ml-2">
            <Crown className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        </div>
        <p className="text-white/80">Your saved facts collection</p>
      </div>
      
      {/* Search Bar */}
      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input 
            placeholder="Search your saved facts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-3 rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg"
          />
        </div>
      </div>
      
      {/* Category Tabs */}
      <div className="px-6 mb-6">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-1 overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-50 data-[state=active]:text-gray-800 data-[state=active]:shadow-lg text-white/80 whitespace-nowrap transition-all duration-200"
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {category.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          <TabsContent value={selectedCategory} className="mt-6 space-y-4">
            {savedFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <Card key={fact.id} className="p-4 rounded-2xl border-0 shadow-lg bg-white/95 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${fact.color} text-white border-0`}>
                      <Icon className="w-3 h-3 mr-1" />
                      {fact.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-500">{fact.savedDate}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 leading-relaxed mb-3">
                    {fact.fact}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="rounded-xl bg-blue-500 hover:bg-blue-600">
                      Read More
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-xl">
                      Share
                    </Button>
                  </div>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Stats Card */}
      <div className="px-6 pb-8">
        <Card className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 border-0 shadow-xl text-center">
          <div className="flex items-center justify-center gap-6 text-white">
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-white/90">Facts Saved</p>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-white/90">Categories</p>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div>
              <p className="text-2xl font-bold">∞</p>
              <p className="text-sm text-white/90">Storage</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}