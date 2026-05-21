"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Setup observer
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80px 0px", // triggers slightly before entering full view
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Once animated, we can unobserve if we only want it to run once
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Find and observe elements
    const elementsToReveal = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right"
    );
    
    elementsToReveal.forEach((el) => observer.observe(el));

    // Cleanup on unmount or path change
    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]); // Re-run whenever the route changes to bind new elements

  return null; // purely behavior-based component
}
