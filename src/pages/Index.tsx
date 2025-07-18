import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SpendingSummary } from "@/components/dashboard/SpendingSummary";
import { SpendTrendChart } from "@/components/dashboard/SpendTrendChart";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { TopPurchasedItems } from "@/components/dashboard/TopPurchasedItems";
import { SmartRecommendations } from "@/components/dashboard/SmartRecommendations";
import { SponsoredPicks } from "@/components/dashboard/SponsoredPicks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
        
        {/* Summary Cards */}
        <SpendingSummary />
        
        {/* Charts Section */}
        <div className="grid gap-4 md:grid-cols-8 mt-8">
          <SpendTrendChart />
          <CategoryBreakdown />
          <TopPurchasedItems />
        </div>
        
        {/* Recommendations Section */}
        <div className="grid gap-4 md:grid-cols-2 mt-8">
          <SmartRecommendations />
          <SponsoredPicks />
        </div>
        
        {/* Footer */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <h3 className="font-semibold mb-2">FAQ & Support</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p><strong>How do I opt in/out?</strong></p>
              <p>Visit your account settings to manage email preferences and report frequency.</p>
            </div>
            <div>
              <p><strong>How are recommendations made?</strong></p>
              <p>Our AI analyzes your purchase history to suggest cost-effective alternatives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
