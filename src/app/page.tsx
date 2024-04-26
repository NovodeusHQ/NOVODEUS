import Image from "next/image";
import styles from "./page.module.css";
import TopBanner from "../components/landing/TopBanner";
import About from "../components/landing/About";
import Services from "@/components/landing/Services";
import SelectedProjects from "@/components/landing/SelectedProjects";
import FAQ from "@/components/landing/FAQ";
import HighlightedCTA from "@/components/landing/HighlightedCTA";
import ReviewSlider from "@/components/reusables/ReviewSlider";

export default function Home() {
  return (
    <main className="">
      <TopBanner />
      <About />
      <Services />
      <SelectedProjects />
      <ReviewSlider />
      <FAQ />
      <HighlightedCTA />

    </main>
  );
}
