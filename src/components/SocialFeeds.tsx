import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Instagram, Youtube } from "lucide-react";



declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const SocialFeeds = () => {
  const instaRef = useRef(null);

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        window.instgrm?.Embeds.process();
      };
    } else {
      window.instgrm?.Embeds.process();
    }
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-primary">
          Follow Our Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Single Card with Two YouTube Videos */}
          <Card className="p-6 shadow-warm flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
              <Youtube className="text-primary" size={32} />
              <div>
                <h3 className="text-xl font-serif font-bold">YouTube Videos</h3>
                <p className="text-sm text-muted-foreground">@Periyavagrace</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Video 1 */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/PwTtXG5AnBo?si=eS0X35ioS1rYoanb"
                  title="YouTube Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video 2 */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/CNjtccnnTi8?si=b-njLCyFxQjcOFAo"
                  title="YouTube Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@Periyavagrace"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 self-start text-primary hover:underline"
            >
              View Channel →
            </a>
          </Card>

          {/* Instagram Reel using Instagram Embed Markup */}
          <Card className="p-0 shadow-warm flex flex-col items-center bg-white" style={{ boxShadow: '0 0 1px rgba(0,0,0,0.05), 0 1px 10px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center space-x-3 mb-4 mt-4 px-4 w-full">
              <Instagram className="text-primary" size={32} />
              <div>
                <h3 className="text-xl font-serif font-bold">Instagram</h3>
                <p className="text-sm text-muted-foreground">@periyavagrace</p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DI_t3qKiUh4/"
                data-instgrm-version="14"
                style={{ background: "#FFF", border: "0", borderRadius: "3px", width: "100%", maxWidth: "540px", margin: "0 auto" }}
              >
                <a href="https://www.instagram.com/reel/DI_t3qKiUh4/" target="_blank" rel="noopener noreferrer">
                  View this post on Instagram
                </a>
              </blockquote>
            </div>
            <a
              href="https://www.instagram.com/periyavagrace"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-4 ml-4 text-primary hover:underline self-start"
            >
              Follow Us →
            </a>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default SocialFeeds;
