import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Gift, TrendingUp, Award } from "lucide-react";

export const RewardsPlus = () => {
  const currentPoints = 8240;
  const nextTierPoints = 10000;
  const pointsToNext = nextTierPoints - currentPoints;
  const progressPercent = (currentPoints / nextTierPoints) * 100;

  const bonusOpportunities = [
    {
      category: "Personal Care",
      multiplier: "2x",
      requirement: "Spend $200+",
      color: "bg-purple-100 text-purple-700"
    },
    {
      category: "Cleaning Supplies",
      multiplier: "3x",
      requirement: "Bulk orders",
      color: "bg-blue-100 text-blue-700"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          Rewards+ Status
        </CardTitle>
        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
          <Award className="h-3 w-3 mr-1" />
          Gold Member
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Points Balance */}
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold text-foreground">{currentPoints.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Rewards+ Points</p>
          <p className="text-xs text-muted-foreground">= ${(currentPoints * 0.01).toFixed(0)} in rewards</p>
        </div>

        {/* Next Tier Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progress to Platinum</span>
            <span className="text-sm text-muted-foreground">{pointsToNext} points to go</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
          <p className="text-xs text-muted-foreground">
            Platinum members get 15% bonus points on all purchases
          </p>
        </div>

        {/* Bonus Opportunities */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm flex items-center gap-2">
            <Gift className="h-4 w-4 text-green-500" />
            Active Bonus Offers
          </h4>
          <div className="space-y-2">
            {bonusOpportunities.map((bonus, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{bonus.category}</p>
                  <p className="text-xs text-muted-foreground">{bonus.requirement}</p>
                </div>
                <Badge className={bonus.color}>{bonus.multiplier} Points</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Earn More
          </Button>
          <Button variant="outline" size="sm">
            <Gift className="h-4 w-4 mr-2" />
            Redeem
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};