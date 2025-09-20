import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Star } from "lucide-react";

interface StoryCardProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  rating: number;
  category: string;
  featured?: boolean;
}

export const StoryCard = ({ 
  title, 
  description, 
  image, 
  duration, 
  rating, 
  category, 
  featured = false 
}: StoryCardProps) => {
  return (
    <Card 
      className={`story-card group relative overflow-hidden border-border/50 ${
        featured ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 lg:h-80 object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with Play Button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-all duration-300">
            <Play className="w-8 h-8 text-primary fill-current" />
          </div>
        </div>

        {/* Category Badge */}
        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
          {category}
        </Badge>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-primary fill-current" />
          <span className="text-sm font-medium text-white">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-bold text-foreground mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <span className="text-primary font-medium">Read More</span>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 ring-2 ring-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
    </Card>
  );
};