import React from 'react';
import { Github, Mail, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              AMRHZ
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Building AI-powered systems, not just apps. Creating intelligent, scalable automation frameworks.
            </p>
            <p className="text-xs text-slate-500 italic">
              "Build in public, fail in public, learn in public"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Tech Stack
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href="https://github.com/amirulhafiz1132002-code"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:amirulhafiz1132002@gmail.com"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              <a href="mailto:amirulhafiz1132002@gmail.com" className="hover:text-cyan-400 transition-colors">
                amirulhafiz1132002@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Muhammad Amirul Hafiz. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500" /> using React, Tailwind CSS, and shadcn/ui
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-600">
              Last Updated: June 2026 | Current Phase: Foundation Building
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
