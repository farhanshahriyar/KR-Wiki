import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function PlayerGear({ gear }: { gear: any }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Gear and Settings</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Mouse</TableCell>
            <TableCell>{gear.mouse}</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mousepad</TableCell>
            <TableCell>{gear.mousepad}</TableCell>
            <TableCell>{gear.mousepadSize}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Monitor</TableCell>
            <TableCell>{gear.monitor}</TableCell>
            <TableCell>{gear.refreshRate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Keyboard</TableCell>
            <TableCell>{gear.keyboard}</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Headset</TableCell>
            <TableCell>{gear.headset}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="text-sm text-muted-foreground mt-4">
        Last updated on {gear.lastUpdated}
      </p>
    </div>
  );
}