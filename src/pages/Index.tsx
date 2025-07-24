import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { BudgetOverview } from "@/components/dashboard/BudgetOverview";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { TopPurchasedItems } from "@/components/dashboard/TopPurchasedItems";
import { SmartRecommendations } from "@/components/dashboard/SmartRecommendations";
import { SponsoredPicks } from "@/components/dashboard/SponsoredPicks";
import { SmartAlerts } from "@/components/dashboard/SmartAlerts";
import { RewardsPlus } from "@/components/dashboard/RewardsPlus";
import { SpendTrendChart } from "@/components/dashboard/SpendTrendChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <DashboardHeader />
        
        {/* Budget Overview - Primary Focus */}
        <BudgetOverview />
        
        {/* Main Dashboard Grid */}
        <div className="grid gap-6 lg:grid-cols-12 mt-8">
          {/* Left Column - Budget Details */}
          <div className="lg:col-span-8 space-y-6">
            <CategoryBreakdown />
            <SpendTrendChart />
          </div>
          
          {/* Right Column - Alerts & Recommendations */}
          <div className="lg:col-span-4 space-y-6">
            <SmartAlerts />
            <RewardsPlus />
          </div>
        </div>
        
        {/* Recommendations Section */}
        <div className="grid gap-6 lg:grid-cols-2 mt-8">
          <SmartRecommendations />
          <div className="space-y-6">
            <TopPurchasedItems />
            <SponsoredPicks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
