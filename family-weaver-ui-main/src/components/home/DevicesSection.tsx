import { Smartphone, Tablet, Monitor, Star } from "lucide-react";

const testimonials = [
  {
    quote: "FamilyHeritage helped me discover relatives I never knew existed. The DNA matching is incredible!",
    author: "Sarah M.",
    location: "Texas, USA",
    rating: 5,
  },
  {
    quote: "The photo animation feature brought tears to my eyes. Seeing my grandmother 'come to life' was magical.",
    author: "James K.",
    location: "London, UK",
    rating: 5,
  },
  {
    quote: "I've traced my family back 8 generations using their historical records. Absolutely amazing service.",
    author: "Maria L.",
    location: "Toronto, Canada",
    rating: 5,
  },
];

const mediaLogos = [
  { name: "The New York Times", initials: "NYT" },
  { name: "TechCrunch", initials: "TC" },
  { name: "Fox News", initials: "FOX" },
  { name: "BBC", initials: "BBC" },
  { name: "CNN", initials: "CNN" },
];

export function DevicesSection() {
  return (
    <>
      {/* Devices Section */}
      <section className="py-20 lg:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Access Your Heritage Anywhere
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
              Explore your family history on any device. Your tree, photos, and discoveries sync seamlessly.
            </p>
            
            <div className="flex items-center justify-center gap-12 lg:gap-20">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground font-medium">Mobile</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                  <Tablet className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground font-medium">Tablet</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground font-medium">Desktop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Loved by Millions
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our community has to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-heritage hover:shadow-heritage-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-heritage-gold text-heritage-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Media Logos */}
          <div className="border-t border-border pt-12">
            <p className="text-center text-muted-foreground mb-8">As featured in</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {mediaLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="text-2xl font-display font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                  title={logo.name}
                >
                  {logo.initials}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
