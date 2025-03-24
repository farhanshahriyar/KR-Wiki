import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TimelineYear } from "./TimelineYear";

const timelineData = {
  "2025": [
    { date: "March 3", description: "GreenAssassain left from KingsRock" },
    { date: "June 14", description: "Emberfall joined KingsRock" },
  ],
  "2024": [
    { date: "June 14", description: "MBM and RoboCop restored KingsRock" },
    { date: "July 30", description: "DEEZAS joined in KingsRock." },
    { date: "August 4", description: "DEEZAS left from KingsRock" },
    { date: "August 12", description: "RH/NE, GreenAssassain, J3rRyyy, CyRiL⚡ and DurterxD joined KingsRock." },
    { date: "August 14", description: "D4RK Joins KingsRock" },
    { date: "August 26", description: " CROWNLESS 👑 , Rebel & Shafaet Jamil Joins KingsRock." },
    { date: "September 13", description: "KingsRock roster announced" },
    { date: "September 30", description: "Shafaet Jamil left from KingsRock" },
    { date: "December 9", description: "Peep, Hunter Sakib, Phasor joined KingsRock" },
  ],
  "2023": [
    { date: "June 8", description: "PROFESSOR TOXIC, Sam11, mrFUKU, Amatsumina and TKJ DOSH  joined." },
    { date: "August 13", description: "Sam11 left from KingsRock." },
    { date: "August 31", description: "Released all players." },
    { date: "September 1", description: "Clan wents to inactive" }
  ],
};

export function HistoryTimeline() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="2024" className="w-full">
          <TabsList className="grid grid-cols-6 mb-4">
            <TabsTrigger value="2023">2023</TabsTrigger>
            <TabsTrigger value="2024">2024</TabsTrigger>
            <TabsTrigger value="2025">2025</TabsTrigger>
            <TabsTrigger value="all">Show All</TabsTrigger>
          </TabsList>
          {Object.entries(timelineData).map(([year, events]) => (
            <TabsContent key={year} value={year}>
              <TimelineYear year={year} events={events} />
            </TabsContent>
          ))}
          <TabsContent value="all">
            <div className="space-y-8">
              {Object.entries(timelineData).map(([year, events]) => (
                <div key={year}>
                  <h3 className="text-lg font-semibold mb-4">{year}</h3>
                  <TimelineYear year={year} events={events} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}