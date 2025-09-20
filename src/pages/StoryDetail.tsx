import { useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, ArrowLeft } from "lucide-react";
import mahishasuraBattleImage from "@/assets/mahishasura-battle.jpg";
import mahalayaMorningImage from "@/assets/mahalaya-morning.jpg";
import durgaPujaPandalImage from "@/assets/durga-puja-pandal.jpg";
import durgaDashamiImage from "@/assets/durga-dashami.jpg";

const stories = {
  "mahishasura-mardini": {
    title: "The Mahishasura Mardini",
    description: "The epic battle between Goddess Durga and the buffalo demon Mahishasura",
    image: mahishasuraBattleImage,
    duration: "15 min read",
    rating: 4.9,
    category: "Divine Battles",
    content: [
      {
        subtitle: "The Rise of Mahishasura",
        text: "In the ancient times, when the cosmos trembled under the weight of evil, there arose a demon of unparalleled might - Mahishasura, the buffalo demon. Born from the union of demon Rambha and a buffalo, he possessed the unique power to shift between his demonic human form and that of a mighty buffalo. Through severe penance, he had pleased Lord Brahma and obtained a boon that no man or god could kill him."
      },
      {
        subtitle: "The Defeat of the Gods",
        text: "Drunk with power and his seemingly invincible boon, Mahishasura launched a fierce war against the gods. His demon army, vast and terrifying, swept through the heavens like a dark storm. The gods, led by Indra, fought valiantly but were no match for the buffalo demon's might. One by one, they fell, and Mahishasura claimed the heavens as his own, driving the gods into hiding."
      },
      {
        subtitle: "The Divine Council",
        text: "In their darkest hour, the defeated gods approached the holy trinity - Brahma, Vishnu, and Shiva. They narrated their plight and the terror that Mahishasura had unleashed upon the three worlds. The trinity realized that a great evil had been unleashed, one that could only be defeated by the combined power of all divine forces. They decided to create a supreme goddess who would embody the collective power of all gods."
      },
      {
        subtitle: "The Birth of Durga",
        text: "From the combined radiance and power of all the gods emerged a magnificent goddess - Durga, the invincible one. Her face glowed with the light of Shiva, her arms were formed from Vishnu's radiance, her feet from Brahma's brilliance. Each god contributed their divine energy to create this supreme shakti. She was beautiful beyond description, yet fierce in her divine wrath against evil."
      },
      {
        subtitle: "The Divine Arsenal",
        text: "Each god blessed Durga with their most powerful weapons. Shiva gave her his trident, Vishnu his discus, Indra his thunderbolt, and Brahma his rosary. Surya gifted her rays for her hair, Vishwakarma provided her with divine ornaments, and Himavat, the king of mountains, gave her a lion as her mount. Thus armed with the most powerful weapons in the universe, she was ready to face the demon."
      },
      {
        subtitle: "The Great Battle",
        text: "The earth shook and the heavens thundered as Durga, riding her mighty lion, descended to face Mahishasura. The demon, seeing her divine beauty, was first enchanted and proposed marriage. But when Durga challenged him to battle, his rage knew no bounds. The battle that ensued was cosmic in scale - mountains crumbled, oceans roared, and the very fabric of creation trembled. For nine days and nights, the battle raged with neither gaining a decisive advantage."
      },
      {
        subtitle: "The Final Victory",
        text: "On the tenth day, as Mahishasura took his mighty buffalo form for the final assault, Durga summoned all her divine power. With her trident raised high, she leaped upon the demon buffalo and pierced his heart. As the demon emerged from the buffalo's body in his original form, thinking to escape, Durga's sword swiftly beheaded him. The universe erupted in joy as the gods showered flowers from heaven, and dharma was restored to the world. Thus, Mahishasura Mardini - the slayer of Mahishasura - established herself as the supreme protector of the righteous."
      }
    ]
  },
  "mahalaya-dawn": {
    title: "Mahalaya: The Sacred Dawn",
    description: "The significance of Mahalaya morning and the divine invocation",
    image: mahalayaMorningImage,
    duration: "10 min read",
    rating: 4.8,
    category: "Sacred Traditions",
    content: [
      {
        subtitle: "The Auspicious Beginning",
        text: "Mahalaya marks the end of Pitru Paksha and the beginning of Devi Paksha, the most sacred period in the Hindu calendar dedicated to the Divine Mother. This day falls on the new moon day of Ashwin month and signifies the formal invitation to Goddess Durga to descend from her heavenly abode in Kailash to Earth, where her children await her arrival with devotion and love."
      },
      {
        subtitle: "The Sacred Hour",
        text: "At the break of dawn, when the first rays of sun pierce through the darkness, millions of devotees across Bengal and beyond wake up to participate in this divine communion. The air fills with the melodious chanting of 'Mahishasura Mardini', the sacred hymn that recounts the glorious victory of Goddess Durga over the buffalo demon. This tradition, which began in 1931 with All India Radio, has become the soul of Bengali culture."
      },
      {
        subtitle: "The Voice That Awakens Devotion",
        text: "The legendary voice of Birendra Krishna Bhadra, who first recited the Mahishasura Mardini on radio, created magic that still resonates in every Bengali heart. His powerful narration, combined with the divine music composed by Pankaj Kumar Mullick, transforms the early morning air into a celestial atmosphere. Even today, decades later, his voice continues to awaken the goddess in millions of hearts."
      },
      {
        subtitle: "Tarpan - The Sacred Offering",
        text: "On this sacred day, devotees gather at the ghats of holy rivers, especially the Ganges, to perform Tarpan - offering sacred water to their ancestors. Dressed in traditional attire, they stand waist-deep in the holy waters, cupping the sacred river water in their palms, and offer it to their departed souls while chanting ancient mantras. This ritual connects the present with the past, honoring those who came before while preparing for the divine celebration ahead."
      },
      {
        subtitle: "Chokkhudaan - The Divine Awakening",
        text: "Perhaps the most mystical moment of Mahalaya is the Chokkhudaan ceremony - the painting of Goddess Durga's eyes on the clay idols. This final touch is believed to infuse life into the divine image. The moment the artist's brush completes the eyes, the goddess is said to awaken and look upon her devotees with compassion and love. It's a moment when the divine transcends the material, and devotees feel the actual presence of the mother goddess."
      },
      {
        subtitle: "The Emotional Connect",
        text: "For Bengalis worldwide, Mahalaya is more than just a religious observance - it's an emotional homecoming. The familiar sound of the dhak, the fragrance of shiuli flowers, and the rhythmic chanting create an atmosphere that instantly transports every Bengali heart to their roots. It's a day when geographical boundaries dissolve, and the entire Bengali community, scattered across the globe, feels united in devotion and cultural pride."
      }
    ]
  },
  "durga-puja-celebration": {
    title: "Durga Puja: The Divine Celebration",
    description: "Journey through the magnificent ten-day festival",
    image: durgaPujaPandalImage,
    duration: "12 min read",
    rating: 4.9,
    category: "Festivals",
    content: [
      {
        subtitle: "The Festival of Joy",
        text: "Durga Puja is not merely a religious festival; it's a celebration of life, art, culture, and community. For five glorious days, the entire Bengali community, regardless of age, religion, or social status, comes together to celebrate the victory of good over evil. The festival transforms cities and villages into vibrant, living galleries where art, devotion, and humanity merge into one magnificent celebration."
      },
      {
        subtitle: "Shashthi - The Divine Arrival",
        text: "The first day of Durga Puja begins with Bodhon and Amantran - the ritual awakening and invitation of the goddess. As the sun rises, the sound of conch shells and dhak fills the air, announcing the arrival of the divine mother. Devotees gather in pandals, their hearts filled with anticipation and joy. The goddess, who has been sleeping in the form of clay, awakens to bless her children. The entire atmosphere transforms with divine energy and festive fervor."
      },
      {
        subtitle: "Saptami - The Sacred Invocation",
        text: "On Saptami, the ritual of Nabapatrika Puja takes place, where nine plants representing different forms of the goddess are worshipped. These plants symbolize the divine feminine energy in nature and the goddess's power to nurture and sustain life. The day is filled with elaborate rituals, cultural programs, and the joyous participation of devotees who offer their prayers and seek blessings for prosperity and happiness."
      },
      {
        subtitle: "Ashtami - The Grand Celebration",
        text: "Ashtami is considered the most auspicious day of Durga Puja. The day begins with the sacred Pushpanjali, where hundreds of devotees gather to offer flowers to the goddess in unison. The synchronized chanting of mantras creates a powerful spiritual energy that fills every heart with devotion. Evening brings elaborate cultural programs - dance, music, drama, and poetry that celebrate Bengali arts and literature."
      },
      {
        subtitle: "Navami - The Continued Devotion",
        text: "Maha Navami continues the celebration with great fervor. Special pujas are performed, and the community feast brings everyone together, sharing the blessed food (bhog) prepared with devotion. The day strengthens the bonds of community and reinforces the values of sharing, caring, and collective joy that Durga Puja embodies."
      },
      {
        subtitle: "Dashami - The Emotional Farewell",
        text: "The final day, Dashami, brings mixed emotions - joy for the celebration and sadness for the departure. The day begins with Sindoor Khela, where married women apply vermillion to the goddess and to each other, praying for marital bliss and longevity. As evening approaches, the immersion procession begins. Devotees carry the beloved goddess to rivers and ponds, where she will return to her heavenly abode, promising to return next year to bless her children once again."
      }
    ]
  },
  "dashami-farewell": {
    title: "Dashami: The Emotional Farewell",
    description: "The bittersweet moment of Durga's return to Kailash",
    image: durgaDashamiImage,
    duration: "8 min read",
    rating: 4.7,
    category: "Rituals",
    content: [
      {
        subtitle: "The Day of Mixed Emotions",
        text: "Dashami, the final day of Durga Puja, brings a complex mix of emotions that every Bengali heart experiences. While there's celebration for the goddess's victory and the blessed days spent in her divine presence, there's an overwhelming sadness knowing that the mother is returning to her heavenly abode in Kailash, leaving her children behind for another year."
      },
      {
        subtitle: "Sindoor Khela - The Joyous Tradition",
        text: "The day begins with one of the most beautiful traditions of Bengali culture - Sindoor Khela. Married women, dressed in traditional red and white sarees, gather around the goddess with vermillion (sindoor) in their hands. They first apply sindoor to the feet of Goddess Durga, seeking her blessings for their married life, and then playfully apply it to each other's faces, filling the atmosphere with laughter, joy, and sisterhood."
      },
      {
        subtitle: "The Final Prayers",
        text: "As the day progresses, devotees offer their final prayers to the goddess. The air is filled with the sound of conch shells, dhak, and devotional songs. Families gather before the deity, offering flowers, sweets, and their heartfelt gratitude for the blessings received. Children touch the feet of elders, seeking blessings, while adults pray for peace, prosperity, and the well-being of their loved ones."
      },
      {
        subtitle: "The Immersion Procession",
        text: "As evening approaches, the most emotional part of Dashami begins - the Bisarjan or immersion procession. The goddess, adorned with flowers and draped in beautiful fabrics, is carefully lifted from her throne and placed on decorated trucks or carried on shoulders by devoted volunteers. The procession moves through the streets with thousands of people chanting 'Asche Bochor Abar Hobe' (It will happen again next year), their voices echoing the collective hope and faith of the community."
      },
      {
        subtitle: "The Sacred Immersion",
        text: "At the riverbank or pond, the final ritual takes place. As the goddess is slowly immersed in the holy waters, devotees believe she is returning to Kailash to rejoin Lord Shiva. The moment when the beloved deity disappears beneath the water's surface is profoundly moving - tears flow freely as people bid farewell to their divine mother, knowing that this parting, though temporary, marks the end of another blessed Durga Puja."
      },
      {
        subtitle: "The Promise of Return",
        text: "Even as hearts are heavy with separation, there's an unshakeable faith that echoes in every prayer - 'Ma, abar esho' (Mother, come again). This is not just a wish but a certainty that gives strength to every devotee. The goddess may return to her heavenly abode, but she leaves behind her blessings, her love, and the promise that she will return next year to embrace her children once more. This eternal cycle of departure and return forms the spiritual heart of Bengali culture and keeps the flame of devotion burning bright throughout the year."
      }
    ]
  },
  "nine-forms-durga": {
    title: "The Nine Forms of Durga",
    description: "Explore the Navadurga - nine divine manifestations",
    image: durgaPujaPandalImage,
    duration: "14 min read",
    rating: 4.8,
    category: "Divine Forms",
    content: [
      {
        subtitle: "The Divine Navadurga",
        text: "The nine forms of Goddess Durga, known as Navadurga, represent the divine feminine energy in its various manifestations. Each form embodies specific qualities and powers, guiding devotees through different aspects of spiritual journey. During Navratri, these nine forms are worshipped consecutively, each teaching us valuable lessons about life, dharma, and devotion."
      },
      {
        subtitle: "Shailaputri - The Mountain's Daughter",
        text: "The first form, Shailaputri, is the daughter of the mountain king Himavan. She represents the root chakra and symbolizes the foundation of spiritual journey. Riding a bull and holding a trident and lotus, she embodies strength, stability, and the beginning of divine consciousness. Devotees worship her on the first day of Navratri, seeking her blessings for a strong foundation in their spiritual path."
      },
      {
        subtitle: "Brahmacharini - The Devoted Ascetic",
        text: "Brahmacharini represents penance, devotion, and self-discipline. This form of the goddess is depicted as walking barefoot, holding a rosary and water pot, symbolizing her dedication to spiritual practices. She teaches us the importance of tapasya (penance) and unwavering devotion in achieving our spiritual goals. Her worship brings peace, prosperity, and spiritual enlightenment."
      },
      {
        subtitle: "Chandraghanta - The Bell of Peace",
        text: "The third form, Chandraghanta, is depicted with a crescent moon on her forehead and a bell-shaped ornament. She rides a tiger and carries various weapons, representing both grace and fierce protection. This form symbolizes bravery and the goddess's readiness to fight evil. She protects devotees from negative energies and bestows courage and strength upon them."
      },
      {
        subtitle: "Kushmanda - The Creator of Universe",
        text: "Kushmanda is believed to be the creator of the universe through her divine smile. Her radiance is said to give energy to the sun itself. With eight arms holding various weapons and a rosary, she sits on a lion, symbolizing the power of creation and the divine light that illuminates the cosmos. Devotees worship her for health, wealth, and spiritual illumination."
      },
      {
        subtitle: "Skandamata - The Mother of Skanda",
        text: "The fifth form, Skandamata, is the mother of Lord Kartikeya (Skanda). Depicted with four arms, holding her son and a lotus, she rides a lion. This form represents motherly love, care, and protection. She teaches us about unconditional love and the nurturing aspect of the divine feminine. Her blessings bring prosperity, wisdom, and spiritual growth."
      },
      {
        subtitle: "Katyayani - The Warrior Goddess",
        text: "Katyayani is the fierce warrior form of the goddess, born from the collective anger of the gods to defeat Mahishasura. With four arms carrying a sword and lotus, riding a lion, she represents courage, strength, and the victory of good over evil. She is especially worshipped by unmarried women seeking an ideal partner and by devotees seeking protection from enemies."
      },
      {
        subtitle: "Kalaratri - The Dark Night",
        text: "The seventh form, Kalaratri, is the most fearsome aspect of Durga. With a dark complexion, disheveled hair, and riding a donkey, she destroys ignorance and evil. Despite her terrifying appearance, she protects devotees from fear and grants them fearlessness. This form teaches us that darkness is necessary to appreciate light, and destruction precedes creation."
      },
      {
        subtitle: "Mahagauri - The Great White One",
        text: "Mahagauri represents purity, peace, and compassion. Depicted with a white complexion, wearing white clothes, and riding a white bull, she holds a trident and drum. This form symbolizes the cleansing of sins and the attainment of spiritual purity. Devotees worship her to remove obstacles and achieve peace and prosperity in life."
      },
      {
        subtitle: "Siddhidatri - The Granter of Wishes",
        text: "The ninth and final form, Siddhidatri, is the granter of supernatural powers and spiritual achievements. Sitting on a lotus, she has four arms and is surrounded by divine beings seeking her blessings. She represents the completion of spiritual journey and the attainment of all siddhis (supernatural powers). Even Lord Shiva worshipped her to attain his Ardhanarishvara form, showing her supreme divine status."
      }
    ]
  }
};

const StoryDetail = () => {
  const { storyId } = useParams();
  const story = storyId ? stories[storyId as keyof typeof stories] : null;

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button 
                variant="ghost" 
                className="mb-4"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Stories
              </Button>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">{story.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {story.duration}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {story.rating}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {story.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {story.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {story.content.map((section, index) => (
                <div key={index} className="mb-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">{section.subtitle}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-card p-8 rounded-lg border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Continue Your Spiritual Journey</h2>
                <p className="text-muted-foreground mb-6">
                  Explore more sacred stories and deepen your understanding of divine traditions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="hero-button">
                    Read More Stories
                  </Button>
                  <Button size="lg" variant="outline">
                    Explore Traditions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StoryDetail;