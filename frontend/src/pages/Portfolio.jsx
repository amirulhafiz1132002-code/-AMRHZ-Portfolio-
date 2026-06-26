import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';
import { mockGitHubData, roadmapPhases, techStack, achievements } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Target, Rocket, Lightbulb, Code2, Database, Cloud, Cpu, Award, CheckCircle2, Circle } from 'lucide-react';

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? mockGitHubData.repositories
    : mockGitHubData.repositories.filter(repo => repo.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'core', label: 'Core Projects' },
    { value: 'tools', label: 'Tools' },
    { value: 'research', label: 'Research' },
    { value: 'backend', label: 'Backend' },
    { value: 'resources', label: 'Resources' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              I build <span className="text-cyan-500 font-semibold">AI-powered systems, not just apps</span>. My mission is to create intelligent, 
              scalable automation frameworks that bridge the gap between traditional software and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Focus Areas */}
            <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-cyan-50 to-white dark:from-slate-800 dark:to-slate-900">
              <CardHeader>
                <Rocket className="w-10 h-10 text-cyan-500 mb-2" />
                <CardTitle className="text-lg">AI-Powered Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Building systems that think and act intelligently
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-teal-50 to-white dark:from-slate-800 dark:to-slate-900">
              <CardHeader>
                <Code2 className="w-10 h-10 text-teal-500 mb-2" />
                <CardTitle className="text-lg">Robust API Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Designing scalable, maintainable APIs
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-cyan-50 to-white dark:from-slate-800 dark:to-slate-900">
              <CardHeader>
                <Cpu className="w-10 h-10 text-cyan-500 mb-2" />
                <CardTitle className="text-lg">Intelligent Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Creating adaptive, learning-capable applications
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-teal-50 to-white dark:from-slate-800 dark:to-slate-900">
              <CardHeader>
                <Database className="w-10 h-10 text-teal-500 mb-2" />
                <CardTitle className="text-lg">System Software</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Deep dive into core infrastructure and automation
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy */}
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl border border-cyan-200 dark:border-cyan-900">
              <Lightbulb className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
              <p className="text-xl font-semibold text-slate-900 dark:text-white italic">
                "Build in public, fail in public, learn in public"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Highlight */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400 border-0">
              Featured Project
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AMRHZ Portfolio
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Transforming from a static portfolio → AI-Powered Agent System
            </p>
          </div>

          <Card className="border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Project Vision
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Before: Building traditional HTML/CSS/JS portfolio websites
                  </p>
                  <p className="text-lg font-semibold text-cyan-500 mb-6">
                    Now: Pivoting to an AI-Powered RAG System using Python + LangChain + Vector Databases
                  </p>

                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 mt-8">
                    What's Being Built
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-900 dark:text-white">AI Agent Dashboard</strong> - Interactive command-based system
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-900 dark:text-white">Public Development</strong> - Updates 3x per week
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-900 dark:text-white">Cost-Optimized</strong> - Goal: Deploy AI agent with cost &lt;$0.01 per chat
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Current Features
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Interactive dashboard interface with command-style navigation',
                      'Intelligent routing system between pages',
                      'Custom UI design with modern UX principles',
                      'Structured asset management and organization',
                      'Foundation for AI integration and RAG capabilities'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0 mt-2" />
                        <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 p-6 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 rounded-xl">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Development Metrics
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-600 dark:text-slate-400">Phase 1: Foundation</span>
                          <span className="font-semibold text-cyan-500">80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div>
                          <div className="text-2xl font-bold text-cyan-500">12</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Stars</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-teal-500">3</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Forks</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-cyan-500">Active</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">Status</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Core Projects Ecosystem
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Explore my portfolio of AI-powered systems and automation tools
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className={
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                    : 'border-slate-300 dark:border-slate-700 hover:border-cyan-500'
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Development Roadmap
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The journey from foundation to AI-powered optimization
            </p>
          </div>

          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <Card
                key={phase.phase}
                className={`border-2 ${
                  phase.status === 'active'
                    ? 'border-cyan-500 dark:border-cyan-500'
                    : 'border-slate-200 dark:border-slate-800'
                } bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                          phase.status === 'active'
                            ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                            : phase.status === 'upcoming'
                            ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            : 'bg-slate-100 dark:bg-slate-900 text-slate-400'
                        }`}
                      >
                        {phase.phase}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{phase.title}</CardTitle>
                        <CardDescription>{phase.period}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      className={`${
                        phase.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : phase.status === 'upcoming'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400'
                      } border-0`}
                    >
                      {phase.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-600 dark:text-slate-400">Overall Progress</span>
                      <span className="font-semibold text-cyan-500">{phase.progress}%</span>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50"
                      >
                        {item.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            item.completed
                              ? 'text-slate-900 dark:text-white'
                              : 'text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Tools and technologies I use to build intelligent systems
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="ai">AI/ML</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            </TabsList>

            {Object.entries(techStack).map(([key, technologies]) => (
              <TabsContent key={key} value={key}>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="px-4 py-2 text-base border-2 border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Milestones in my development journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-500">{achievement.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect!
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            I'm always excited to discuss AI/ML integration strategies, system architecture, and collaboration opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-cyan-50 to-white dark:from-slate-800 dark:to-slate-900">
              <CardHeader>
                <Target className="w-10 h-10 text-cyan-500 mx-auto mb-2" />
                <CardTitle>Interested In</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 text-left">
                  <li>💬 AI/ML integration strategies</li>
                  <li>🏗️ System architecture and design patterns</li>
                  <li>🤝 Collaboration opportunities</li>
                  <li>📚 Knowledge sharing and mentoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 bg-gradient-to-br from-teal-50 to-white dark:from-slate-800 dark:to-slate-900">
              <CardHeader>
                <Rocket className="w-10 h-10 text-teal-500 mx-auto mb-2" />
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <a
                    href="mailto:amirulhafiz1132002@gmail.com"
                    className="block text-cyan-500 hover:text-cyan-600 transition-colors"
                  >
                    amirulhafiz1132002@gmail.com
                  </a>
                  <a
                    href="https://github.com/amirulhafiz1132002-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-cyan-500 hover:text-cyan-600 transition-colors"
                  >
                    @amirulhafiz1132002-code
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="p-8 bg-gradient-to-r from-cyan-50 via-teal-50 to-cyan-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 rounded-2xl border border-cyan-200 dark:border-cyan-900">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Let's build something amazing together!
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Explore my repositories, follow the development journey, and feel free to contribute or collaborate.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://github.com/amirulhafiz1132002-code" target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
