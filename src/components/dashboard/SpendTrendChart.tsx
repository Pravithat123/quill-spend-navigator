import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, TrendingUp, ShoppingCart } from "lucide-react";

const bulkOpportunities = [
  {
    id: 1,
    product: "HP LaserJet Toner CF410A",
    currentPrice: 156,
    currentQuantity: 1,
    lastPurchase: "Dec 2024",
    bulkTiers: [
      { quantity: 3, discount: 8, price: 143.52, savings: 37.44 },
      { quantity: 6, discount: 15, price: 132.60, savings: 140.40 },
      { quantity: 12, discount: 25, price: 117.00, savings: 468.00 }
    ]
  },
  {
    id: 2,
    product: "Purell Hand Sanitizer Refill",
    currentPrice: 24,
    currentQuantity: 2,
    lastPurchase: "Jan 2025",
    bulkTiers: [
      { quantity: 6, discount: 10, price: 21.60, savings: 14.40 },
      { quantity: 12, discount: 18, price: 19.68, savings: 51.84 },
      { quantity: 24, discount: 30, price: 16.80, savings: 172.80 }
    ]
  },
  {
    id: 3,
    product: "Georgia-Pacific Copy Paper",
    currentPrice: 45,
    currentQuantity: 1,
    lastPurchase: "Dec 2024",
    bulkTiers: [
      { quantity: 5, discount: 12, price: 39.60, savings: 27.00 },
      { quantity: 10, discount: 20, price: 36.00, savings: 90.00 },
      { quantity: 20, discount: 35, price: 29.25, savings: 315.00 }
    ]
  }
];

const bundleDeals = [
  {
    id: 1,
    name: "Healthcare Essentials Bundle",
    items: ["Hand Sanitizer", "Disinfecting Wipes", "Nitrile Gloves"],
    regularPrice: 89,
    bundlePrice: 69,
    savings: 20,
    discount: 22
  },
  {
    id: 2,
    name: "Office Supply Bundle",
    items: ["Copy Paper", "Toner Cartridge", "Paper Towels"],
    regularPrice: 225,
    bundlePrice: 179,
    savings: 46,
    discount: 20
  }
];

export const SpendTrendChart = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Bulk Purchase Opportunities
        </CardTitle>
        <p className="text-sm text-muted-foreground">Save more by purchasing in volume based on your order history</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Bulk Discount Tiers */}
        <div className="space-y-4">
          {bulkOpportunities.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{item.product}</h4>
                  <p className="text-sm text-muted-foreground">
                    Last ordered: {item.lastPurchase} • Current price: ${item.currentPrice}
                  </p>
                </div>
                <Badge variant="secondary">Frequently Ordered</Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {item.bulkTiers.map((tier, index) => (
                  <div key={index} className="bg-muted/30 rounded-md p-3 text-center">
                    <div className="text-sm font-medium">Buy {tier.quantity}</div>
                    <div className="text-xs text-muted-foreground">{tier.discount}% off</div>
                    <div className="text-sm font-bold text-primary">${tier.price}</div>
                    <div className="text-xs text-green-600">Save ${tier.savings}</div>
                  </div>
                ))}
              </div>
              
              <Button size="sm" className="w-full">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          ))}
        </div>

        {/* Bundle Recommendations */}
        <div className="border-t pt-6">
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Recommended Bundles
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {bundleDeals.map((bundle) => (
              <div key={bundle.id} className="border rounded-lg p-4 space-y-3">
                <div>
                  <h4 className="font-medium">{bundle.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {bundle.items.join(" • ")}
                  </p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="line-through text-muted-foreground">${bundle.regularPrice}</span>
                    <Badge variant="destructive">{bundle.discount}% OFF</Badge>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Bundle Price:</span>
                    <span className="text-primary">${bundle.bundlePrice}</span>
                  </div>
                  <div className="text-xs text-green-600">You save ${bundle.savings}</div>
                </div>
                
                <Button size="sm" variant="outline" className="w-full">
                  Add Bundle
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};