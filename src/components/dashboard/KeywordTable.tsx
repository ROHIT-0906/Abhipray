import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const keywordData = [
  {
    keyword: "corporate governance",
    frequency: 145,
    sentiment: "positive",
    weight: 0.78
  },
  {
    keyword: "transparency",
    frequency: 134,
    sentiment: "positive", 
    weight: 0.82
  },
  {
    keyword: "accountability",
    frequency: 131,
    sentiment: "positive",
    weight: 0.75
  },
  {
    keyword: "compliance burden",
    frequency: 128,
    sentiment: "negative",
    weight: -0.65
  },
  {
    keyword: "regulatory framework",
    frequency: 119,
    sentiment: "neutral",
    weight: 0.15
  },
  {
    keyword: "implementation cost",
    frequency: 112,
    sentiment: "negative",
    weight: -0.58
  },
  {
    keyword: "stakeholder engagement",
    frequency: 103,
    sentiment: "positive",
    weight: 0.72
  },
  {
    keyword: "policy reform",
    frequency: 98,
    sentiment: "positive",
    weight: 0.68
  }
];

const getSentimentVariant = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return 'default';
    case 'negative': return 'destructive';
    default: return 'secondary';
  }
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return 'text-sentiment-positive';
    case 'negative': return 'text-sentiment-negative';
    default: return 'text-sentiment-neutral';
  }
};

export function KeywordTable() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Keyword</TableHead>
            <TableHead className="text-center">Frequency</TableHead>
            <TableHead className="text-center">Sentiment</TableHead>
            <TableHead className="text-right">Weight</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keywordData.map((item, index) => (
            <TableRow key={index} className="hover:bg-muted/30">
              <TableCell className="font-medium">
                {item.keyword}
              </TableCell>
              <TableCell className="text-center">
                <div className="font-mono text-sm">
                  {item.frequency}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge 
                  variant={getSentimentVariant(item.sentiment)}
                  className="capitalize"
                >
                  {item.sentiment}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <span className={`font-mono text-sm font-medium ${getSentimentColor(item.sentiment)}`}>
                  {item.weight > 0 ? '+' : ''}{item.weight.toFixed(2)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}