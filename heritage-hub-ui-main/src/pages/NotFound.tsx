import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="heritage-container text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/"><Button size="lg"><Home className="w-4 h-4 mr-2" />Back to Home</Button></Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
