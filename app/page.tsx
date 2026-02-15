import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main>
        <Hero />
        <About />
        <Works />
      </main>
      <Footer />
    </>
  );
}
