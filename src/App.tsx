import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import OnboardingScreen from "./components/OnboardingScreen";
import HomeFeed from "./components/HomeFeed";
import SummaryScreen from "./components/SummaryScreen";
import DigDeeperScreen from "./components/DigDeeperScreen";
import LeaderboardScreen from "./components/LeaderboardScreen";
import KnowledgeVaultScreen from "./components/KnowledgeVaultScreen";
import DailyStreakScreen from "./components/DailyStreakScreen";
import { Badge } from "./components/ui/badge";
import { 
  Home, 
  Trophy, 
  Target, 
  Bookmark,
  Crown
} from "lucide-react";

type Screen = 
  | 'welcome' 
  | 'onboarding' 
  | 'home' 
  | 'summary' 
  | 'dig-deeper' 
  | 'leaderboard' 
  | 'vault' 
  | 'streak';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedFact, setSelectedFact] = useState<any>(null);
  const [userInterests, setUserInterests] = useState<string[]>([]);

  const [isPremium, setIsPremium] = useState(false);
  
  // Navigation handlers
  const handleSignUp = () => setCurrentScreen('onboarding');
  const handleGuest = () => setCurrentScreen('onboarding');
  
  const handleOnboardingComplete = (interests: string[]) => {
    setUserInterests(interests);
    setCurrentScreen('home');
  };
  
  const handleFactExpand = (fact: any) => {
    setSelectedFact(fact);
    setCurrentScreen('summary');
  };
  
  const handleFactShare = (fact: any) => {
    // Mock share functionality
    if (navigator.share) {
      navigator.share({
        title: 'Amazing Fact from Shmarta',
        text: fact.fact,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers without native sharing
      navigator.clipboard.writeText(`${fact.fact} - Learn more with Shmarta!`);
      // You could show a toast notification here
    }
  };
  
  const handleDigDeeper = () => setCurrentScreen('dig-deeper');
  const handleBackToFeed = () => setCurrentScreen('home');
  const handleUpgrade = () => setIsPremium(true);
  
  // Bottom Navigation component
  const BottomNavigation = () => {
    if (['welcome', 'onboarding', 'summary', 'dig-deeper'].includes(currentScreen)) return null;
    
    const navItems = [
      { screen: 'home', icon: Home, label: 'Home', color: 'text-blue-500' },
      { screen: 'streak', icon: Target, label: 'Goal', color: 'text-orange-500' },
      { screen: 'leaderboard', icon: Trophy, label: 'Rank', color: 'text-yellow-500' },
      { screen: 'vault', icon: Bookmark, label: 'Vault', color: 'text-purple-500', premium: true }
    ];
    
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/70 shadow-lg"></div>
        
        {/* Navigation items */}
        <div className="relative flex items-center justify-around px-2 py-2 safe-area-pb">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.screen;
            
            return (
              <button
                key={item.screen}
                onClick={() => setCurrentScreen(item.screen as Screen)}
                className={`
                  flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-14 relative group
                  ${isActive 
                    ? 'transform scale-105' 
                    : 'text-gray-500 hover:text-gray-700 active:scale-95'
                  }
                `}
              >
                <div className={`
                  relative p-1.5 rounded-lg transition-all duration-300 group-hover:scale-110
                  ${isActive 
                    ? `bg-gradient-to-br ${item.color.replace('text-', 'from-').replace('-500', '-400')} ${item.color.replace('text-', 'to-').replace('-500', '-600')} shadow-lg` 
                    : 'bg-gray-100/50 group-hover:bg-gray-100'
                  }
                `}>
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'
                  }`} />
                  
                  {/* Premium badge */}
                  {item.premium && !isPremium && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                      <Crown className="w-2 h-2 text-white" />
                    </div>
                  )}
                  
                  {/* Active pulse effect */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-lg bg-white/20 animate-ping opacity-75"></div>
                  )}
                </div>
                
                <span className={`text-xs font-medium transition-all duration-300 ${
                  isActive ? item.color + ' font-semibold' : 'text-gray-500 group-hover:text-gray-700'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  
  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen 
            onSignUp={handleSignUp}
            onGuest={handleGuest}
          />
        );
        
      case 'onboarding':
        return (
          <OnboardingScreen 
            onComplete={handleOnboardingComplete}
          />
        );
        
      case 'home':
        return (
          <HomeFeed 
            onExpand={handleFactExpand}
            onShare={handleFactShare}
          />
        );
        
      case 'summary':
        return (
          <SummaryScreen 
            fact={selectedFact}
            onBack={handleBackToFeed}
            onDigDeeper={handleDigDeeper}
            onDecline={handleBackToFeed}
          />
        );
        
      case 'dig-deeper':
        return (
          <DigDeeperScreen 
            fact={selectedFact}
            onBack={handleBackToFeed}
            onShare={() => handleFactShare(selectedFact)}
          />
        );
        
      case 'leaderboard':
        return (
          <LeaderboardScreen 
            onBack={handleBackToFeed}
          />
        );
        
      case 'vault':
        return (
          <KnowledgeVaultScreen 
            isPremium={isPremium}
            onUpgrade={handleUpgrade}
          />
        );
        
      case 'streak':
        return (
          <DailyStreakScreen 
            onContinueLearning={handleBackToFeed}
          />
        );
        
      default:
        return <WelcomeScreen onSignUp={handleSignUp} onGuest={handleGuest} />;
    }
  };
  
  return (
    <div className="size-full relative">
      {/* Main content with bottom padding for navigation */}
      <div className={`
        ${['welcome', 'onboarding', 'summary', 'dig-deeper'].includes(currentScreen) 
          ? '' 
          : 'pb-16'
        }
      `}>
        {renderScreen()}
      </div>
      
      <BottomNavigation />
    </div>
  );
}