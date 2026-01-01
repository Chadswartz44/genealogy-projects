import { ReactNode, forwardRef } from "react";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  as?: "section" | "div" | "article" | "aside";
}

export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className = "", animation = "fadeUp", delay = 0, as: Component = "div" }, _ref) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

    return (
      <Component
        ref={ref as any}
        className={`${getAnimationClass(isVisible, animation)} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </Component>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

// Stagger children animation wrapper
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ children, className = "", staggerDelay = 100 }: StaggerContainerProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref as any} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
};
