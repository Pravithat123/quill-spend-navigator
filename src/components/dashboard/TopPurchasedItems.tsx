import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, ShoppingCart } from "lucide-react";

const topItems = [
  {
    name: "HP LaserJet Toner Cartridge CF410A",
    spend: "$3,840",
    frequency: "Monthly",
    category: "Ink & Toner"
  },
  {
    name: "Purell Advanced Hand Sanitizer Refill",
    spend: "$2,560",
    frequency: "Bi-weekly", 
    category: "Personal Care"
  },
  {
    name: "Clorox Healthcare Disinfecting Wipes",
    spend: "$1,920",
    frequency: "Weekly",
    category: "Jan/San Cleaning"
  },
  {
    name: "Georgia-Pacific Copy Paper (Case)",
    spend: "$1,680",
    frequency: "Monthly",
    category: "Paper"
  },
  {
    name: "Tork Universal Paper Towels",
    spend: "$1,240",
    frequency: "Bi-weekly",
    category: "Jan/San Cleaning"
  }
];

export const TopPurchasedItems = () => {
  return (
    <Card className="col-span-5">
      <CardHeader>
        <CardTitle>Top Purchased Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.category} • {item.frequency} • {item.spend}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Reorder
                </Button>
                <Button variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Subscribe
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};