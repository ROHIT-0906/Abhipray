import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { date: 'Dec 1', positive: 45, negative: 12, neutral: 25 },
  { date: 'Dec 5', positive: 52, negative: 15, neutral: 28 },
  { date: 'Dec 10', positive: 48, negative: 18, neutral: 22 },
  { date: 'Dec 15', positive: 62, negative: 8, neutral: 30 },
  { date: 'Dec 20', positive: 58, negative: 14, neutral: 26 },
  { date: 'Dec 25', positive: 65, negative: 10, neutral: 25 },
  { date: 'Dec 30', positive: 70, negative: 8, neutral: 22 }
];

export function TrendChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="positive" 
            stroke="hsl(var(--sentiment-positive))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--sentiment-positive))', strokeWidth: 2, r: 4 }}
            name="Positive"
          />
          <Line 
            type="monotone" 
            dataKey="neutral" 
            stroke="hsl(var(--sentiment-neutral))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--sentiment-neutral))', strokeWidth: 2, r: 4 }}
            name="Neutral"
          />
          <Line 
            type="monotone" 
            dataKey="negative" 
            stroke="hsl(var(--sentiment-negative))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--sentiment-negative))', strokeWidth: 2, r: 4 }}
            name="Negative"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}