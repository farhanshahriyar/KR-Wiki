import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PerformanceChartProps {
  data: Array<{
    kills: number;
    deaths: number;
    assists: number;
  }>;
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  const chartData = data.map((match, index) => ({
    name: index,
    kills: match.kills,
    deaths: match.deaths,
    assists: match.assists,
  }));

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Kills
                            </span>
                            <span className="font-bold text-green-500">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Deaths
                            </span>
                            <span className="font-bold text-red-500">
                              {payload[1].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Assists
                            </span>
                            <span className="font-bold text-blue-500">
                              {payload[2].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="kills"
                stroke="#22c55e"
                dot={{
                  r: 4,
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="deaths"
                stroke="#ef4444"
                dot={{
                  r: 4,
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="assists"
                stroke="#3b82f6"
                dot={{
                  r: 4,
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}