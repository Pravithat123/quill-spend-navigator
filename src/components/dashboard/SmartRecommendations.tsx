import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import purellSanitizerImage from "@/assets/purell-sanitizer.jpg";
import quillSanitizerImage from "@/assets/quill-sanitizer.jpg";
import hpTonerImage from "@/assets/hp-toner-cartridge.jpg";
import quillTonerImage from "@/assets/quill-toner.jpg";
import cloroxWipesImage from "@/assets/clorox-wipes.jpg";
import quillWipesImage from "@/assets/quill-wipes.jpg";

const recommendations = [
  {
    currentProduct: "Purell Advanced Hand Sanitizer",
    quillAlternative: "Quill Healthcare Hand Sanitizer",
    savings: "$18.50",
    savingsPercent: "35%",
    rating: 4.8,
    currentImage: purellSanitizerImage,
    quillImage: quillSanitizerImage
  },
  {
    currentProduct: "HP Original Toner Cartridge", 
    quillAlternative: "Quill Compatible Toner",
    savings: "$45.00",
    savingsPercent: "40%",
    rating: 4.6,
    currentImage: hpTonerImage,
    quillImage: quillTonerImage
  },
  {
    currentProduct: "Clorox Disinfecting Wipes",
    quillAlternative: "Quill Medical-Grade Wipes",
    savings: "$12.25",
    savingsPercent: "28%",
    rating: 4.7,
    currentImage: cloroxWipesImage,
    quillImage: quillWipesImage
  }
];

export const SmartRecommendations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Budget-Savvy Picks
          <Badge variant="secondary">Smart Recommendations</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <img 
                  src={rec.currentImage} 
                  alt={rec.currentProduct}
                  className="w-12 h-12 object-cover rounded border"
                />
                <div>
                  <div className="font-medium text-muted-foreground">Current:</div>
                  <div>{rec.currentProduct}</div>
                </div>
              </div>
              
              <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
              
              <div className="flex items-center gap-3 text-sm">
                <img 
                  src={rec.quillImage} 
                  alt={rec.quillAlternative}
                  className="w-12 h-12 object-cover rounded border"
                />
                <div>
                  <div className="font-medium text-primary">Recommended:</div>
                  <div className="flex items-center gap-2">
                    {rec.quillAlternative}
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{rec.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="font-medium text-green-600">Save {rec.savings}</span>
                  <span className="text-muted-foreground"> ({rec.savingsPercent})</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Compare</Button>
                  <Button size="sm">Try Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};