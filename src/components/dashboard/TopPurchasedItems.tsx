import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, ShoppingCart } from "lucide-react";

const topItems = [
  {
    name: "HP 564XL Black Ink Cartridge",
    spend: "$240",
    frequency: "Monthly",
    category: "Ink & Toner"
  },
  {
    name: "Hammermill Copy Plus Paper",
    spend: "$180",
    frequency: "Bi-weekly", 
    category: "Paper"
  },
  {
    name: "Quill Brand Pens (12-pack)",
    spend: "$156",
    frequency: "Monthly",
    category: "Office Supplies"
  },
  {
    name: "Lysol Disinfecting Wipes",
    spend: "$134",
    frequency: "Weekly",
    category: "Cleaning"
  },
  {
    name: "Post-it Notes Variety Pack",
    spend: "$98",
    frequency: "Monthly",
    category: "Office Supplies"
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