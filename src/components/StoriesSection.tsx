import { StoryCard } from "./StoryCard";
import mariaMakilingImage from "@/assets/story-maria-makiling.jpg";
import aswangImage from "@/assets/story-aswang.jpg";
import kapreImage from "@/assets/story-kapre.jpg";

const stories = [
  {
    title: "Maria Makiling",
    description: "The benevolent guardian spirit of Mount Makiling who protects the forest and helps lost travelers. A tale of love, nature, and the delicate balance between the human and spirit worlds.",
    image: mariaMakilingImage,
    duration: "12 min read",
    rating: 4.8,
    category: "Nature Spirits",
    featured: true
  },
  {
    title: "The Aswang Chronicles",
    description: "Venture into the mysterious world of shape-shifting creatures that roam the Philippine countryside under the cover of darkness.",
    image: aswangImage,
    duration: "8 min read",
    rating: 4.5,
    category: "Dark Tales"
  },
  {
    title: "Kapre's Wisdom",
    description: "Meet the mischievous tree spirits who guard ancient balete trees and learn the importance of respecting nature's sacred spaces.",
    image: kapreImage,
    duration: "6 min read",
    rating: 4.7,
    category: "Forest Guardians"
  },
  {
    title: "The White Lady's Journey",
    description: "A haunting tale of love lost and spirits that linger, teaching us about forgiveness and letting go of the past.",
    image: mariaMakilingImage, // Reusing for demo
    duration: "10 min read",
    rating: 4.6,
    category: "Spirit Stories"
  },
  {
    title: "Diwata's Gift",
    description: "Discover the fairy-like beings who bestow magical gifts upon those pure of heart in this enchanting tale of kindness rewarded.",
    image: kapreImage, // Reusing for demo
    duration: "7 min read",
    rating: 4.9,
    category: "Fairy Tales"
  }
];

export const StoriesSection = () => {
  return (
    <section id="stories" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Enchanted Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the rich tapestry of Filipino folklore, where ancient wisdom meets modern storytelling
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {stories.map((story, index) => (
            <StoryCard
              key={story.title}
              {...story}
              featured={index === 0}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="hero-button px-8 py-4 text-lg font-semibold rounded-lg">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
};