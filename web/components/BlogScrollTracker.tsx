"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Dispara evento Plausible `blog_read_end` cuando el usuario alcanza el 80% de scroll del artículo.
 * Una sola vez por pageview. Bench sin dependencias, usa IntersectionObserver sobre un sentinel.
 */
export function BlogScrollTracker({ slug }: { slug: string }) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            trackEvent("blog_read_end", { slug });
            observer.disconnect();
          }
        }
      },
      { threshold: 0 }
    );

    const sentinel = document.createElement("div");
    sentinel.setAttribute("data-scroll-sentinel", "true");
    sentinel.style.cssText =
      "position:absolute;top:80%;height:1px;width:1px;pointer-events:none;opacity:0;";
    const body = document.querySelector(".post-body");
    if (body instanceof HTMLElement) {
      body.style.position = body.style.position || "relative";
      body.appendChild(sentinel);
      observer.observe(sentinel);
    }

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [slug]);

  return null;
}
