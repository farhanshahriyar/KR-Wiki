import { ResultsHeader } from './ResultsHeader';
import { MatchResult } from './MatchResult';

const recentMatches = [
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
];

export function PlayerResults() {
  return (
    <div className="space-y-4">
      <p className="text-center text-muted-foreground mt-10">Under Construction...</p>
      {/* <ResultsHeader 
        kd={1.7}
        dda={74}
        hs={25}
        adr={161}
        acs={208}
      /> */}
      <div className="space-y-2">
        {/* {recentMatches.map((match, index) => (
          <MatchResult 
            key={index}
            {...match}
          />
        ))} */}
      </div>
    </div>
  );
}