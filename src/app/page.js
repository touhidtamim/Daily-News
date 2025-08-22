import HeroSection from "@/components/Hero/page";
import LatestNewsSection from "./../components/LatestNews/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <HeroSection />
      {/* Latest News */}
      <LatestNewsSection />
    </main>
  );
}
