import HeroNav from "./components/HeroNav";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import type {PortfolioProject} from "./components/SelectedWorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LatestNewsSection from "./components/LatestNewsSection";
import Footer from "./components/Footer";
import FullBleedPhoto from "./components/FullBleedPhoto";
import TextFillSection from "./components/TextFillSection";
import {sanityClient, urlFor} from "@/lib/sanity";

async function getSelectedWork(): Promise<PortfolioProject[]> {
  const data = await sanityClient.fetch(`
    *[_type == "homepage"][0]{
      selectedWork[]->{
        _id,
        title,
        tags,
        coverImage
      }
    }
  `)
  if (!data?.selectedWork) return []
  return data.selectedWork.map((p: {_id: string; title: string; tags: string[] | null; coverImage?: object}) => ({
    _id: p._id,
    title: p.title,
    tags: p.tags ?? [],
    coverImageUrl: p.coverImage ? urlFor(p.coverImage).width(800).height(900).fit('crop').url() : null,
  }))
}

async function getHeroImages() {
  const data = await sanityClient.fetch(`
    *[_type == "homepage"][0]{
      "desktop": heroImage.asset->url,
      "mobile": heroImageMobile.asset->url
    }
  `)
  return {
    desktop: (data?.desktop as string) ?? '',
    mobile: (data?.mobile as string) ?? '',
  }
}

export default async function Home() {
  const [selectedWork, heroImages] = await Promise.all([getSelectedWork(), getHeroImages()])
  return (
    <>
    <div style={{ position: "relative", zIndex: 1 }}>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
        <HeroNav />
      </header>
      <HeroSection desktopSrc={heroImages.desktop} mobileSrc={heroImages.mobile} />
      <IntroSection />
      <AboutSection />
      <TextFillSection />
      <FullBleedPhoto />
      <ServicesSection />
      <SelectedWorkSection projects={selectedWork} />
      <TestimonialsSection />
      <LatestNewsSection />
    </div>
    <Footer />
    </>
  );
}
