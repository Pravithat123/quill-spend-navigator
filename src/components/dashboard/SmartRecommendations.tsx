import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, DollarSign, Star, TrendingDown, ShoppingCart, Calculator } from "lucide-react";
import purellSanitizerImage from "@/assets/purell-sanitizer.jpg";
import quillSanitizerImage from "@/assets/quill-sanitizer.jpg";
import hpTonerImage from "@/assets/hp-toner-cartridge.jpg";
import quillTonerImage from "@/assets/quill-toner.jpg";
import cloroxWipesImage from "@/assets/clorox-wipes.jpg";
import quillWipesImage from "@/assets/quill-wipes.jpg";

const recommendations = [
  {
    type: "budget-friendly",
    title: "Switch to Quill Brand Wipes",
    description: "Stay within your janitorial budget",
    currentProduct: "Clorox Disinfecting Wipes",
    quillAlternative: "Quill Brand Disinfecting Wipes",
    monthlySavings: 84,
    savingsPercent: 15,
    rating: 4.5,
    currentImage: cloroxWipesImage,
    quillImage: quillWipesImage,
    impact: "Saves $1,008 annually",
    budgetCategory: "Janitorial & Cleaning"
  },
  {
    type: "bulk-discount",
    title: "Bulk Order Opportunity",
    description: "Order 3+ months of hand sanitizer",
    currentProduct: "Purell Hand Sanitizer",
    quillAlternative: "Quill Brand Hand Sanitizer (Bulk)",
    monthlySavings: 45,
    savingsPercent: 25,
    rating: 4.6,
    currentImage: purellSanitizerImage,
    quillImage: quillSanitizerImage,
    impact: "Bulk discount + free shipping",
    budgetCategory: "Personal Care"
  },
  {
    type: "subscription",
    title: "Subscribe & Save Setup",
    description: "Never run out of toner again",
    currentProduct: "HP LaserJet Toner",
    quillAlternative: "Quill Compatible Toner (S&S)",
    monthlySavings: 67,
    savingsPercent: 30,
    rating: 4.7,
    currentImage: hpTonerImage,
    quillImage: quillTonerImage,
    impact: "Auto-delivery + 30% savings",
    budgetCategory: "Office Supplies"
  },
];

export const SmartRecommendations = () => {
  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case "budget-friendly":
        return <TrendingDown className="h-4 w-4 text-green-500" />;
      case "bulk-discount":
        return <ShoppingCart className="h-4 w-4 text-blue-500" />;
      case "subscription":
        return <Star className="h-4 w-4 text-purple-500" />;
      default:
        return <Lightbulb className="h-4 w-4 text-yellow-500" />;
    }
  };

  const totalMonthlySavings = recommendations.reduce((sum, rec) => sum + rec.monthlySavings, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Budget-Smart Recommendations
        </CardTitle>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="secondary" className="bg-green-50 text-green-700">
            <Calculator className="h-3 w-3 mr-1" />
            ${totalMonthlySavings}/mo potential savings
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-muted/20 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                {getRecommendationIcon(rec.type)}
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{rec.title}</h4>
                  <p className="text-xs text-muted-foreground">{rec.description}</p>
                  <Badge variant="outline" className="text-xs mt-1">{rec.budgetCategory}</Badge>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                  <DollarSign className="h-3 w-3 mr-1" />
                  ${rec.monthlySavings}/mo
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <img 
                    src={rec.currentImage} 
                    alt={rec.currentProduct}
                    className="w-8 h-8 object-cover rounded"
                  />
                  <div>
                    <p className="text-xs font-medium">{rec.currentProduct}</p>
                    <p className="text-xs text-muted-foreground">Current</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img 
                    src={rec.quillImage} 
                    alt={rec.quillAlternative}
                    className="w-8 h-8 object-cover rounded"
                  />
                  <div>
                    <p className="text-xs font-medium">{rec.quillAlternative}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{rec.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <span className="text-xs text-muted-foreground">{rec.impact}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-xs">Learn More</Button>
                  <Button size="sm" className="text-xs">Make Switch</Button>
                </div>
              </div>
            </div>
          ))}
          
          <Button variant="outline" className="w-full">
            View All Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};