import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

export const Hero = ({ userData, stats, loading }) => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity" />
            {loading ? (
              <Skeleton className="relative w-32 h-32 rounded-full" />
            ) : (
              <img
                src={userData?.avatar || 'https://github.com/amirulhafiz1132002-code.png'}
                alt={userData?.name || 'Profile'}
                className="relative w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 shadow-xl"
              />
            )}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
          Hi there! I'm{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
            {loading ? (
              <Skeleton className="inline-block w-96 h-16" />
            ) : (
              userData?.name || 'Muhammad Amirul Hafiz'
            )}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-4">
          {loading ? (
            <Skeleton className="w-96 h-8 mx-auto" />
          ) : (
            userData?.bio || 'Building AI-Powered Systems, Not Just Apps'
          )}
        </p>

        {/* Philosophy */}
        <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Creating intelligent, scalable automation frameworks that bridge the gap between traditional software and artificial intelligence
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-500">
              {loading ? <Skeleton className="w-16 h-8" /> : `${stats?.totalProjects || 0}+`}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-500">
              {loading ? <Skeleton className="w-16 h-8" /> : stats?.activeProjects || 0}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Active</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-500">
              {loading ? <Skeleton className="w-16 h-8" /> : `${stats?.languages?.length || 0}+`}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-500">
              {loading ? <Skeleton className="w-16 h-8" /> : userData?.public_repos || 0}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Repositories</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-500 transition-all"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/amirulhafiz1132002-code"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:amirulhafiz1132002@gmail.com"
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};
