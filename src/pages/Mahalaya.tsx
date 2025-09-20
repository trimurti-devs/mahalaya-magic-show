import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import mahalayaMorningImage from "@/assets/mahalaya-morning.jpg";

const Mahalaya = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mahalaya
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The sacred dawn that marks the beginning of Devi Paksha and invokes the divine presence of Goddess Durga
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={mahalayaMorningImage} 
                alt="Mahalaya morning rituals" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* What is Mahalaya */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What is Mahalaya?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Mahalaya marks the end of Pitru Paksha and the beginning of Devi Paksha, the most auspicious period in the Bengali calendar. 
                It falls on the new moon day (Amavasya) of the month of Ashwin, exactly seven days before Durga Puja begins.
              </p>
              <p className="mb-4">
                On this sacred day, devotees wake up at dawn to listen to the legendary "Mahishasura Mardini" radio program, 
                which recounts the story of Goddess Durga's victory over the buffalo demon Mahishasura through powerful chants, 
                music, and narration.
              </p>
            </div>
          </section>

          {/* Significance */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Spiritual Significance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Divine Invocation</h3>
                <p className="text-muted-foreground">
                  Mahalaya is when the divine mother is formally invoked to descend to Earth. 
                  The sacred chants awaken her divine consciousness in the clay idols.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Ancestral Reverence</h3>
                <p className="text-muted-foreground">
                  It's also the day when devotees offer prayers to their ancestors (Pitrs), 
                  seeking their blessings for the upcoming festival.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Victory of Good</h3>
                <p className="text-muted-foreground">
                  The recitation of Chandi Path and Mahishasura Mardini reinforces the eternal 
                  triumph of dharma (righteousness) over adharma (evil).
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Cultural Unity</h3>
                <p className="text-muted-foreground">
                  Millions of Bengalis worldwide tune in together, creating a collective 
                  spiritual experience that transcends geographical boundaries.
                </p>
              </div>
            </div>
          </section>

          {/* Traditions */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Mahalaya Traditions</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Early Morning Rituals</h3>
                  <p className="text-muted-foreground">
                    Devotees wake up before dawn (around 4 AM) to listen to the Mahishasura Mardini program, 
                    traditionally broadcast on All India Radio since 1931.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Tarpan Ceremony</h3>
                  <p className="text-muted-foreground">
                    Sacred water offerings (tarpan) are made to ancestors at holy rivers, 
                    particularly the Ganges, seeking their blessings and liberation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Eye-Painting Ceremony</h3>
                  <p className="text-muted-foreground">
                    The final touch - painting the eyes of Durga idols (Chokkhudaan) - 
                    is performed on this day, believed to infuse life into the divine image.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Experience the Divine</h2>
            <p className="text-muted-foreground mb-8">
              Join millions in this sacred tradition and feel the divine presence of Ma Durga
            </p>
            <Button size="lg" className="hero-button px-8 py-4 text-lg">
              Listen to Chandi Path
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Mahalaya;