import { Card } from "@/components/ui/card";
import { Instagram, Youtube } from "lucide-react";

const SocialFeeds = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-primary">
          Follow Our Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* YouTube */}
          <Card className="p-6 shadow-warm">
            <div className="flex items-center space-x-3 mb-4">
              <Youtube className="text-primary" size={32} />
              <div>
                <h3 className="text-xl font-serif font-bold">YouTube</h3>
                <p className="text-sm text-muted-foreground">@Periyavagrace</p>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=Periyavagrace"
                title="YouTube Channel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://www.youtube.com/@Periyavagrace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary hover:underline"
            >
              View Channel →
            </a>
          </Card>

          {/* Instagram */}
          <Card className="p-6 shadow-warm">
            <div className="flex items-center space-x-3 mb-4">
              <Instagram className="text-primary" size={32} />
              <div>
                <h3 className="text-xl font-serif font-bold">Instagram</h3>
                <p className="text-sm text-muted-foreground">@periyavagrace</p>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground text-center px-4">
                Follow us on Instagram for daily spiritual insights and updates
              </p>
            </div>
            <a
              href="https://www.instagram.com/periyavagrace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary hover:underline"
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
