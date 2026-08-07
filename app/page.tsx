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
