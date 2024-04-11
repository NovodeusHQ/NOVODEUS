import Image from "next/image";
import styles from "./page.module.css";
import TopBanner from "../components/landing/TopBanner";
import About from "../components/landing/About";
import SelectedProjects from "@/components/landing/SelectedProjects";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  return (
    <main className="">
      <TopBanner />

      <div className="px-5">
        <About />
        <SelectedProjects />
        <FAQ />
      </div>

    </main>
  );
}
