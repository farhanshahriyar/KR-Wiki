import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const formerMembers = [
    { id: '🇧🇩 BenjirCommando', name: 'Shafaet Jamil', role: 'Sentinel', leaveDate: '2024-09-30' },
    { id: '🇧🇩 Rebel', name: 'Faisal Hasan', role: 'Duelist', leaveDate: '2024-12-08' },
    { id: '🇧🇩 GreenAssassin', name: 'Mazbaul Hassan', role: 'Controller', leaveDate: '2025-03-03' },
  ];

function FormerRoster() {
  return (
   <Card className="mb-8">
         <CardHeader>
           <CardTitle>Former</CardTitle>
         </CardHeader>
         <CardContent>
           <Table>
             <TableHeader>
               <TableRow>
                 <TableHead>ID</TableHead>
                 <TableHead>Name</TableHead>
                 <TableHead>Role</TableHead>
                 <TableHead>Leave Date</TableHead>
               </TableRow>
             </TableHeader>
             <TableBody>
               {formerMembers.map((member) => (
                 <TableRow key={member.id}>
                   <TableCell>{member.id}</TableCell>
                   <TableCell>{member.name}</TableCell>
                   <TableCell className="italic">{member.role}</TableCell>
                   <TableCell>{member.leaveDate}</TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </CardContent>
       </Card>
  )
}

export default FormerRoster
