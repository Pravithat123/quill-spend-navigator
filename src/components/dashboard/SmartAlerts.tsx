import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Clock, Gift, X } from "lucide-react";

export const SmartAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "warning",
      icon: AlertTriangle,
      title: "Janitorial Budget Alert",
      message: "You're 85% through your janitorial budget with 18 days left",
      action: "View alternatives",
      priority: "high"
    },
    {
      id: 2,
      type: "opportunity",
      icon: Gift,
      title: "Rewards+ Bonus Opportunity",
      message: "Spend $150 more on office supplies to earn 2x points",
      action: "Shop now",
      priority: "medium"
    },
    {
      id: 3,
      type: "reminder",
      icon: Clock,
      title: "Recurring Order Due",
      message: "Your paper towel subscription renews in 3 days",
      action: "Review order",
      priority: "low"
    },
    {
      id: 4,
      type: "trend",
      icon: TrendingUp,
      title: "Smart Insight",
      message: "Your glove usage is 20% higher than last month",
      action: "View details",
      priority: "medium"
    }
  ];

  const getAlertStyle = (type: string) => {
    switch (type) {
      case "warning":
        return "border-l-4 border-l-yellow-500 bg-yellow-50/50";
      case "opportunity":
        return "border-l-4 border-l-green-500 bg-green-50/50";
      case "reminder":
        return "border-l-4 border-l-blue-500 bg-blue-50/50";
      default:
        return "border-l-4 border-l-gray-500 bg-gray-50/50";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "warning":
        return "text-yellow-600";
      case "opportunity":
        return "text-green-600";
      case "reminder":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Smart Alerts</CardTitle>
        <Badge variant="outline">{alerts.length} active</Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg ${getAlertStyle(alert.type)}`}
          >
            <div className="flex items-start gap-3">
              <alert.icon className={`h-5 w-5 mt-0.5 ${getIconColor(alert.type)}`} />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{alert.title}</h4>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
                <Button variant="outline" size="sm" className="text-xs">
                  {alert.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        <Button variant="ghost" className="w-full text-sm" size="sm">
          View all alerts
        </Button>
      </CardContent>
    </Card>
  );
};