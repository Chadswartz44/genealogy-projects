import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, User, ChevronRight } from "lucide-react";

const posts = [
  { title: "Tracing Your Ancestors Through Immigration Records", author: "Sarah Mitchell", date: "Dec 28, 2024", excerpt: "Learn how to use Ellis Island and other immigration databases..." },
  { title: "5 Tips for Animating Old Family Photos", author: "Michael Chen", date: "Dec 25, 2024", excerpt: "Get the best results from our Deep Nostalgia feature..." },
  { title: "Understanding Your DNA Ethnicity Results", author: "Dr. Emma Wilson", date: "Dec 20, 2024", excerpt: "What those percentages really mean for your heritage..." },
];

const Blog = () => (
  <Layout>
    <section className="bg-heritage-dark text-primary-foreground py-20">
      <div className="heritage-container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Blog</h1>
        <p className="text-primary-foreground/80">Tips, stories, and insights for your genealogy journey</p>
      </div>
    </section>
    <section className="heritage-section bg-background">
      <div className="heritage-container max-w-4xl">
        <div className="grid gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all">
              <h2 className="text-2xl font-display font-bold text-foreground mb-3 hover:text-primary cursor-pointer">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
