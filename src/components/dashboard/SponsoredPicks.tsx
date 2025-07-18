import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const sponsoredProducts = [
  {
    product: "EcoPro Disinfecting Wipes",
    category: "Cleaning",
    vendor: "GreenCo Supplies",
    note: "Trusted by 200+ clinics",
    price: "$24.99",
    originalPrice: "$29.99"
  },
  {
    product: "ProTech Wireless Mouse",
    category: "Technology", 
    vendor: "TechFlow",
    note: "Best-seller in ergonomics",
    price: "$18.99",
    originalPrice: "$25.99"
  },
  {
    product: "UltraSharp Mechanical Pencils",
    category: "Office Supplies",
    vendor: "WriteWell Co",
    note: "Preferred by architects",
    price: "$12.99",
    originalPrice: "$16.99"
  }
];

export const SponsoredPicks = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Sponsored Picks
          <Badge variant="outline">Featured</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sponsoredProducts.map((product, index) => (
            <div key={index} className="p-4 border rounded-lg bg-muted/30">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{product.product}</h4>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <Badge variant="secondary" className="text-xs">Sponsored</Badge>
              </div>
              
              <div className="text-sm mb-3">
                <span className="font-medium">by {product.vendor}</span>
                <span className="text-muted-foreground"> • {product.note}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <Button size="sm" className="gap-1">
                  Shop Now
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};