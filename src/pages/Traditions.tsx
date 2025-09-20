import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import durgaPujaPandalImage from "@/assets/durga-puja-pandal.jpg";

const traditions = [
  {
    title: "Dhak - The Sacred Drums",
    description: "The rhythmic beats of dhak drums create an enchanting atmosphere that resonates through every Bengali heart during Durga Puja.",
    icon: "🥁"
  },
  {
    title: "Sindoor Khela",
    description: "The beautiful tradition where married women apply sindoor (vermillion) to Goddess Durga and to each other on the final day.",
    icon: "🌺"
  },
  {
    title: "Pandal Hopping",
    description: "The joyous tradition of visiting different pandals (temporary structures) to witness unique themes and artistic creations.",
    icon: "🚶‍♀️"
  },
  {
    title: "Pushpanjali",
    description: "The morning ritual where devotees offer flowers to the goddess while chanting sacred mantras in unison.",
    icon: "🌸"
  },
  {
    title: "Cultural Programs",
    description: "Evening cultural performances including dance, music, and drama that celebrate Bengali arts and literature.",
    icon: "🎭"
  },
  {
    title: "Bhog Distribution",
    description: "Sacred food offerings (bhog) prepared with devotion and distributed among all devotees, symbolizing divine blessings.",
    icon: "🍛"
  }
];

const foods = [
  {
    name: "Khichuri",
    description: "A simple yet sacred rice and lentil dish prepared as bhog during Durga Puja."
  },
  {
    name: "Payesh",
    description: "Sweet rice pudding cooked with milk and jaggery, offered to the goddess."
  },
  {
    name: "Labra",
    description: "Mixed vegetable curry prepared without onion and garlic, following puja traditions."
  },
  {
    name: "Fish Curry",
    description: "Traditional Bengali fish preparation, an integral part of the puja feast."
  }
];

const Traditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sacred Traditions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the rich tapestry of Bengali customs and rituals that make Durga Puja a truly magical experience
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* Main Traditions */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Time-Honored Customs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {traditions.map((tradition, index) => (
                <div key={tradition.title} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{tradition.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{tradition.title}</h3>
                  <p className="text-muted-foreground">{tradition.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Art of Pandal Making */}
          <section className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">The Art of Pandal Making</h2>
                <p className="text-muted-foreground mb-4">
                  Pandal construction is a year-round endeavor that brings together artists, craftsmen, and volunteers. 
                  Each pandal tells a unique story through its theme, often addressing social issues or celebrating 
                  cultural heritage.
                </p>
                <p className="text-muted-foreground mb-4">
                  From traditional bamboo structures to modern architectural marvels, pandals have evolved into 
                  magnificent art installations that attract millions of visitors.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">Months of planning and preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">Community collaboration and funding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">Artistic innovation and cultural themes</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={durgaPujaPandalImage} 
                  alt="Beautiful Durga Puja Pandal" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Traditional Foods */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Sacred Foods & Bhog</h2>
            <div className="bg-card p-8 rounded-lg">
              <p className="text-muted-foreground mb-8">
                Food plays a central role in Durga Puja, not just as nourishment but as a form of devotion. 
                The preparation and distribution of bhog (sacred food) is considered a blessed activity.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {foods.map((food) => (
                  <div key={food.name} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🍽️</span>
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{food.name}</h3>
                    <p className="text-sm text-muted-foreground">{food.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Modern Adaptations */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Tradition Meets Modernity</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3 text-primary">Digital Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Virtual pandal tours, mobile apps for puja updates, and social media celebrations 
                  have made the festival accessible globally.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3 text-primary">Eco-Friendly Practices</h3>
                <p className="text-muted-foreground text-sm">
                  Modern celebrations increasingly focus on sustainable materials, 
                  natural dyes, and eco-friendly idol immersion practices.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3 text-primary">Global Celebrations</h3>
                <p className="text-muted-foreground text-sm">
                  Bengali communities worldwide organize pujas, keeping traditions alive 
                  across continents and cultures.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Experience These Sacred Traditions</h2>
            <p className="text-muted-foreground mb-8">
              Join us in celebrating the rich cultural heritage that makes Durga Puja truly special
            </p>
            <Button size="lg" className="hero-button px-8 py-4 text-lg">
              Explore Stories
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Traditions;