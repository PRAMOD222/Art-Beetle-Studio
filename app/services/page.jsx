import ServicesCarousel from "../components/ServicesCarousel";

const servicesData = [
  {
    title: "Graphics",
    slides: [
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        backgroundGradient: "linear-gradient(90deg, #10244f 0%, #006ab6 50%, #10244f 100%)",
        hasGradient: true,
        openInNewTab: false,
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-2.webp",
        backgroundGradient: "linear-gradient(90deg, #10244f 0%, #006ab6 50%, #10244f 100%)",
        hasGradient: true,
        openInNewTab: false,
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        backgroundGradient: "linear-gradient(90deg, #10244f 0%, #006ab6 50%, #10244f 100%)",
        hasGradient: true,
        openInNewTab: false,
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        backgroundGradient: "linear-gradient(90deg, #10244f 0%, #006ab6 50%, #10244f 100%)",
        hasGradient: true,
        openInNewTab: false,
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        backgroundGradient: "linear-gradient(90deg, #10244f 0%, #006ab6 50%, #10244f 100%)",
        hasGradient: true,
        openInNewTab: false,
      },
    ]
  },
  {
    title: "Videos",
    slides: [
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        hasGradient: false,
        videoId: "D0UnqGm_miA"
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        hasGradient: false,
        videoId: "D0UnqGm_miA"
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        hasGradient: false,
        videoId: "D0UnqGm_miA"
      }
    ]
  },
  {
    title: "3D",
    slides: [
      {
        thumbnail: "/services/graphics/graphics-1.png",
        modelPath: "/911-transformed.glb",
        hasGradient: true,
        backgroundGradient: "linear-gradient(90deg, #1a0b2e 0%, #700b4f 50%, #1a0b2e 100%)", // Dark purple and deep pink
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        modelPath: "/cobra-transformed.glb",
        hasGradient: true,
        backgroundGradient: "linear-gradient(90deg, #1a0b2e 0%, #700b4f 50%, #1a0b2e 100%)",
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        modelPath: "/datsun-transformed.glb",
        hasGradient: true,
        backgroundGradient: "linear-gradient(90deg, #1a0b2e 0%, #700b4f 50%, #1a0b2e 100%)",
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        modelPath: "/watch-v1.glb",
        hasGradient: true,
        backgroundGradient: "linear-gradient(90deg, #1a0b2e 0%, #700b4f 50%, #1a0b2e 100%)",
      }
    ]
  },
  {
    title: "Web Development",
    slides: [
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        hasGradient: false,
        openInNewTab: true,
        link: "https://example.com"
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        hasGradient: false,
        openInNewTab: true,
        link: "https://example.com"
      },
      {
        thumbnail: "/services/graphics/graphics-1.png",
        fullImage: "/services/graphics/full-graphics-1.webp",
        hasGradient: false,
        openInNewTab: true,
        link: "https://example.com"
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <ServicesCarousel services={servicesData} />
    </div>
  );
}
