import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

const recommendations = [
  {
    currentProduct: "Bounty Paper Towels",
    quillAlternative: "Quill Select Paper Towels",
    savings: "$3.50",
    savingsPercent: "15%",
    rating: 4.5
  },
  {
    currentProduct: "Staples Sticky Notes", 
    quillAlternative: "Quill Brand Sticky Notes",
    savings: "$2.25",
    savingsPercent: "20%",
    rating: 4.7
  },
  {
    currentProduct: "3M Scotch Tape",
    quillAlternative: "Quill Clear Tape",
    savings: "$1.80",
    savingsPercent: "12%",
    rating: 4.3
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
              <div className="text-sm">
                <div className="font-medium text-muted-foreground">Current:</div>
                <div>{rec.currentProduct}</div>
              </div>
              
              <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
              
              <div className="text-sm">
                <div className="font-medium text-primary">Recommended:</div>
                <div className="flex items-center gap-2">
                  {rec.quillAlternative}
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{rec.rating}</span>
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