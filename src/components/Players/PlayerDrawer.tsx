import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { PlayerInfo } from "./PlayerInfo";
import { PlayerGear } from "./PlayerGear";
import { PlayerMatches } from "./PlayerMatches";
import { PlayerResults } from "./Results/PlayerResults";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface PlayerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  player: any;
}

export function PlayerDrawer({ isOpen, onClose, player }: PlayerDrawerProps) {
  if (!player) return null;

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-6xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">{player.name}</DrawerTitle>
            <DrawerDescription>
              Professional VALORANT player for {player.team}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                    <TabsTrigger value="results" className="flex-1">Results</TabsTrigger>
                    {/* <TabsTrigger value="matches" className="flex-1">Matches</TabsTrigger> */}
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <p className="text-muted-foreground mb-6">
                      {player.name} (born {player.birthDate}) is a {player.nationality} player who is currently playing for {player.team}.
                    </p>
                    <PlayerGear gear={player.gear} />
                  </TabsContent>
                  <TabsContent value="results">
                    <PlayerResults />
                  </TabsContent>
                  <TabsContent value="matches">
                    <PlayerMatches player={player} />
                  </TabsContent>
                </Tabs>
              </div>
              <div className="col-span-1">
                <PlayerInfo player={player} />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}