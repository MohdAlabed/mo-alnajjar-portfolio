import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import MainPageClient from '@/components/main-sections/main-client';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from "../components/icons/social-icons";

// Dynamic Imports: Loads JS only when needed.
const ToolsSection = dynamic(() => import('@/components/main-sections/tools-section'), {
  loading: () => <div className="h-40 animate-pulse bg-zinc-900 rounded-xl" />,
  ssr: true 
});

const ProjectsSection = dynamic(() => import('@/components/main-sections/projects-section'), {
  loading: () => <div className="h-96 animate-pulse bg-zinc-900 rounded-xl" />,
  ssr: true
});

interface profileItem {
    id: string;
    icon: React.ElementType; // Store the function/class reference
    href: string;
    label: string;
}

const profileItems: profileItem[] = [
  { id:'linkedin', icon: LinkedinIcon, href:'https://www.linkedin.com/in/mohammed-abdallah-960980266/', label: 'Linkedin Profile' },
  { id:'github', icon: GithubIcon, href:'https://github.com/MohdAlabed', label:'GitHub Projects' },
  { id:'email', icon: Mail, href:'mailto:mohammedal-najjar@outlook.com', label:'Email: Get in Touch' },
];

export default function Home() {

  return (
    <main className="w-full min-h-screen bg-black text-zinc-200 selection:bg-cyan-500/30">
      {/* The Client Logic Bridge */}
      <MainPageClient />
      
      <div className="container mx-auto max-w-6xl px-2 md:px-8">
        <div id='hero' className='h-24 lg:h-22'></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16">

          {/* Left Column: Profile */}
          <aside className="lg:col-span-4 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md rounded-3xl p-6 lg:sticky lg:top-12 shadow-2xl mx-4"> 
              <div className="flex flex-col items-center">

                {/* Profile Image */}
                <div className="relative mb-4 group">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div id="image-tooltip" role="tooltip" 
                    className="absolute text-center top-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible group-active:scale-100 group-active:opacity-100 group-active:visible group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:visible px-3 py-1.5 text-xs text-white bg-zinc-900 ring-1 ring-zinc-700/50 rounded-lg whitespace-nowrap shadow-xl transition-all duration-200 ease-out"
                  >
                      Image by Vilius <br/> Kukanauskas from Pixabay
                  </div>
                  <Image aria-describedby="image-tooltip" alt="Profile Image - Image by Vilius Kukanauskas from Pixabay" src={"/images/profile.webp"} priority width={170} height={180} 
                    className="relative rounded-lg object-cover ring-1 ring-zinc-700/50 shadow-xl aspect-[3/4] pointer-events-none"
                  />
                </div>

                {/* Profile Text */}
                <div className="text-center w-full tracking-wide">
                  <h1 className="text-3xl font-extrabold text-white">Mohammed</h1>
                  <h1 className="text-2xl font-black text-zinc-400 mb-3">Al-Najjar</h1>

                  <p className="text-sm text-zinc-300 leading-relaxed px-2 mb-6">
                    Crafting high-performance digital experiences. Specializing in modern web architecture and AI integrations.
                  </p>
                </div>
              </div>

              {/* Sociales & CV */}
              <div className="flex flex-col items-center gap-6">
                <ul className="flex items-center gap-4">
                  {profileItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <li key={item.id} className='relative'>
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                        <Link href={item.href} aria-label={item.label} rel="noopener noreferrer" target="_blank"
                          className="relative group flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/75 border-2 border-zinc-700/50 hover:bg-zinc-800 hover:border-cyan-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                        >
                          <IconComponent strokeWidth={2.5} className="text-cyan-600/90 w-6 h-6 transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-110"/>
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                <a href="/docs/mohammed-alnajjar-resume.pdf" rel="noopener noreferrer" target="_blank" 
                  className="w-full text-center text-sm font-semibold px-6 py-3.5 rounded-xl bg-white text-black transition-colors hover:bg-zinc-200 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-black shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  View Résumé
                  </a>
            </div>
          </aside>
              
          {/* Right Column: Portfolio Body */}
          <section className="lg:col-span-8 flex flex-col gap-16">
            
            {/* Hero Text */}
            <header className="mx-4">
              <h1 className="font-black text-6xl lg:text-7xl tracking-tighter mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-sm">NEXT.JS</span> 
                <span className="text-white">&</span>
              </h1>
              <h1 className="font-black text-6xl lg:text-7xl tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 drop-shadow-sm">AI ENGINEER</span>
              </h1>
              <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
                I build fast, secure, and accessible web applications. Bridging the gap between cutting-edge artificial intelligence and robust frontend ecosystems.
              </p>
            </header>
            
            {/* Component Sections */}
            <ToolsSection />
            <ProjectsSection />
            
          </section>
        </div>

        <footer id="contact" className="flex flex-col items-center text-center py-32 mt-12 border-t border-zinc-800/50 mx-4">
          <div className="max-w-2xl w-full">
            <h1 className="font-black text-white text-5xl tracking-tight mb-4">Get In Touch</h1>
            <h2 className="font-black text-white text-3xl tracking-tight mb-5">{`Let's Build Something!`}</h2>
            <p className="text-zinc-400 text-lg mb-10">{`I'm always open to discussing new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!`}</p>
                  
            <a href='mailto:mohammedal-najjar@outlook.com'
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-4 sm:px-8 font-light sm:text-base text-sm text-white border border-zinc-700 hover:border-cyan-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="flex items-center justify-between sm:gap-3 gap-2 whitespace-nowrap">
                <Mail className="w-5 h-5 text-cyan-500" />
                mohammedal-najjar@outlook.com
              </span>
            </a>  
          </div>

          <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center mt-32 pt-8 border-t border-zinc-900 gap-5 font-mono">
            <h6 className="text-zinc-500 leading-relaxed text-sm">© 2026 Mohammed Al-Najjar. All rights reserved.</h6>
            <h6 className="text-zinc-600 text-sm">Amman, JO</h6>
          </div>
        </footer>
      </div>
    </main>
  );
}