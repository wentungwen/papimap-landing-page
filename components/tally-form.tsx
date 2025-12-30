"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export function TallyForm() {
  useEffect(() => {
    // Load Tally embeds when component mounts
    const loadTallyEmbeds = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        // If Tally is not loaded yet, find all iframes with data-tally-src and set their src
        document
          .querySelectorAll("iframe[data-tally-src]:not([src])")
          .forEach((iframe: Element) => {
            const iframeElement = iframe as HTMLIFrameElement;
            if (iframeElement.dataset.tallySrc) {
              iframeElement.src = iframeElement.dataset.tallySrc;
            }
          });
      }
    };

    // Try to load embeds immediately if Tally is already available
    loadTallyEmbeds();
  }, []);

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && window.Tally) {
            window.Tally.loadEmbeds();
          }
        }}
        onError={() => {
          // Fallback: manually set iframe src if script fails
          document
            .querySelectorAll("iframe[data-tally-src]:not([src])")
            .forEach((iframe: Element) => {
              const iframeElement = iframe as HTMLIFrameElement;
              if (iframeElement.dataset.tallySrc) {
                iframeElement.src = iframeElement.dataset.tallySrc;
              }
            });
        }}
      />
      <iframe
        data-tally-src="https://tally.so/embed/Pd1d7P?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="551"
        style={{ border: "none", margin: 0 }}
        title="Papimap Waiting List"
        className="w-full"
      />
    </>
  );
}

