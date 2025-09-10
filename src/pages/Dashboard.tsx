import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp } from "lucide-react";
import { SentimentChart } from "@/components/dashboard/SentimentChart";
import { SummaryInsights } from "@/components/dashboard/SummaryInsights";
import { WordCloudComponent } from "@/components/dashboard/WordCloud";
import { KeywordTable } from "@/components/dashboard/KeywordTable";
import { SummaryCard } from "@/components/dashboard/SummaryCard";


const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sentiment Analysis Dashboard</h1>
          <p className="text-muted-foreground">Ministry of Corporate Affairs - Public Comments Analysis</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3s</div>
            <p className="text-xs text-muted-foreground">
              Average analysis time
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Distribution</CardTitle>
            <CardDescription>Overall sentiment breakdown of all comments</CardDescription>
          </CardHeader>
          <CardContent>
            <SentimentChart />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Summarize</CardTitle>
            <CardDescription>Key findings and actionable insights from sentiment analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <SummaryInsights />
          </CardContent>
        </Card>
      </div>


      {/* Word Cloud and Keywords */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Word Cloud</CardTitle>
            <CardDescription>Most frequent terms color-coded by sentiment</CardDescription>
          </CardHeader>
          <CardContent>
            <WordCloudComponent />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Keywords</CardTitle>
            <CardDescription>Most mentioned keywords with sentiment weights</CardDescription>
          </CardHeader>
          <CardContent>
            <KeywordTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;