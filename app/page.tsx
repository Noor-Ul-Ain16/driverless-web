import Hero from "./components/hero";
import AnnouncementSection from "./components/announcement";
import CompetitionsSection from "./components/competitions";
import PreviousCompetitionsSection from "./components/previous-competitions";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <AnnouncementSection />

      <CompetitionsSection />

      <PreviousCompetitionsSection />
    </main>
  );
}

// import LandingHero from './components/LandingHero'
// import AutonomyStats from './components/AutonomyStats'
// import TechnologySection from './components/TechnologySection'
// import MediaSection from './components/MediaSection'
// import GPSLocalization from './components/GPSLocalization'
// import NewsLink from './components/NewsLink'
// import MeetTheTeam from './components/MeetTheTeam'

// export default function HomePage() {
//   return (
//     <main className="w-full bg-white">

//       <LandingHero />

//       <AutonomyStats />

//       <TechnologySection />

//       <MediaSection />

//       <GPSLocalization />

//       <NewsLink />

//       <MeetTheTeam />

//     </main>
//   )
// }