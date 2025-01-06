import { Card, CardContent } from "@/components/ui/card";

interface TimelineEvent {
  date: string;
  description: string;
}

interface TimelineYearProps {
  year: string;
  events: TimelineEvent[];
}

export function TimelineYear({ year, events }: TimelineYearProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-primary pb-4 last:pb-0">
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary" />
              <div className="text-sm text-muted-foreground mb-1">{event.date}</div>
              <div className="text-sm" dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}