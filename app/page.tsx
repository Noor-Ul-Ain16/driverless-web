import Hero from "./components/hero";
import AnnouncementSection from "./components/announcement";
import CompetitionsSection from "./components/competitions";
import PreviousCompetitionsSection from "./components/previous-competitions";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <Hero />

      <AnnouncementSection />
      <CompetitionsSection />
      <PreviousCompetitionsSection />
    </div>
  );
}
