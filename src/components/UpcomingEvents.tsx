import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';

const upcomingMatches = [
  {
    team1: 'KingsRock',
    team2: '-',
    event: '-',
    date: '1d',
  },
];

const upcomingTournaments = [
  {
    name: 'Not Available',
    date: '0 - 0',
  },
  // {
  //   name: 'Not Available',
  //   date: 'Dec 10 - 15',
  // },
  // {
  //   name: 'Not Available',
  //   date: 'Jan 15 - Feb 01',
  // },
];

export function UpcomingEvents() {
  return (
    <div className="grid gap-8 mb-8">
      <Card>
        <CardHeader className="bg-red-50 dark:bg-red-950/20">
          <CardTitle className="text-lg">Upcoming Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {upcomingMatches.map((match, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center gap-2">
                    <span className="font-semibold">{match.team1}</span>
                    <span className="text-muted-foreground">vs</span>
                    <span className="font-semibold">{match.team2}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="text-sm font-medium">{match.event}</div>
                    <div className="text-sm text-muted-foreground">{match.date}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-red-50 dark:bg-red-950/20">
          <CardTitle className="text-lg">Upcoming Tournaments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingTournaments.map((tournament, index) => (
              <div key={index}>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">{tournament.name}</span>
                  <span className="text-sm text-muted-foreground">{tournament.date}</span>
                </div>
                {index < upcomingTournaments.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}