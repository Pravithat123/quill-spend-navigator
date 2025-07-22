import { User, FileText, RefreshCw, ShoppingBag, Settings, ShoppingCart, Trophy, DollarSign, TrendingUp, Receipt, MessageCircle, LogOut, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AccountNavigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">Account #: 8418503</p>
            <p className="text-sm text-muted-foreground">Reward ID: 506769011</p>
            <p className="text-sm text-muted-foreground">Rewards+ customer service team</p>
            <p className="text-sm text-muted-foreground">1-800-437-1281</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Your account</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>Invoices & account balance</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <RefreshCw className="mr-2 h-4 w-4" />
          <span>Reorder list</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <ShoppingBag className="mr-2 h-4 w-4" />
          <span>Your shopping lists</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Account settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="bg-blue-50 text-blue-700 font-medium">
          <BarChart3 className="mr-2 h-4 w-4" />
          <span>Smart Budgeting Dashboard</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <ShoppingCart className="mr-2 h-4 w-4" />
          <span>Purchasing manager</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Trophy className="mr-2 h-4 w-4" />
          <span>Rewards program</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <DollarSign className="mr-2 h-4 w-4" />
          <span>Your custom price list</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <TrendingUp className="mr-2 h-4 w-4" />
          <span>Your savings</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Receipt className="mr-2 h-4 w-4" />
          <span>Your quotes</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem>
          <MessageCircle className="mr-2 h-4 w-4" />
          <span>Help center</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <MessageCircle className="mr-2 h-4 w-4" />
          <span>Send feedback</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}