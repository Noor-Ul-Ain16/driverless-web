import Hero from "./components/hero";
import CuurentProgram_LandingpageSection from "./components/currentprogram_landingpage";
import Technology_landingpageSection from "./components/technology_landingpage";
import News_and_Meet_theteamSection from "./components/news_section_and_meet-the-team_landingpage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <CuurentProgram_LandingpageSection />

      <Technology_landingpageSection />

      <News_and_Meet_theteamSection />
    </main>
  );
}
