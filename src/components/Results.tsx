import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

const results = [
  {
    date: 'September 17, 2024 - 10:30',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'Zing x Valo Tourney - 5k Tournament Price Pool',
    score: '0:1',
    opponent: 'Surgical Strikes ',
    result: 'loss'
  },
  {
    date: 'September 17, 2024 - 11:30',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'Inspire Valorant Skirmish - 50k Tournament ',
    score: '0:1',
    opponent: ' Legends Syndicate Esports',
    result: 'loss'
  },
  {
    date: 'October 14, 2024 - 11:30',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'AmzCarts Presents Summer Open Season 1 ',
    score: '0:1',
    opponent: ' TOPGs',
    result: 'loss'
  },
  {
    date: 'December 23, 2024 - 09:00',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'EWUCoPC GameCon Season 1',
    score: '2:0',
    opponent: 'Jobless e - Sports',
    result: 'win'
  },
  {
    date: 'December 24, 2024 - 09:00',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'EWUCoPC GameCon Season 1',
    score: '2:0',
    opponent: 'Alpha Kanie1',
    result: 'win'
  },
  {
    date: 'December 25, 2024 - 09:00',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'EWUCoPC GameCon Season 1',
    score: '2:0',
    opponent: 'CEO',
    result: 'win'
  },
  {
    date: 'December 25, 2024 - 09:00',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'EWUCoPC GameCon Season 1',
    score: '2:0',
    opponent: 'CEO',
    result: 'win'
  },
  {
    date: 'December 26, 2024 - 09:00',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'EWUCoPC GameCon Season 1',
    score: '0:2',
    opponent: 'REDWiNGS',
    result: 'loss'
  },
  {
    date: 'December 28, 2024 - 09:00',
    tier: 'C-Tier',
    type: 'Online',
    tournament: 'EWUCoPC GameCon Season 1',
    score: '1:2',
    opponent: 'Go Neck',
    result: 'loss'
  },
];

export function Results() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Recent Results</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Tournament</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Opponent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((match, index) => (
              <TableRow 
                key={index}
                className={cn(
                  match.result === 'win' && 'bg-green-50 dark:bg-green-950/20',
                  match.result === 'loss' && 'bg-red-50 dark:bg-red-950/20'
                )}
              >
                <TableCell className="whitespace-nowrap">{match.date}</TableCell>
                <TableCell>{match.tier}</TableCell>
                <TableCell>{match.type}</TableCell>
                <TableCell>{match.tournament}</TableCell>
                <TableCell className="font-medium">{match.score}</TableCell>
                <TableCell>{match.opponent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}