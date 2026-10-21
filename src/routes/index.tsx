import { createFileRoute } from "@tanstack/react-router";
import { MarcusHomePage } from "@/components/marcus/HomePage";
import heroImage from "@/assets/marcus/hero-interior.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marcus Addis — Chef Marcus Samuelsson's Restaurant in Addis Ababa" },
      {
        name: "description",
        content:
          "Born in Ethiopia. Raised in Sweden. Inspired by Harlem. Chef Marcus Samuelsson's first restaurant in Africa, on the 47th floor of East Africa's tallest building.",
      },
      { property: "og:title", content: "Marcus Addis — A Homecoming for Chef Marcus Samuelsson" },
      {
        property: "og:description",
        content:
          "A fusion of Marcus' world-renowned cuisine with an unforgettable Ethiopian twist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImage.url },
      { name: "twitter:image", content: heroImage.url },
    ],
  }),
  component: MarcusHomePage,
});
