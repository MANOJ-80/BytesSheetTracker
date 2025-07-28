import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate text-light py-6 mt-12 border-t border-steel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="text-center sm:text-left mb-2 sm:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold text-cyan">BYTS-SDE Tracker</span>. Built by <span className="text-light">0xEcho</span>.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MANOJ-80"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            className="hover:text-cyan transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/"
            className="hover:text-cyan transition-colors"
          >
            Credits
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
