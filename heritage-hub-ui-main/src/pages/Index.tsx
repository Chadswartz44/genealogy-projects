import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Users, Search, Smartphone, Tablet, Monitor, Star, 
  ChevronRight, Sparkles, TreePine, FileText, Heart, Globe, Play
} from "lucide-react";
import { AnimatedSection, StaggerContainer } from "@/components/AnimatedSection";
import heroFamily from "@/assets/hero-family.jpg";
import dnaMap from "@/assets/dna-map.png";
import vintagePortrait from "@/assets/vintage-portrait.jpg";
import familyTreeIllustration from "@/assets/family-tree-illustration.png";
import historicalRecords from "@/assets/historical-records.jpg";

const ethnicityData = [
  { region: "Western European", percentage: 42, color: "bg-blue-500" },
  { region: "Eastern European", percentage: 28, color: "bg-purple-500" },
  { region: "Scandinavian", percentage: 15, color: "bg-cyan-500" },
  { region: "Irish & Scottish", percentage: 10, color: "bg-green-500" },
  { region: "Mediterranean", percentage: 5, color: "bg-orange-500" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "New York, USA",
    text: "FamilyHeritage helped me discover relatives I never knew existed. The DNA matching is incredibly accurate!",
    avatar: "S",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "The photo animation feature brought tears to my eyes. Seeing my great-grandmother 'come to life' was magical.",
    avatar: "M",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFamily})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-dark/95 via-heritage-dark/80 to-heritage-dark/60" />
        </div>
        
        <div className="heritage-container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
                Discover Your{" "}
                <span className="text-primary">Family Story</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
                Uncover your roots, build your family tree, find new relatives, 
                and explore billions of historical records with a free trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button variant="hero" size="xl" className="hover:scale-105 transition-transform">
                    Start Free Trial
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/dna-test">
                  <Button variant="hero-outline" size="xl" className="hover:scale-105 transition-transform">
                    Learn About DNA
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-elevated max-w-md ml-auto hover:shadow-card transition-shadow">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Start your free trial
                </h3>
                <div className="space-y-4">
                  <Link to="/login">
                    <Button variant="social" className="w-full justify-center gap-3 h-12 hover:bg-muted transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="social" className="w-full justify-center gap-3 h-12 hover:bg-muted transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                      </svg>
                      Continue with Apple
                    </Button>
                  </Link>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or with email</span>
                    </div>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <Link to="/login">
                    <Button className="w-full h-12 hover:scale-[1.02] transition-transform">
                      Continue
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By continuing, you agree to our{" "}
                  <Link to="/terms" className="text-primary hover:underline">Terms</Link> and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DNA Insights Section */}
      <section className="heritage-section bg-background">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Amaze Yourself with <span className="text-primary">DNA Insights</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a DNA test to reveal your ethnic origins and connect you with relatives around the world.
                Discover the beautiful tapestry of your heritage from over 2,000 regions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="relative">
                <img 
                  src={dnaMap} 
                  alt="DNA Ethnicity Map" 
                  className="w-full max-w-lg mx-auto animate-float"
                />
                <div className="absolute top-10 left-10 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse-soft">
                  2,114 Regions
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideRight" delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  Your Ethnic Origins
                </h3>
                <div className="space-y-4">
                  {ethnicityData.map((item, index) => (
                    <div key={index} className="space-y-2 group">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">{item.region}</span>
                        <span className="text-primary font-semibold">{item.percentage}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 group-hover:brightness-110`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/dna-test">
                  <Button className="mt-6 hover:scale-105 transition-transform">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Photo Animation Section */}
      <section className="heritage-section bg-muted/50">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Animate Your Family Photos
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bring still photos to life with our Deep Nostalgia™ technology. 
                Watch your ancestors smile, blink, and move in high-quality animations 
                that will leave you speechless.
              </p>
              <ul className="space-y-3 mb-8">
                {["Turn old photos into moving portraits", "Enhance and restore damaged images", "Colorize black and white photos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground group">
                    <div className="w-6 h-6 rounded-full bg-heritage-green/20 flex items-center justify-center group-hover:bg-heritage-green/30 transition-colors">
                      <span className="text-heritage-green text-sm">✓</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/photo-tools">
                <Button variant="green" className="hover:scale-105 transition-transform">
                  Try Photo Tools
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={200} className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <img 
                  src={vintagePortrait} 
                  alt="Vintage Portrait" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-elevated transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link to="/photo-tools">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform animate-pulse-soft">
                      <Play className="w-8 h-8 text-primary-foreground fill-current" />
                    </div>
                  </Link>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-card animate-float">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-semibold text-foreground">Animated!</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Family Tree Section */}
      <section className="heritage-section bg-heritage-green-light">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Create Your Online <span className="text-heritage-green">Family Tree</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Build your family tree online with ease. Add photos, stories, and connect 
                with relatives to discover shared ancestry and grow your tree together.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200}>
            <div className="flex justify-center mb-8">
              <Link to="/family-tree" className="group">
                <img 
                  src={familyTreeIllustration} 
                  alt="Family Tree Illustration" 
                  className="max-w-2xl w-full rounded-2xl shadow-soft transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
            </div>
          </AnimatedSection>

          <div className="flex justify-center">
            <Link to="/family-tree">
              <Button variant="green" size="lg" className="hover:scale-105 transition-transform">
                Start Free Tree
                <TreePine className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section className="heritage-section bg-background">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Search Billions of Records
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dive into our huge historical records database — just enter a name or date of birth,
                and explore birth, marriage, census, and immigration records.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200}>
            <Link to="/records" className="block group">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={historicalRecords} 
                  alt="Historical Records" 
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/80 to-transparent flex items-end p-8">
                  <div className="flex flex-wrap gap-3">
                    {["Birth Records", "Marriage Certificates", "Census Data", "Immigration Papers"].map((type, i) => (
                      <span key={i} className="px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground hover:bg-card transition-colors">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          <div className="flex justify-center mt-8">
            <Link to="/records">
              <Button size="lg" className="hover:scale-105 transition-transform">
                <Search className="w-4 h-4" />
                Search Records
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Smart Discoveries Section */}
      <section className="heritage-section bg-heritage-dark text-primary-foreground">
        <div className="heritage-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Easy Automatic <span className="text-primary">Discoveries</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                The smarter you grow your family tree, we'll begin searching for you.
                You'll receive discoveries of new family tree connections, records, and
                Smart Matches that will enhance your ancestry.
              </p>
              <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={100}>
                {[
                  { icon: Sparkles, title: "Smart Matches", desc: "AI-powered relative connections", link: "/features/smart-matching" },
                  { icon: FileText, title: "Record Hints", desc: "Automatic document discovery", link: "/records" },
                  { icon: Users, title: "DNA Relatives", desc: "Find genetic connections", link: "/features/dna-matching" },
                  { icon: Heart, title: "Family Stories", desc: "Shared memories & photos", link: "/community" },
                ].map((item, i) => (
                  <Link to={item.link} key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-primary-foreground/60">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </StaggerContainer>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={300} className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-soft">
                    <Link to="/family-tree">
                      <Sparkles className="w-16 h-16 text-primary hover:scale-110 transition-transform cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="heritage-section bg-background">
        <div className="heritage-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Join the FamilyHeritage Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              6 Billion profiles and the world's largest family trees waiting to explore their history.
              Collaborate with relatives and bring your family story to life.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { value: "6.7B", label: "Profiles" },
                { value: "86M", label: "Family Trees" },
                { value: "19B", label: "Historical Records" },
              ].map((stat, i) => (
                <Link to="/community" key={i} className="text-center group">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex justify-center mb-8">
              <div className="flex -space-x-4">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full bg-muted border-4 border-background flex items-center justify-center text-muted-foreground font-semibold hover:scale-110 transition-transform cursor-pointer"
                    style={{ zIndex: 10 - i }}
                  >
                    <Users className="w-5 h-5" />
                  </div>
                ))}
                <Link to="/community">
                  <div className="w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-semibold z-0 hover:scale-110 transition-transform">
                    +
                  </div>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <Link to="/community">
            <Button size="lg" className="hover:scale-105 transition-transform">
              Join Community
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-16 bg-primary">
        <div className="heritage-container text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Anywhere, Anytime and on Any Device
            </h2>
            <p className="text-primary-foreground/80 mb-12 max-w-xl mx-auto">
              Research your family history on the way, at home and on the go. 
              Sync seamlessly and share instantly across all your devices.
            </p>
            <div className="flex justify-center gap-8 md:gap-16">
              {[
                { icon: Smartphone, name: "Mobile" },
                { icon: Tablet, name: "Tablet" },
                { icon: Monitor, name: "Desktop" },
              ].map((device, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                    <device.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/80 text-sm">{device.name}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials & Press */}
      <section className="heritage-section bg-muted/30">
        <div className="heritage-container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Featured in</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                {["The New York Times", "TechCrunch", "Good Morning America", "Fox News"].map((name, i) => (
                  <span key={i} className="text-lg md:text-xl font-display font-semibold text-foreground hover:opacity-100 transition-opacity cursor-pointer">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={150}>
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-foreground/80 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="heritage-section bg-heritage-cream">
        <div className="heritage-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Discover and Treasure<br />Your Unique Family History
            </h2>
            <Link to="/login">
              <Button variant="hero" size="xl" className="hover:scale-105 transition-transform">
                Start Free Trial
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
