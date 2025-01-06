import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface MatchStats {
  match: number;
  kda: number;
  average: number;
}

export function PlayerStats({ matches }: { matches: any[] }) {
  // Calculate KDA ratio for each match
  const statsData: MatchStats[] = matches.map((match, index) => ({
    match: index + 1,
    kda: ((match.stats.kills + match.stats.assists) / Math.max(1, match.stats.deaths)),
    average: 2.0 // Baseline average KDA
  }));

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Performance Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={statsData}>
              <XAxis 
                dataKey="match" 
                stroke="#888888"
                tickLine={false}
                axisLine={false}
                label={{ value: 'Recent Matches', position: 'bottom', offset: 0 }}
              />
              <YAxis
                stroke="#888888"
                tickLine={false}
                axisLine={false}
                label={{ value: 'K/D/A Ratio', angle: -90, position: 'left' }}
              />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background border rounded-lg p-2 shadow-md">
                        <p className="text-sm">Match {payload[0].payload.match}</p>
                        <p className="text-sm font-bold">
                          KDA: {payload[0].value?.toFixed(2)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="kda"
                strokeWidth={2}
                stroke="hsl(var(--primary))"
                dot={{
                  r: 4,
                  fill: "hsl(var(--primary))",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "hsl(var(--primary))",
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                dataKey="average"
                strokeWidth={2}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="4 4"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}