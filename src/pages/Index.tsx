import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CareerPaths from "@/components/CareerPaths";
import RoadmapBuilder from "@/components/RoadmapBuilder";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <div id="careers">
          <CareerPaths />
        </div>
        <div id="roadmaps">
          <RoadmapBuilder />
        </div>
        <div id="features">
          <Features />
        </div>
        <CTA />
      </main>
    </div>
  );
};

export default Index;
