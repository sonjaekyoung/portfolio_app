import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Layout, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32 pb-20">
      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal-800 to-background z-[-1]"></div>
        <h1 className="text-4xl md:text-7xl font-bold font-serif mb-6 animate-fade-in-up">
          손재경 <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-300% animate-gradient">짱짱맨</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light">
          I craft high-end web experiences with a focus on aesthetics, performance, and user interaction.
        </p>
        <div className="flex gap-4">
          <Link href="#projects" className="px-8 py-3 bg-gold-500 text-charcoal-900 font-bold rounded-full hover:bg-gold-400 transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20">
            View Work
          </Link>
          <Link href="#contact" className="px-8 py-3 border border-gold-600 text-gold-500 rounded-full hover:bg-gold-600/10 transition-all">
            Contact Me
          </Link>
        </div>
      </section>

      {/* About / Skills Section */}
      <section id="about" className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-charcoal-800 p-8 rounded-2xl border border-charcoal-700">
               <h3 className="text-2xl font-serif text-gold-500 mb-4">About Me</h3>
               <p className="text-gray-300 leading-relaxed mb-6">
                 With over 5 years of experience in full-stack development, I specialize in building modern web applications that are both functional and visually stunning. My approach combines technical expertise with a keen eye for design.
               </p>
               <div className="flex flex-wrap gap-2">
                 {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Design Systems'].map((skill) => (
                   <span key={skill} className="px-3 py-1 bg-charcoal-900 border border-gold-700/30 text-gold-400 text-sm rounded-full">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-charcoal-800/50 rounded-xl border border-charcoal-700 hover:border-gold-600 transition-colors">
              <Code className="text-gold-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Web Development</h4>
              <p className="text-gray-400 text-sm">Building fast, responsive, and scalable web applications using the latest technologies.</p>
            </div>
            <div className="p-6 bg-charcoal-800/50 rounded-xl border border-charcoal-700 hover:border-gold-600 transition-colors">
              <Layout className="text-gold-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">UI/UX Design</h4>
              <p className="text-gray-400 text-sm">Designing intuitive and accessible interfaces that delight users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4"><span className="text-gold-500">Selected</span> Projects</h2>
          <div className="h-1 w-20 bg-gold-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative bg-charcoal-800 rounded-xl overflow-hidden border border-charcoal-700 hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10">
              <div className="h-48 bg-charcoal-700 relative overflow-hidden">
                {/* Placeholder for Project Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-charcoal-600 font-serif text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                  Project {item}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold-400 transition-colors">Luxury E-commerce</h3>
                <p className="text-gray-400 text-sm mb-4">A high-end shopping platform built with Next.js and Stripe integration.</p>
                <Link href="#" className="inline-flex items-center text-gold-500 hover:text-gold-300 text-sm font-medium transition-colors">
                  View Project <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-3xl p-8 md:p-16 border border-charcoal-700 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to create something <span className="text-gold-500">extraordinary?</span></h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            I am currently available for freelance projects and open to new opportunities. Let's discuss how we can work together.
          </p>
          <a href="mailto:hello@example.com" className="inline-block px-10 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-full hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
