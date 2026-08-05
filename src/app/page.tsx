import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import Expertise from "@/components/sections/Expertise";
import CaseStudies from "@/components/sections/CaseStudies";
import ResumeHub from "@/components/sections/ResumeHub";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />
            <Hero />
            <About />
            <Philosophy />
            <Expertise />
            <CaseStudies />
            <ResumeHub />
            <Process />
            <Testimonials />
            <Contact />
            {/* Other sections will be added here */}
        </main>
    );
}

