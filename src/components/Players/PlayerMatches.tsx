import { useEffect, useState } from 'react';
import { fetchPlayerMatches } from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { PerformanceChart } from './PerformanceChart';

interface Match {
  metadata: {
    map: string;
    game_start_patched: string;
    mode: string;
  };
  stats: {
    score: number;
    kills: number;
    deaths: number;
    assists: number;
  };
  teams: {
    has_won: boolean;
  };
}

export function PlayerMatches({ player }: { player: any }) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatches() {
      const [name, tag] = player.name.split('#');
      const matchData = await fetchPlayerMatches(name, tag || '0505');
      setMatches(matchData || []);
      setLoading(false);
    }

    loadMatches();
  }, [player]);

  if (loading) {
    return <div className="text-center py-8">Loading match history...</div>;
  }

  return (
    <div className="space-y-6">
      <PerformanceChart 
        data={matches.map(match => ({
          kills: match.stats.kills,
          deaths: match.stats.deaths,
          assists: match.stats.assists,
        }))}
      />

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Map</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>K/D/A</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matches.map((match, index) => (
                <TableRow key={index}>
                  <TableCell>{match.metadata.game_start_patched}</TableCell>
                  <TableCell>{match.metadata.map}</TableCell>
                  <TableCell>{match.metadata.mode}</TableCell>
                  <TableCell>
                    <span className="text-green-500 font-medium">{match.stats.kills}</span>
                    <span className="mx-1">/</span>
                    <span className="text-red-500 font-medium">{match.stats.deaths}</span>
                    <span className="mx-1">/</span>
                    <span className="text-blue-500 font-medium">{match.stats.assists}</span>
                  </TableCell>
                  <TableCell>{match.stats.score}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        'px-2 py-1 rounded-full text-sm font-medium',
                        match.teams.has_won
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      )}
                    >
                      {match.teams.has_won ? 'Won' : 'Lost'}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}