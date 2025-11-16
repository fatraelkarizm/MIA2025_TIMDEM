import { MapPin, Calendar } from "lucide-react";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
}

export function EventCard({ image, title, date, location }: EventCardProps) {
  return (
    <div className="w-[237px] h-[242px] rounded-2xl border border-brand-teal shadow-sm overflow-hidden bg-white flex flex-col">
      <div className="relative h-[130px] shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 p-4 flex flex-col bg-brand-teal text-white">
        <h3 className="font-bold text-base leading-normal mb-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 text-xs mb-1">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-1 text-xs mb-3">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>
        
        <button className="w-full py-2 px-4 rounded-[50px] bg-white text-brand-teal text-xs font-bold hover:bg-white/90 transition-colors">
          Lihat Detail Event
        </button>
      </div>
    </div>
  );
}
