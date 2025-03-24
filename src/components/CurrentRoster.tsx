import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlayerDrawer } from './Players/PlayerDrawer';

const roster = [
  {
    name: '🇧🇩 D4RK',
    fullName: 'Farhan Fuad Nabil',
    role: 'Initiator , Duelist',
    nationality: '🇧🇩 Bangladesh',
    joinDate: '2024-08-14',
    birthDate: 'May 2, 2003',
    age: '21',
    status: 'Active',
    yearsActive: '2019 - Present',
    team: 'KingsRock',
    totalWinnings: '$0',
    image: 'https://utfs.io/f/cq5eB4pNFkjUNnF2evmWbksazOGPqj60UyM5Kle3ChdSW8Dx',
    crownIcon: "fas fa-crown",
    gear: {
      mouse: 'Razer Razer DeathAdder Essential',
      mousepad: 'VXE MAD R-PAW3395 Wireless 8K Gaming Mouse | Black',
      mousepadSize: '340 x 250 mm',
      monitor: 'Acer HA0 HA220Q BI 22',
      refreshRate: '75 Hz',
      keyboard: 'ThundeRobot K98 ',
      headset: 'Audeeo Encounter Pro',
      lastUpdated: '2024-12-29'
    },
    recentMatches: [
      {
        map: 'Haven',
        score: '13:7',
        rank: 'Immortal',
        rankNumber: 789,
        placement: '4th',
        kda: '15/9/4',
        kd: 1.7,
        dda: 74,
        hs: 25,
        adr: 161,
        acs: 208,
        timeAgo: '16h ago'
      },
      {
        map: 'Abyss',
        score: '13:2',
        rank: 'Immortal',
        rankNumber: 659,
        placement: '4th',
        kda: '13/7/3',
        kd: 1.9,
        dda: 36,
        hs: 16,
        adr: 125,
        acs: 196,
        timeAgo: '1d ago'
      },
      {
        map: 'Split',
        score: '13:11',
        rank: 'Immortal',
        rankNumber: 461,
        placement: '7th',
        kda: '11/19/17',
        kd: 0.6,
        dda: -31,
        hs: 13,
        adr: 100,
        acs: 161,
        timeAgo: '1d ago'
      },
      {
        map: 'Sunset',
        score: '9:13',
        rank: 'Immortal',
        rankNumber: 808,
        placement: '3rd',
        kda: '21/18/6',
        kd: 1.2,
        dda: 58,
        hs: 14,
        adr: 203,
        acs: 284,
        timeAgo: '1d ago'
      }
    ]
  },
  {
    name: '🇧🇩 RH1NE',
    fullName: 'MD Musabbir Bin Javed Rhine',
    role: 'Sentinel',
    nationality: '🇧🇩 Bangladesh',
    joinDate: '2024-08-14',
    birthDate: 'April 20, 2000',
    age: '24',
    status: 'Active',
    yearsActive: '2022 - Present',
    team: 'KingsRock',
    totalWinnings: '$137,931',
    image: 'https://utfs.io/f/cq5eB4pNFkjUl7Nd6Dc9h8DQzMIS1pviPAUOBZdfYbw2mnWq',
    gear: {
      mouse: 'Lamzu Atlantis Mini',
      mousepad: 'EZPad Control - Wraith of Poseidon',
      mousepadSize: '400x450',
      monitor: 'ViewSonic XG2405',
      refreshRate: '144 Hz',
      keyboard: 'Royal Kludge RK84',
      headset: 'Headset kz zns pro x',
      lastUpdated: '2024-12-29'
    },
    recentMatches: [
      {
        map: 'Haven',
        score: '13:7',
        rank: 'Immortal',
        rankNumber: 789,
        placement: '4th',
        kda: '15/9/4',
        kd: 1.7,
        dda: 74,
        hs: 25,
        adr: 161,
        acs: 208,
        timeAgo: '16h ago'
      },
      {
        map: 'Abyss',
        score: '13:2',
        rank: 'Immortal',
        rankNumber: 659,
        placement: '4th',
        kda: '13/7/3',
        kd: 1.9,
        dda: 36,
        hs: 16,
        adr: 125,
        acs: 196,
        timeAgo: '1d ago'
      },
      {
        map: 'Split',
        score: '13:11',
        rank: 'Immortal',
        rankNumber: 461,
        placement: '7th',
        kda: '11/19/17',
        kd: 0.6,
        dda: -31,
        hs: 13,
        adr: 100,
        acs: 161,
        timeAgo: '1d ago'
      },
      {
        map: 'Sunset',
        score: '9:13',
        rank: 'Immortal',
        rankNumber: 808,
        placement: '3rd',
        kda: '21/18/6',
        kd: 1.2,
        dda: 58,
        hs: 14,
        adr: 203,
        acs: 284,
        timeAgo: '1d ago'
      }
    ]
  },
  {
    name: '🇧🇩 CyRiL⚡',
    fullName: 'Md. Fahad',
    role: 'Duelist',
    nationality: '🇧🇩 Bangladesh',
    joinDate: '2024-08-14',
    birthDate: 'August 1, 2006',
    age: '18',
    status: 'Active',
    yearsActive: '2022 - Present',
    team: 'KingsRock',
    totalWinnings: '$137,931',
    image: 'https://api.konect.gg/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWRnTGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7cfe2c0f27748ebcf39c5d2fb9980bcc90f80eba/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lKZDJWaWNBWTZCa1ZVT2hOeVpYTnBlbVZmZEc5ZlptbHNiRnNIYVFIK2FRSCsiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--54d3098cfcaadfbb5e4413b4589aa8a6324f7f6e/20221017_203951.png',
    gear: {
      mouse: 'Logitech G402',
      mousepad: 'Fantech AGILE MP904 Mint Edition Gaming Mousepad',
      mousepadSize: '900 x 400 x 3mm',
      monitor: 'ViewSonic VA2209',
      refreshRate: '100 Hz',
      keyboard: 'Xtrike Me GK-979 Wired Mechanical Gaming',
      headset: 'KZ ZSN Pro',
      lastUpdated: '2024-12-29'
    },
    recentMatches: [
      {
        map: 'Haven',
        score: '13:7',
        rank: 'Immortal',
        rankNumber: 789,
        placement: '4th',
        kda: '15/9/4',
        kd: 1.7,
        dda: 74,
        hs: 25,
        adr: 161,
        acs: 208,
        timeAgo: '16h ago'
      },
      {
        map: 'Abyss',
        score: '13:2',
        rank: 'Immortal',
        rankNumber: 659,
        placement: '4th',
        kda: '13/7/3',
        kd: 1.9,
        dda: 36,
        hs: 16,
        adr: 125,
        acs: 196,
        timeAgo: '1d ago'
      },
      {
        map: 'Split',
        score: '13:11',
        rank: 'Immortal',
        rankNumber: 461,
        placement: '7th',
        kda: '11/19/17',
        kd: 0.6,
        dda: -31,
        hs: 13,
        adr: 100,
        acs: 161,
        timeAgo: '1d ago'
      },
      {
        map: 'Sunset',
        score: '9:13',
        rank: 'Immortal',
        rankNumber: 808,
        placement: '3rd',
        kda: '21/18/6',
        kd: 1.2,
        dda: 58,
        hs: 14,
        adr: 203,
        acs: 284,
        timeAgo: '1d ago'
      }
    ]
  },
  {
    name: '🇧🇩 CROWNLESS👑',
    fullName: 'Mehedi Akash',
    role: 'Duelist, Controller',
    nationality: '🇧🇩 Bangladesh',
    joinDate: '2024-08-26',
    birthDate: 'August 15, 2001',
    age: '23',
    status: 'Active',
    yearsActive: '2023 - Present',
    team: 'KingsRock',
    totalWinnings: '$137,931',
    image: 'https://utfs.io/f/cq5eB4pNFkjUN2fVxcWbksazOGPqj60UyM5Kle3ChdSW8Dxp',
    gear: {
      mouse: 'Logitech G401',
      mousepad: 'Ezpad Prime Empress',
      mousepadSize: '400x400',
      monitor: 'G27FC',
      refreshRate: '165 Hz',
      keyboard: 'Ziyolang T8',
      headset: 'Corsair HS55',
      lastUpdated: '2024-12-29'
    },
    recentMatches: [
      {
        map: 'Haven',
        score: '13:7',
        rank: 'Immortal',
        rankNumber: 789,
        placement: '4th',
        kda: '15/9/4',
        kd: 1.7,
        dda: 74,
        hs: 25,
        adr: 161,
        acs: 208,
        timeAgo: '16h ago'
      },
      {
        map: 'Abyss',
        score: '13:2',
        rank: 'Immortal',
        rankNumber: 659,
        placement: '4th',
        kda: '13/7/3',
        kd: 1.9,
        dda: 36,
        hs: 16,
        adr: 125,
        acs: 196,
        timeAgo: '1d ago'
      },
      {
        map: 'Split',
        score: '13:11',
        rank: 'Immortal',
        rankNumber: 461,
        placement: '7th',
        kda: '11/19/17',
        kd: 0.6,
        dda: -31,
        hs: 13,
        adr: 100,
        acs: 161,
        timeAgo: '1d ago'
      },
      {
        map: 'Sunset',
        score: '9:13',
        rank: 'Immortal',
        rankNumber: 808,
        placement: '3rd',
        kda: '21/18/6',
        kd: 1.2,
        dda: 58,
        hs: 14,
        adr: 203,
        acs: 284,
        timeAgo: '1d ago'
      }
    ]
  },
  {
    name: '🇧🇩 Hunter Sakib',
    fullName: 'Kabir Sakib',
    role: 'Initiator',
    nationality: '🇧🇩 Bangladesh',
    joinDate: '2024-12-09',
    birthDate: 'September 18, 2002',
    age: '20',
    status: 'Active',
    yearsActive: '2022 - Present',
    team: 'KingsRock',
    totalWinnings: '$137,931',
    image: 'https://utfs.io/f/cq5eB4pNFkjUaDle80XGlcJfWVKp5sh732oR8ZvdCUHMIAEy',
    gear: {
      mouse: '-',
      mousepad: '-',
      mousepadSize: '-',
      monitor: 'AUS VG27VQ',
      refreshRate: '165 Hz',
      keyboard: 'Gaming Keyboard',
      headset: 'HyperX',
      lastUpdated: '2024-12-29'
    },
    recentMatches: [
      {
        map: 'Haven',
        score: '13:7',
        rank: 'Immortal',
        rankNumber: 789,
        placement: '4th',
        kda: '15/9/4',
        kd: 1.7,
        dda: 74,
        hs: 25,
        adr: 161,
        acs: 208,
        timeAgo: '16h ago'
      },
      {
        map: 'Abyss',
        score: '13:2',
        rank: 'Immortal',
        rankNumber: 659,
        placement: '4th',
        kda: '13/7/3',
        kd: 1.9,
        dda: 36,
        hs: 16,
        adr: 125,
        acs: 196,
        timeAgo: '1d ago'
      },
      {
        map: 'Split',
        score: '13:11',
        rank: 'Immortal',
        rankNumber: 461,
        placement: '7th',
        kda: '11/19/17',
        kd: 0.6,
        dda: -31,
        hs: 13,
        adr: 100,
        acs: 161,
        timeAgo: '1d ago'
      },
      {
        map: 'Sunset',
        score: '9:13',
        rank: 'Immortal',
        rankNumber: 808,
        placement: '3rd',
        kda: '21/18/6',
        kd: 1.2,
        dda: 58,
        hs: 14,
        adr: 203,
        acs: 284,
        timeAgo: '1d ago'
      }
    ]
  },
  {
    name: '🇧🇩 Phasor',
    fullName: 'Muhtashim Ul Huq Sahil',
    role: 'Duelist, Controller',
    nationality: '🇧🇩 Bangladesh',
    joinDate: '2024-12-09',
    birthDate: 'August 21, 2003',
    age: '21',
    status: 'Active',
    yearsActive: '2023 - Present',
    team: 'KingsRock',
    totalWinnings: '$137,931',
    image: 'https://utfs.io/f/cq5eB4pNFkjUrnqh39lHtDwv2B8UEAnQOLRYTSucWK5zPjJo',
    gear: {
      mouse: 'darmoshark GN1',
      mousepad: 'rasure X',
      mousepadSize: '12.5 x 9 in',
      monitor: 'ASUS Tuf gaming A17',
      refreshRate: '144 Hz',
      keyboard: 'Laptop Keyboard',
      headset: ' KZ ZSN',
      lastUpdated: '2024-12-29'
    },
    recentMatches: [
      {
        map: 'Haven',
        score: '13:7',
        rank: 'Immortal',
        rankNumber: 789,
        placement: '4th',
        kda: '15/9/4',
        kd: 1.7,
        dda: 74,
        hs: 25,
        adr: 161,
        acs: 208,
        timeAgo: '16h ago'
      },
      {
        map: 'Abyss',
        score: '13:2',
        rank: 'Immortal',
        rankNumber: 659,
        placement: '4th',
        kda: '13/7/3',
        kd: 1.9,
        dda: 36,
        hs: 16,
        adr: 125,
        acs: 196,
        timeAgo: '1d ago'
      },
      {
        map: 'Split',
        score: '13:11',
        rank: 'Immortal',
        rankNumber: 461,
        placement: '7th',
        kda: '11/19/17',
        kd: 0.6,
        dda: -31,
        hs: 13,
        adr: 100,
        acs: 161,
        timeAgo: '1d ago'
      },
      {
        map: 'Sunset',
        score: '9:13',
        rank: 'Immortal',
        rankNumber: 808,
        placement: '3rd',
        kda: '21/18/6',
        kd: 1.2,
        dda: 58,
        hs: 14,
        adr: 203,
        acs: 284,
        timeAgo: '1d ago'
      }
    ]
  },
  {
    name: '🇧🇩 Peep',
    fullName: 'Safin Hossain',
    role: 'Duelist',
    nationality: '🇧🇩 Bangladesh',
    joinDate: '2024-12-09',
    birthDate: 'September 18, 2006',
    age: '18',
    status: 'Active',
    yearsActive: '2020 - Present',
    team: 'KingsRock',
    totalWinnings: '$137,931',
    image: 'https://nsh8o6977a.ufs.sh/f/shAevB82jMTUXDoK0sOVT5ICJSmpBlPDM2WU6FuYQEjH8hsi',
    gear: {
      mouse: 'Meetion-GM22',
      mousepad: 'HyperX',
      mousepadSize: '-',
      monitor: 'Asus Gaming monitor ',
      refreshRate: '60 Hz',
      keyboard: 'Meetion MK005',
      headset: 'Fantech gaming headset',
      lastUpdated: '2024-12-29'
    },
    recentMatches: [
      {
        map: 'Haven',
        score: '13:7',
        rank: 'Immortal',
        rankNumber: 789,
        placement: '4th',
        kda: '15/9/4',
        kd: 1.7,
        dda: 74,
        hs: 25,
        adr: 161,
        acs: 208,
        timeAgo: '16h ago'
      },
      {
        map: 'Abyss',
        score: '13:2',
        rank: 'Immortal',
        rankNumber: 659,
        placement: '4th',
        kda: '13/7/3',
        kd: 1.9,
        dda: 36,
        hs: 16,
        adr: 125,
        acs: 196,
        timeAgo: '1d ago'
      },
      {
        map: 'Split',
        score: '13:11',
        rank: 'Immortal',
        rankNumber: 461,
        placement: '7th',
        kda: '11/19/17',
        kd: 0.6,
        dda: -31,
        hs: 13,
        adr: 100,
        acs: 161,
        timeAgo: '1d ago'
      },
      {
        map: 'Sunset',
        score: '9:13',
        rank: 'Immortal',
        rankNumber: 808,
        placement: '3rd',
        kda: '21/18/6',
        kd: 1.2,
        dda: 58,
        hs: 14,
        adr: 203,
        acs: 284,
        timeAgo: '1d ago'
      }
    ]
  },
  {
    name: '🇧🇩 Emberfall',
    fullName: 'Mahbub Hussain Rahul',
    role: 'Controller',
    nationality: '🇧🇩 Bangladesh',
    joinDate: '2025-11-03',
    birthDate: 'February 26, 2005',
    age: '20',
    status: 'Active',
    yearsActive: '2022- Present',
    team: 'KingsRock',
    totalWinnings: '0',
    image: 'https://cdn.discordapp.com/attachments/1351226252681412689/1351226312450117816/3b1ff846-9dd2-47d2-ac9b-356893ce012c.jfif?ex=67e22cd1&is=67e0db51&hm=4b4e5804b5ef78ae757b1d24df237fb669e38ccc72b82cdc7a6619722d3eabae&',
    gear: {
      mouse: 'Aorus m27',
      mousepad: 'FNATIC Gaming Mouse',
      mousepadSize: '700x300mm',
      monitor: 'Hikvision DS-D5024F2',
      refreshRate: '100 Hz',
      keyboard: 'Thunderbolt k98',
      headset: 'KZ EDX Pro',
      lastUpdated: '2025-24-03'
    },
    recentMatches: [
      {
        map: 'Haven',
        score: '13:7',
        rank: 'Immortal',
        rankNumber: 789,
        placement: '4th',
        kda: '15/9/4',
        kd: 1.7,
        dda: 74,
        hs: 25,
        adr: 161,
        acs: 208,
        timeAgo: '16h ago'
      },
      {
        map: 'Abyss',
        score: '13:2',
        rank: 'Immortal',
        rankNumber: 659,
        placement: '4th',
        kda: '13/7/3',
        kd: 1.9,
        dda: 36,
        hs: 16,
        adr: 125,
        acs: 196,
        timeAgo: '1d ago'
      },
      {
        map: 'Split',
        score: '13:11',
        rank: 'Immortal',
        rankNumber: 461,
        placement: '7th',
        kda: '11/19/17',
        kd: 0.6,
        dda: -31,
        hs: 13,
        adr: 100,
        acs: 161,
        timeAgo: '1d ago'
      },
      {
        map: 'Sunset',
        score: '9:13',
        rank: 'Immortal',
        rankNumber: 808,
        placement: '3rd',
        kda: '21/18/6',
        kd: 1.2,
        dda: 58,
        hs: 14,
        adr: 203,
        acs: 284,
        timeAgo: '1d ago'
      }
    ]
  },
  // {
  //   name: '🇧🇩 GreenAssassin',
  //   fullName: 'Mazbaul Hassan',
  //   role: 'Controller',
  //   nationality: '🇧🇩 Bangladesh',
  //   joinDate: '2024-12-09',
  //   birthDate: 'May 24, 2000',
  //   age: '24',
  //   status: 'Active',
  //   yearsActive: '2021- Present',
  //   team: 'KingsRock',
  //   totalWinnings: '$137,931',
  //   image: 'https://utfs.io/f/cq5eB4pNFkjUBwjVDQCzwMW1zNSbuiGZH346heAjmQ7yDOaP',
  //   gear: {
  //     mouse: 'Dareu A950 Pro',
  //     mousepad: 'FNATIC Gaming Mouse',
  //     mousepadSize: '700x300mm',
  //     monitor: 'ViewSonic VX2428 24',
  //     refreshRate: '180 Hz',
  //     keyboard: 'Weikav Sugar65',
  //     headset: 'KZ EDX Pro',
  //     lastUpdated: '2025-01-06'
  //   },
  //   recentMatches: [
  //     {
  //       map: 'Haven',
  //       score: '13:7',
  //       rank: 'Immortal',
  //       rankNumber: 789,
  //       placement: '4th',
  //       kda: '15/9/4',
  //       kd: 1.7,
  //       dda: 74,
  //       hs: 25,
  //       adr: 161,
  //       acs: 208,
  //       timeAgo: '16h ago'
  //     },
  //     {
  //       map: 'Abyss',
  //       score: '13:2',
  //       rank: 'Immortal',
  //       rankNumber: 659,
  //       placement: '4th',
  //       kda: '13/7/3',
  //       kd: 1.9,
  //       dda: 36,
  //       hs: 16,
  //       adr: 125,
  //       acs: 196,
  //       timeAgo: '1d ago'
  //     },
  //     {
  //       map: 'Split',
  //       score: '13:11',
  //       rank: 'Immortal',
  //       rankNumber: 461,
  //       placement: '7th',
  //       kda: '11/19/17',
  //       kd: 0.6,
  //       dda: -31,
  //       hs: 13,
  //       adr: 100,
  //       acs: 161,
  //       timeAgo: '1d ago'
  //     },
  //     {
  //       map: 'Sunset',
  //       score: '9:13',
  //       rank: 'Immortal',
  //       rankNumber: 808,
  //       placement: '3rd',
  //       kda: '21/18/6',
  //       kd: 1.2,
  //       dda: 58,
  //       hs: 14,
  //       adr: 203,
  //       acs: 284,
  //       timeAgo: '1d ago'
  //     }
  //   ]
  // },
];

export function CurrentRoster() {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePlayerClick = (player: any) => {
    setSelectedPlayer(player);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Roster</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Nationality</TableHead>
                <TableHead>Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roster.map((player) => (
                <TableRow
                  key={player.name}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handlePlayerClick(player)}
                >
                  <TableCell className="font-medium">
                    {player.name}{" "}
                    {player.crownIcon && (
                      <i className={player.crownIcon} style={{ fontSize: "16px", color: "#ff0000", marginLeft: "5px" }}></i>
                    )}
                  </TableCell>
                  <TableCell>{player.fullName}</TableCell>
                  <TableCell>{player.nationality}</TableCell>
                  <TableCell>{player.joinDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <PlayerDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        player={selectedPlayer}
      />
    </>
  );
}