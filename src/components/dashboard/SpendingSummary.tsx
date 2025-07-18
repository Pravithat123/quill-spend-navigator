import { TrendingDown, TrendingUp, Package, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

const SummaryCard = ({ title, value, change, trend, icon }: SummaryCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground flex items-center gap-1">
        {trend === "up" ? (
          <TrendingUp className="h-4 w-4 text-green-500" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-500" />
        )}
        {change} from last period
      </p>
    </CardContent>
  </Card>
);

export const SpendingSummary = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <SummaryCard
        title="Total Spend This Period"
        value="$32,470"
        change="-11.1%"
        trend="down"
        icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
      />
      <SummaryCard
        title="Orders Placed"
        value="164"
        change="+5.2%"
        trend="up"
        icon={<Package className="h-4 w-4 text-muted-foreground" />}
      />
      <SummaryCard
        title="Average Spend Per Order"
        value="$198"
        change="-15.8%"
        trend="down"
        icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
      />
      <SummaryCard
        title="Growth Opportunity"
        value="$2,840"
        change="+19.0%"
        trend="up"
        icon={<TrendingDown className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
};