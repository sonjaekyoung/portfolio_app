import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 shadow mt-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          © {new Date().getFullYear()} <Link href="/" className="hover:text-gold-500 hover:underline">Portfolio™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li className="me-4 md:me-6">
            <Link href="#" className="hover:text-gold-500 flex items-center gap-2 transition-colors">
              <Github size={18} /> GitHub
            </Link>
          </li>
          <li className="me-4 md:me-6">
            <Link href="#" className="hover:text-gold-500 flex items-center gap-2 transition-colors">
              <Linkedin size={18} /> LinkedIn
            </Link>
          </li>
          <li>
            <Link href="mailto:contact@example.com" className="hover:text-gold-500 flex items-center gap-2 transition-colors">
              <Mail size={18} /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

