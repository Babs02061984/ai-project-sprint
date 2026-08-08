import HeroNav from "./components/HeroNav";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection, { type SanityService } from "./components/ServicesSection";
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

async function getServices(): Promise<SanityService[]> {
  const data = await sanityClient.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      description,
      order
    }
  `)
  return data ?? []
}

async function getHeroImages() {
  const data = await sanityClient.fetch(`
    *[_type == "homepage"][0]{
      "desktop": heroImage.asset->url,
      "mobile": heroImageMobile.asset->url,
      "about": aboutImage.asset->url,
      "fullBleed": fullBleedImage.asset->url
    }
  `)
  return {
    desktop: (data?.desktop as string) ?? '',
    mobile: (data?.mobile as string) ?? '',
    about: (data?.about as string) ?? '',
    fullBleed: (data?.fullBleed as string) ?? '',
  }
}

export default async function Home() {
  const [selectedWork, heroImages, services] = await Promise.all([getSelectedWork(), getHeroImages(), getServices()])
  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
      <HeroNav />
    </header>
    <HeroSection desktopSrc={heroImages.desktop} mobileSrc={heroImages.mobile} />
    <IntroSection />
    <AboutSection imageSrc={heroImages.about} />
    <TextFillSection />
    <FullBleedPhoto src={heroImages.fullBleed} />
    <ServicesSection services={services} />
    <SelectedWorkSection projects={selectedWork} />
    <TestimonialsSection />
    <LatestNewsSection />
    <Footer />
    </>
  );
}
