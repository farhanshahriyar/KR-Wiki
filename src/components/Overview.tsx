// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Users, Trophy, Target } from 'lucide-react';

// export function Overview() {
//   return (
//     <Card className="mb-8">
//       <CardHeader>
//         <CardTitle>About KingsRock</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-6">
//           <div className="flex items-start gap-4">
//             <Users className="w-6 h-6 text-primary mt-1" />
//             <div>
//               <h3 className="font-semibold mb-2">Organization</h3>
//               <p className="text-sm text-muted-foreground">
//                 KingsRock was established in 2022 as a competitive esports organization, bringing together talented players from across Bangladesh.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <Trophy className="w-6 h-6 text-primary mt-1" />
//             <div>
//               <h3 className="font-semibold mb-2">Achievements</h3>
//               <p className="text-sm text-muted-foreground">
//                 Since its inception, KingsRock has participated in various regional tournaments and has become one of the most recognized esports organizations in Bangladesh.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <Target className="w-6 h-6 text-primary mt-1" />
//             <div>
//               <h3 className="font-semibold mb-2">Mission</h3>
//               <p className="text-sm text-muted-foreground">
//                 KingsRock aims to develop and promote esports talent in Bangladesh while creating opportunities for aspiring professional gamers in the region.
//               </p>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function Overview() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>About KingsRock</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full space-y-6">
          
          {/* Organization Section */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Organization</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                KingsRock was established in 2023 as a competitive esports organization, bringing together talented players from across Bangladesh.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Achievements Section */}
          {/* <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-start gap-4">
                <Trophy className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Achievements</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Since its inception, KingsRock has participated in various regional tournaments and has become one of the most recognized esports organizations in Bangladesh.
              </p>
            </AccordionContent>
          </AccordionItem> */}

          {/* Mission Section */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Mission</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                KingsRock aims to develop and promote esports talent in Bangladesh while creating opportunities for aspiring professional gamers in the region.
              </p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </CardContent>
    </Card>
  );
}
