import { TeamHeader } from '@/components/TeamHeader';
import { TeamOverview } from '@/components/TeamOverview';
import { Overview } from '@/components/Overview';
import { UpcomingEvents } from '@/components/UpcomingEvents';
import { HistoryTimeline } from '@/components/History/HistoryTimeline';
import { CurrentRoster } from '@/components/CurrentRoster';
// import { Achievements } from '@/components/Achievements';
import { Organization } from '@/components/Organization';
import { Results } from '@/components/Results';
import { ThemeToggle } from '@/components/ThemeToggle';
import FormerRoster from './components/FormerRoster';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <TeamHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <TeamOverview />
          </div>
          <div className="md:col-span-2">
            <Overview />
            <UpcomingEvents />
            <HistoryTimeline />
            <CurrentRoster />
            <FormerRoster/>
            {/* <Achievements /> */}
            <Organization />
            <Results />
          </div>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;