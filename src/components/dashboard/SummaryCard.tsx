import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MessageSquare } from "lucide-react";

export function SummaryCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Analysis Summary</CardTitle>
        <MessageSquare className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Overall Sentiment</span>
            <Badge variant="default" className="bg-sentiment-positive/10 text-sentiment-positive border-sentiment-positive/20">
              Positive
            </Badge>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Confidence Score</span>
              <span className="font-medium">87%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-1.5">
              <div 
                className="bg-sentiment-positive h-1.5 rounded-full" 
                style={{ width: '87%' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Public comments show strong support for corporate governance reforms, 
            with particular emphasis on transparency and accountability measures.
          </p>
        </div>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <TrendingUp className="w-3 h-3 mr-1" />
          +15% improvement from last analysis
        </div>
      </CardContent>
    </Card>
  );
}