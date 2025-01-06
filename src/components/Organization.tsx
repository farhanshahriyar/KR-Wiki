import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const organizationMembers = [
  { id: '🇧🇩 RoboCop', name: 'Abir Shahriar', role: 'Founder', joinDate: '2023-25-05' },
  { id: '🇧🇩 itzmbm', name: 'Mashrur Bin Morshed', role: 'Owner', joinDate: '2024-25-05' },
  { id: '🇧🇩 Scarface', name: 'Scarface', role: 'Team Manager', joinDate: '2024-25-05' },
];

export function Organization() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Organization</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Join Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizationMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell className="italic">{member.role}</TableCell>
                <TableCell>{member.joinDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}