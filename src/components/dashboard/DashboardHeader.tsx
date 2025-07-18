import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Mail, Settings } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Smart Budgeting Dashboard</h1>
        <p className="text-muted-foreground">
          Track your spending, discover savings, and optimize your office supply budget
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline">January 2025</Badge>
          <Badge variant="secondary">Monthly Report</Badge>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Change Period
        </Button>
        <Button variant="outline" size="sm">
          <Mail className="h-4 w-4 mr-2" />
          Email Settings
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
};