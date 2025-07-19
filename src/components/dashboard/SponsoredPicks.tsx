import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import nitrileGlovesImage from "@/assets/nitrile-gloves.jpg";
import bioshieldDisinfectantImage from "@/assets/bioshield-disinfectant.jpg";
import flexicartWorkstationImage from "@/assets/flexicart-workstation.jpg";

const sponsoredProducts = [
  {
    product: "MedSafe Nitrile Gloves",
    category: "Personal Care",
    vendor: "SafetyFirst Medical",
    note: "Powder-free, latex-free protection",
    price: "$18.99",
    originalPrice: "$24.99",
    image: nitrileGlovesImage
  },
  {
    product: "BioShield Surface Disinfectant",
    category: "Jan/San Cleaning", 
    vendor: "CleanTech Solutions",
    note: "EPA-approved for healthcare facilities",
    price: "$32.99",
    originalPrice: "$39.99",
    image: bioshieldDisinfectantImage
  },
  {
    product: "FlexiCart Mobile Workstation",
    category: "Healthcare Equipment",
    vendor: "MedEquip Pro",
    note: "Height-adjustable healthcare cart",
    price: "$449.99",
    originalPrice: "$529.99",
    image: flexicartWorkstationImage
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
              <div className="flex gap-4 mb-3">
                <img 
                  src={product.image} 
                  alt={product.product}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{product.product}</h4>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">Sponsored</Badge>
                  </div>
                </div>
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