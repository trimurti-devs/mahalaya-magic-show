import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StoriesSection } from "@/components/StoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StoriesSection />
    </div>
  );
};

export default Index;