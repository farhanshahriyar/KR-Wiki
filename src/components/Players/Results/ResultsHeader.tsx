import { Trophy } from 'lucide-react';

interface StatsProps {
  kd: number;
  dda: number;
  hs: number;
  adr: number;
  acs: number;
}

export function ResultsHeader({ kd, dda, hs, adr, acs }: StatsProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg mb-4">
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5" />
        <span className="font-medium">Today</span>
        <div className="flex items-center gap-1 ml-2">
          <span className="text-green-500">1 W</span>
          <span className="mx-1">•</span>
          <span className="text-red-500">0 L</span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <StatItem label="K/D" value={kd} color="text-green-500" />
        <StatItem label="DDA" value={`+${dda}`} color="text-green-500" />
        <StatItem label="HS%" value={hs} />
        <StatItem label="ADR" value={adr} />
        <StatItem label="ACS" value={acs} />
      </div>
    </div>
  );
}

function StatItem({ label, value, color = "text-foreground" }: { label: string; value: string | number; color?: string }) {
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className={`font-semibold ${color}`}>{value}</div>
    </div>
  );
}