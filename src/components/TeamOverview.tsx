import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function TeamOverview() {
  const details = [
    { label: 'Location', value: 'Dhaka, Bangladesh' },
    { label: 'Region', value: 'Asia-Pacific' },
    { label: 'Founded', value: '25 May, 2023' },
    { label: 'Type', value: 'Professional' },
    { label: 'IGL', value: 'D4RK' },
    { label: 'Manager', value: 'Scarface' },
    { label: 'Status', value: 'Active' },
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-6">
            KingsRock is a Bangladeshi esports clan based in Dhaka. The organization has quickly established itself as one of the prominent names in the South Asian esports scene.
          </p>
          {details.map((detail, index) => (
            <div key={index}>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">{detail.label}</span>
                <span className="font-medium">{detail.value}</span>
              </div>
              {index < details.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}