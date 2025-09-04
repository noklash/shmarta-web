import { useState } from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Trophy, Flame, Medal, Crown, Users, Globe } from "lucide-react";

interface LeaderboardScreenProps {
  onBack: () => void;
}

const globalLeaders = [
  { id: 1, name: "Sarah Chen", avatar: "SC", streak: 47, rank: 1 },
  { id: 2, name: "Alex Rivera", avatar: "AR", streak: 42, rank: 2 },
  { id: 3, name: "Jordan Kim", avatar: "JK", streak: 38, rank: 3 },
  { id: 4, name: "You", avatar: "ME", streak: 23, rank: 4, isCurrentUser: true },
  { id: 5, name: "Maya Patel", avatar: "MP", streak: 21, rank: 5 },
  { id: 6, name: "Chris Wong", avatar: "CW", streak: 19, rank: 6 },
  { id: 7, name: "Emma Davis", avatar: "ED", streak: 16, rank: 7 },
  { id: 8, name: "Ryan Johnson", avatar: "RJ", streak: 14, rank: 8 }
];

const friends = [
  { id: 1, name: "You", avatar: "ME", streak: 23, rank: 1, isCurrentUser: true },
  { id: 2, name: "Alex Rivera", avatar: "AR", streak: 18, rank: 2 },
  { id: 3, name: "Maya Patel", avatar: "MP", streak: 12, rank: 3 },
  { id: 4, name: "Chris Wong", avatar: "CW", streak: 8, rank: 4 },
  { id: 5, name: "Emma Davis", avatar: "ED", streak: 5, rank: 5 }
];

export default function LeaderboardScreen({ onBack }: LeaderboardScreenProps) {
  const [activeTab, setActiveTab] = useState("global");
  
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <span className="text-sm font-medium text-gray-500">#{rank}</span>;
    }
  };
  
  const getStreakColor = (streak: number) => {
    if (streak >= 30) return "from-red-500 to-orange-500";
    if (streak >= 15) return "from-orange-500 to-yellow-500";
    return "from-blue-500 to-cyan-500";
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-8 w-24 h-24 bg-white/8 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-6 w-32 h-32 bg-yellow-300/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute top-1/3 left-4 w-16 h-16 bg-pink-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      
      {/* Header */}
      <div className="text-center pt-12 pb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Trophy className="w-6 h-6 text-yellow-300" />
          <h1 className="text-2xl text-white">Leaderboard</h1>
        </div>
        <p className="text-white/80">See how you stack up!</p>
      </div>
      
      {/* Your Current Streak Highlight */}
      <div className="px-6 mb-6">
        <Card className="p-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 border-0 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 bg-white/20">
                <AvatarFallback className="text-white font-bold">ME</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white font-semibold">Your Streak</p>
                <p className="text-white/90 text-sm">Keep it alive!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                <Flame className="w-5 h-5 text-white" />
                <span className="text-2xl text-white">23</span>
              </div>
              <Badge className="bg-white/20 text-white border-0 text-xs">
                days
              </Badge>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Tabs */}
      <div className="px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10 backdrop-blur-sm rounded-2xl p-1">
            <TabsTrigger 
              value="global" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-50 data-[state=active]:text-gray-800 data-[state=active]:shadow-lg text-white/80 transition-all duration-200"
            >
              <Globe className="w-4 h-4 mr-2" />
              Global
            </TabsTrigger>
            <TabsTrigger 
              value="friends" 
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-50 data-[state=active]:text-gray-800 data-[state=active]:shadow-lg text-white/80 transition-all duration-200"
            >
              <Users className="w-4 h-4 mr-2" />
              Friends
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="global" className="space-y-3">
            {globalLeaders.map((user, index) => (
              <Card 
                key={user.id}
                className={`
                  p-4 rounded-2xl border-0 shadow-lg transition-all
                  ${user.isCurrentUser 
                    ? 'bg-white shadow-2xl ring-2 ring-yellow-300' 
                    : 'bg-white/95 backdrop-blur-sm'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    <Avatar className={user.isCurrentUser ? "ring-2 ring-yellow-400" : ""}>
                      <AvatarFallback className={user.isCurrentUser ? "bg-yellow-100 text-yellow-800" : "bg-gray-100"}>
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className={`font-semibold ${user.isCurrentUser ? 'text-yellow-800' : 'text-gray-800'}`}>
                        {user.name}
                      </p>
                      {user.isCurrentUser && (
                        <Badge className="bg-yellow-100 text-yellow-800 border-0 text-xs">
                          That's you!
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`
                      flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r
                      ${getStreakColor(user.streak)}
                    `}>
                      <Flame className="w-4 h-4 text-white" />
                      <span className="text-white font-bold">{user.streak}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="friends" className="space-y-3">
            {friends.map((user) => (
              <Card 
                key={user.id}
                className={`
                  p-4 rounded-2xl border-0 shadow-lg transition-all
                  ${user.isCurrentUser 
                    ? 'bg-white shadow-2xl ring-2 ring-yellow-300' 
                    : 'bg-white/95 backdrop-blur-sm'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    <Avatar className={user.isCurrentUser ? "ring-2 ring-yellow-400" : ""}>
                      <AvatarFallback className={user.isCurrentUser ? "bg-yellow-100 text-yellow-800" : "bg-gray-100"}>
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className={`font-semibold ${user.isCurrentUser ? 'text-yellow-800' : 'text-gray-800'}`}>
                        {user.name}
                      </p>
                      {user.isCurrentUser && (
                        <Badge className="bg-yellow-100 text-yellow-800 border-0 text-xs">
                          You're winning!
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`
                      flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r
                      ${getStreakColor(user.streak)}
                    `}>
                      <Flame className="w-4 h-4 text-white" />
                      <span className="text-white font-bold">{user.streak}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Motivational Banner */}
      <div className="px-6 pt-6 pb-8">
        <Card className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 border-0 shadow-xl text-center">
          <Flame className="w-8 h-8 text-white mx-auto mb-2" />
          <p className="text-white font-semibold mb-1">Keep your streak alive!</p>
          <p className="text-white/90 text-sm">Learn something new today to stay on top!</p>
        </Card>
      </div>
    </div>
  );
}