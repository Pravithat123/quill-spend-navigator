import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Settings, Plus } from "lucide-react";

export const BudgetOverview = () => {
  const totalBudget = 45000;
  const totalSpent = 32470;
  const remainingBudget = totalBudget - totalSpent;
  const spentPercentage = (totalSpent / totalBudget) * 100;
  const daysLeft = 18;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
      {/* Main Budget Tracker */}
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Monthly Budget Overview</CardTitle>
            <p className="text-sm text-muted-foreground">January 2025 • Healthcare Division</p>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Adjust Budget
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">${totalSpent.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">of ${totalBudget.toLocaleString()} budgeted</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-green-600">${remainingBudget.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">remaining</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Budget Progress</span>
              <span className="text-sm text-muted-foreground">{spentPercentage.toFixed(1)}% used</span>
            </div>
            <Progress value={spentPercentage} className="h-3" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-foreground">{daysLeft}</p>
              <p className="text-xs text-muted-foreground">days left</p>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-foreground">${(remainingBudget / daysLeft).toFixed(0)}</p>
              <p className="text-xs text-muted-foreground">daily budget</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Status */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Budget Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Overall Health</span>
              <Badge variant="secondary" className="bg-green-50 text-green-700">Excellent</Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Under budget</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>On track for month</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span>Janitorial approaching limit</span>
              </div>
            </div>
          </div>

          <Button className="w-full" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Set Category Budgets
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};