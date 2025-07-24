import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, TrendingDown, Plus } from "lucide-react";

interface CategoryData {
  name: string;
  spend: number;
  budget: number;
  status: "good" | "warning" | "danger";
  trend: "up" | "down" | "stable";
}

const categoryData: CategoryData[] = [
  { name: "Personal Care", spend: 8240, budget: 10000, status: "good", trend: "stable" },
  { name: "Janitorial & Cleaning", spend: 7650, budget: 9000, status: "warning", trend: "up" },
  { name: "Office Supplies", spend: 5480, budget: 8000, status: "good", trend: "down" },
  { name: "Medical Supplies", spend: 4320, budget: 7000, status: "good", trend: "stable" },
  { name: "Safety Equipment", spend: 3890, budget: 5000, status: "good", trend: "up" },
  { name: "Food Service", spend: 2890, budget: 4000, status: "good", trend: "stable" },
];

export const CategoryBreakdown = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "danger":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  return (
    <Card className="md:col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Budget by Category</CardTitle>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {categoryData.map((category) => {
            const percentage = (category.spend / category.budget) * 100;
            const remaining = category.budget - category.spend;
            
            return (
              <div key={category.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(category.status)}
                    <span className="font-medium">{category.name}</span>
                    {category.trend === "up" && (
                      <Badge variant="outline" className="text-xs">↗ Trending up</Badge>
                    )}
                    {category.trend === "down" && (
                      <Badge variant="outline" className="text-xs">↘ Trending down</Badge>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      ${category.spend.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      of ${category.budget.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Progress 
                    value={percentage} 
                    className="h-3"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {percentage.toFixed(1)}% used
                    </span>
                    <span className={remaining > 0 ? "text-green-600" : "text-red-600"}>
                      ${Math.abs(remaining).toLocaleString()} {remaining > 0 ? "remaining" : "over budget"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          
          <Button variant="ghost" className="w-full text-sm">
            View detailed breakdown
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};