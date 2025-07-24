import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { BudgetOverview } from "@/components/dashboard/BudgetOverview";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { SmartRecommendations } from "@/components/dashboard/SmartRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <DashboardHeader />
        
        {/* Main Budget Focus */}
        <BudgetOverview />
        
        {/* Core Dashboard */}
        <div className="grid gap-8 lg:grid-cols-3 mt-8">
          <div className="lg:col-span-2">
            <CategoryBreakdown />
          </div>
          <div>
            <SmartRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
