import { Navigation } from "@/components/Navigation";
import { StoryCard } from "@/components/StoryCard";
import mahishasuraBattleImage from "@/assets/mahishasura-battle.jpg";
import mahalayaMorningImage from "@/assets/mahalaya-morning.jpg";
import durgaPujaPandalImage from "@/assets/durga-puja-pandal.jpg";
import durgaDashamiImage from "@/assets/durga-dashami.jpg";

const stories = [
  {
    id: "mahishasura-mardini",
    title: "The Mahishasura Mardini",
    description: "The epic battle between Goddess Durga and the buffalo demon Mahishasura. Witness the divine mother's fierce form as she vanquishes evil and restores dharma to the world.",
    image: mahishasuraBattleImage,
    duration: "15 min read",
    rating: 4.9,
    category: "Divine Battles",
    featured: true
  },
  {
    id: "mahalaya-dawn",
    title: "Mahalaya: The Sacred Dawn",
    description: "Experience the significance of Mahalaya morning when devotees invoke Goddess Durga's presence on Earth. The tradition of Mahishasura Mardini and its deep spiritual meaning.",
    image: mahalayaMorningImage,
    duration: "10 min read",
    rating: 4.8,
    category: "Sacred Traditions"
  },
  {
    id: "durga-puja-celebration",
    title: "Durga Puja: The Divine Celebration",
    description: "Journey through the magnificent ten-day festival celebrating the victory of good over evil. From Shashthi to Dashami, every moment of divine celebration.",
    image: durgaPujaPandalImage,
    duration: "12 min read",
    rating: 4.9,
    category: "Festivals"
  },
  {
    id: "dashami-farewell",
    title: "Dashami: The Emotional Farewell",
    description: "The bittersweet moment of Durga's return to Kailash. Understanding the emotions, rituals, and spiritual significance of the immersion ceremony.",
    image: durgaDashamiImage,
    duration: "8 min read",
    rating: 4.7,
    category: "Rituals"
  },
  {
    id: "nine-forms-durga",
    title: "The Nine Forms of Durga",
    description: "Explore the Navadurga - nine divine manifestations of the goddess, each with unique powers and significance during the Navratri celebration.",
    image: durgaPujaPandalImage,
    duration: "14 min read",
    rating: 4.8,
    category: "Divine Forms"
  }
];

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sacred Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the divine tales of Goddess Durga and immerse yourself in the eternal wisdom of our sacred traditions
            </p>
          </div>

          {/* Featured Story */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Story</h2>
            <div className="max-w-4xl mx-auto">
              <StoryCard {...stories[0]} featured={true} />
            </div>
          </div>

          {/* All Stories Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-8 text-foreground">All Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
              {stories.map((story) => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stories;