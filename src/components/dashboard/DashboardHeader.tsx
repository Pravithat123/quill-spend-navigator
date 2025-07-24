import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Settings, TrendingUp, Shield } from "lucide-react";
import { AccountNavigation } from "./AccountNavigation";

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Quill Budget Buddy</h1>
          <p className="text-muted-foreground text-lg">
            Your smart healthcare spending companion
          </p>
          <div className="flex items-center gap-2 mt-3">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <TrendingUp className="h-3 w-3 mr-1" />
              On Track
            </Badge>
            <Badge variant="secondary">January 2025</Badge>
            <Badge variant="outline">Healthcare Division</Badge>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Budget Period
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
        <AccountNavigation />
      </div>
    </div>
  );
};