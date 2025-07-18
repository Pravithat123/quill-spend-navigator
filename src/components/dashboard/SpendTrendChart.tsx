import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { month: "Jul 2024", spend: 8500 },
  { month: "Aug 2024", spend: 9200 },
  { month: "Sep 2024", spend: 7800 },
  { month: "Oct 2024", spend: 11400 },
  { month: "Nov 2024", spend: 10200 },
  { month: "Dec 2024", spend: 12100 },
  { month: "Jan 2025", spend: 12847 },
];


export const SpendTrendChart = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Monthly Spend Trend</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis 
              dataKey="month" 
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border rounded-lg shadow-md p-3">
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-sm text-primary">
                        Spend: ${payload[0].value?.toLocaleString()}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              dataKey="spend"
              type="monotone"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};