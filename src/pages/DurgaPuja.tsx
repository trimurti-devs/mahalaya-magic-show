import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import durgaPujaPandalImage from "@/assets/durga-puja-pandal.jpg";
import durgaDashamiImage from "@/assets/durga-dashami.jpg";

const durgaPujaDays = [
  {
    day: "Shashthi",
    date: "Day 1",
    title: "The Divine Arrival",
    description: "Bodhon and Amantran - Goddess Durga is welcomed with elaborate rituals and the beating of dhak."
  },
  {
    day: "Saptami",
    date: "Day 2", 
    title: "Nabapatrika Puja",
    description: "Nine plants representing nine forms of Durga are worshipped, symbolizing the divine feminine energy."
  },
  {
    day: "Ashtami",
    date: "Day 3",
    title: "The Grand Worship",
    description: "The most important day with elaborate pujas, cultural programs, and the famous 'Anjali' offerings."
  },
  {
    day: "Navami",
    date: "Day 4", 
    title: "Maha Navami",
    description: "Grand celebrations continue with special pujas and the beginning of cultural festivities."
  },
  {
    day: "Dashami",
    date: "Day 5",
    title: "The Emotional Farewell",
    description: "Sindoor Khela, final prayers, and the immersion ceremony as Ma Durga returns to Kailash."
  }
];

const DurgaPuja = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Durga Puja
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The grandest celebration of divine feminine power - a ten-day festival of devotion, culture, and community
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={durgaPujaPandalImage} 
                alt="Durga Puja Pandal" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* Overview */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-foreground">The Festival of Festivals</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Durga Puja is not just a religious festival; it's a celebration of life, culture, and community. 
                For five days, the entire Bengali community comes together to worship the divine mother and celebrate 
                her victory over evil, represented by the buffalo demon Mahishasura.
              </p>
              <p className="mb-4">
                During these days, elaborate pandals (temporary structures) are built, magnificent clay idols are crafted, 
                and the entire community participates in rituals, cultural programs, and festivities that blend 
                spirituality with artistry.
              </p>
            </div>
          </section>

          {/* The Five Sacred Days */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-foreground">The Five Sacred Days</h2>
            <div className="space-y-6">
              {durgaPujaDays.map((day, index) => (
                <div key={day.day} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">{day.date}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-primary">{day.day}</h3>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">{day.title}</h4>
                      <p className="text-muted-foreground">{day.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cultural Significance */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Cultural Significance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Art & Culture</h3>
                <p className="text-muted-foreground">
                  Pandal art, idol craftsmanship, and cultural performances showcase Bengali artistic heritage.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Community Unity</h3>
                <p className="text-muted-foreground">
                  People from all backgrounds come together, transcending social and economic barriers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Global Celebration</h3>
                <p className="text-muted-foreground">
                  Celebrated worldwide by Bengali diaspora, making it a truly global festival.
                </p>
              </div>
            </div>
          </section>

          {/* The Emotional Journey */}
          <section className="animate-fade-in bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">The Emotional Journey</h2>
                <p className="text-muted-foreground mb-4">
                  Durga Puja is an emotional rollercoaster that takes devotees from anticipation and joy to the 
                  bittersweet farewell on Dashami. The festival creates lifelong memories and strengthens 
                  bonds within the community.
                </p>
                <p className="text-muted-foreground mb-6">
                  From the first beat of the dhak to the final immersion ceremony, every moment is filled 
                  with devotion, celebration, and the deep cultural connection that defines Bengali identity.
                </p>
                <Button className="hero-button">
                  Explore Traditions
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={durgaDashamiImage} 
                  alt="Durga Dashami celebration" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DurgaPuja;