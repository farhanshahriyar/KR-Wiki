import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    date: '2023',
    tournament: 'VCT 2023: Americas League',
    placement: '1st',
    prize: '$100,000',
  },
  {
    date: '2022',
    tournament: 'VCT 2022: Stage 2 Masters - Copenhagen',
    placement: '2nd',
    prize: '$60,000',
  },
  {
    date: '2021',
    tournament: 'VCT 2021: Stage 2 Masters - Reykjavík',
    placement: '1st',
    prize: '$200,000',
  },
];

export function Achievements() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Notable Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Tournament</TableHead>
              <TableHead>Placement</TableHead>
              <TableHead>Prize</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {achievements.map((achievement) => (
              <TableRow key={achievement.tournament}>
                <TableCell>{achievement.date}</TableCell>
                <TableCell className="font-medium">{achievement.tournament}</TableCell>
                <TableCell>{achievement.placement}</TableCell>
                <TableCell>{achievement.prize}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}