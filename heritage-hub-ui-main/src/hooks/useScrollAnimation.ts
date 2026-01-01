import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animation variants for common use cases
export const animationClasses = {
  fadeUp: "opacity-0 translate-y-8",
  fadeIn: "opacity-0",
  slideLeft: "opacity-0 -translate-x-8",
  slideRight: "opacity-0 translate-x-8",
  scaleIn: "opacity-0 scale-95",
  visible: "opacity-100 translate-y-0 translate-x-0 scale-100",
};

export const getAnimationClass = (
  isVisible: boolean,
  variant: keyof typeof animationClasses = "fadeUp"
) => {
  const baseClass = "transition-all duration-700 ease-out";
  return `${baseClass} ${isVisible ? animationClasses.visible : animationClasses[variant]}`;
};
