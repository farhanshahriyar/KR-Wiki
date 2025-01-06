import { cn } from '@/lib/utils';

interface MatchResultProps {
  map: string;
  score: string;
  rank: string;
  rankNumber: number;
  placement: string;
  kda: string;
  kd: number;
  dda: number;
  hs: number;
  adr: number;
  acs: number;
  timeAgo: string;
}

export function MatchResult({
  map,
  score,
  rank,
  rankNumber,
  placement,
  kda,
  kd,
  dda,
  hs,
  adr,
  acs,
  timeAgo,
}: MatchResultProps) {
  const isWin = parseInt(score.split(':')[0]) > parseInt(score.split(':')[1]);

  return (
    <div className={cn(
      "flex items-center justify-between p-4 rounded-lg mb-2",
      isWin ? "bg-green-500/10" : "bg-red-500/10"
    )}>
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">Competitive • {timeAgo}</span>
          <span className="font-medium">{map}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded-full" /> {/* Rank icon placeholder */}
          <span className="font-medium">{score}</span>
          <span className="text-sm text-muted-foreground">{placement}</span>
        </div>
        <div className="bg-primary/10 px-2 py-1 rounded">
          {rankNumber}
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="text-center">
          <div className="text-sm text-muted-foreground">K/D/A</div>
          <div className="font-medium">{kda}</div>
        </div>
        <StatItem label="K/D" value={kd} isPositive={kd > 1} />
        <StatItem label="DDA" value={dda} isPositive={dda > 0} />
        <StatItem label="HS%" value={hs} />
        <StatItem label="ADR" value={adr} />
        <StatItem label="ACS" value={acs} />
      </div>
    </div>
  );
}

function StatItem({ label, value, isPositive }: { label: string; value: number; isPositive?: boolean }) {
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className={cn(
        "font-medium",
        isPositive !== undefined && (isPositive ? "text-green-500" : "text-red-500")
      )}>
        {isPositive !== undefined && (value > 0) && '+'}
        {value}
      </div>
    </div>
  );
}