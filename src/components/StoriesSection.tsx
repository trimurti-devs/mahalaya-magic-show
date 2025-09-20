import { StoryCard } from "./StoryCard";
import mahishasuraBattleImage from "@/assets/mahishasura-battle.jpg";
import mahalayaMorningImage from "@/assets/mahalaya-morning.jpg";
import durgaPujaPandalImage from "@/assets/durga-puja-pandal.jpg";
import durgaDashamiImage from "@/assets/durga-dashami.jpg";

const stories = [
  {
    title: "The Mahishasura Mardini",
    description: "The epic battle between Goddess Durga and the buffalo demon Mahishasura. Witness the divine mother's fierce form as she vanquishes evil and restores dharma to the world.",
    image: mahishasuraBattleImage,
    duration: "15 min read",
    rating: 4.9,
    category: "Divine Battles",
    featured: true
  },
  {
    title: "Mahalaya: The Sacred Dawn",
    description: "Experience the significance of Mahalaya morning when devotees invoke Goddess Durga's presence on Earth. The tradition of Mahishasura Mardini and its deep spiritual meaning.",
    image: mahalayaMorningImage,
    duration: "10 min read",
    rating: 4.8,
    category: "Sacred Traditions"
  },
  {
    title: "Durga Puja: The Divine Celebration",
    description: "Journey through the magnificent ten-day festival celebrating the victory of good over evil. From Shashthi to Dashami, every moment of divine celebration.",
    image: durgaPujaPandalImage,
    duration: "12 min read",
    rating: 4.9,
    category: "Festivals"
  },
  {
    title: "Dashami: The Emotional Farewell",
    description: "The bittersweet moment of Durga's return to Kailash. Understanding the emotions, rituals, and spiritual significance of the immersion ceremony.",
    image: durgaDashamiImage,
    duration: "8 min read",
    rating: 4.7,
    category: "Rituals"
  },
  {
    title: "The Nine Forms of Durga",
    description: "Explore the Navadurga - nine divine manifestations of the goddess, each with unique powers and significance during the Navratri celebration.",
    image: durgaPujaPandalImage, // Reusing for demo
    duration: "14 min read",
    rating: 4.8,
    category: "Divine Forms"
  }
];

export const StoriesSection = () => {
  return (
    <section id="stories" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sacred Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the divine tales of Goddess Durga, where ancient wisdom meets eternal devotion
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
            Explore All Stories
          </button>
        </div>
      </div>
    </section>
  );
};