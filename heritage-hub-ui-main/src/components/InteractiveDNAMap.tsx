import { useState } from "react";
import { MapPin } from "lucide-react";

interface Region {
  id: string;
  name: string;
  percentage: number;
  color: string;
  cx: number;
  cy: number;
  description: string;
}

const regions: Region[] = [
  { id: "western-europe", name: "Western European", percentage: 42, color: "#3B82F6", cx: 150, cy: 120, description: "France, Germany, Netherlands, Belgium" },
  { id: "eastern-europe", name: "Eastern European", percentage: 28, color: "#8B5CF6", cx: 200, cy: 100, description: "Poland, Ukraine, Russia, Czech Republic" },
  { id: "scandinavia", name: "Scandinavian", percentage: 15, color: "#06B6D4", cx: 170, cy: 60, description: "Norway, Sweden, Denmark, Finland" },
  { id: "ireland", name: "Irish & Scottish", percentage: 10, color: "#10B981", cx: 120, cy: 90, description: "Ireland, Scotland, Wales" },
  { id: "mediterranean", name: "Mediterranean", percentage: 5, color: "#F97316", cx: 160, cy: 160, description: "Italy, Greece, Spain, Portugal" },
];

export const InteractiveDNAMap = () => {
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="relative bg-gradient-to-br from-heritage-dark to-heritage-dark/90 rounded-2xl p-8 overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* SVG Map */}
        <svg viewBox="0 0 400 280" className="w-full max-w-xl mx-auto relative z-10">
          {/* Simplified Europe outline */}
          <path
            d="M80,50 L120,30 L180,25 L220,35 L260,50 L280,80 L290,120 L270,160 L240,180 L200,200 L160,210 L120,190 L90,160 L70,120 L75,80 Z"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            className="animate-pulse-soft"
          />
          
          {/* Africa hint */}
          <path
            d="M120,210 L160,220 L200,230 L220,250 L180,270 L140,260 L110,240 Z"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
          />

          {/* Asia hint */}
          <path
            d="M290,60 L340,50 L380,80 L390,140 L370,180 L330,160 L300,130 Z"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
          />

          {/* Region markers */}
          {regions.map((region) => (
            <g key={region.id}>
              {/* Pulse effect */}
              <circle
                cx={region.cx}
                cy={region.cy}
                r={hoveredRegion === region.id ? 35 : 25}
                fill={region.color}
                opacity={0.2}
                className="transition-all duration-300"
              />
              <circle
                cx={region.cx}
                cy={region.cy}
                r={hoveredRegion === region.id ? 25 : 18}
                fill={region.color}
                opacity={0.4}
                className="transition-all duration-300"
              />
              
              {/* Main marker */}
              <circle
                cx={region.cx}
                cy={region.cy}
                r={hoveredRegion === region.id ? 18 : 12}
                fill={region.color}
                stroke="white"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => setActiveRegion(region)}
              />
              
              {/* Percentage label */}
              <text
                x={region.cx}
                y={region.cy + 4}
                textAnchor="middle"
                fill="white"
                fontSize="8"
                fontWeight="bold"
                className="pointer-events-none"
              >
                {region.percentage}%
              </text>
            </g>
          ))}
        </svg>

        {/* Floating info cards */}
        <div className="absolute top-4 right-4 space-y-2">
          {regions.slice(0, 3).map((region, i) => (
            <div
              key={region.id}
              className={`bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg cursor-pointer transition-all duration-300 animate-slide-in-right ${
                hoveredRegion === region.id || activeRegion?.id === region.id
                  ? "ring-2 ring-primary scale-105"
                  : ""
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setActiveRegion(region)}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: region.color }}
                />
                <span className="text-xs font-medium text-foreground">
                  {region.name}
                </span>
                <span className="text-xs font-bold text-primary ml-auto">
                  {region.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Region detail tooltip */}
        {activeRegion && (
          <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-72 bg-card rounded-xl p-4 shadow-elevated animate-scale-in">
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: activeRegion.color }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">
                    {activeRegion.name}
                  </h4>
                  <span className="text-lg font-bold text-primary">
                    {activeRegion.percentage}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {activeRegion.description}
                </p>
                <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${activeRegion.percentage}%`,
                      backgroundColor: activeRegion.color,
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveRegion(null)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setActiveRegion(region)}
            className={`flex items-center gap-2 p-3 rounded-xl transition-all ${
              activeRegion?.id === region.id
                ? "bg-primary/10 ring-2 ring-primary"
                : "bg-card hover:bg-muted"
            }`}
          >
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: region.color }}
            />
            <div className="text-left">
              <p className="text-xs font-medium text-foreground truncate">
                {region.name}
              </p>
              <p className="text-sm font-bold text-primary">{region.percentage}%</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
