import React from 'react';
import { ExternalLink, Star, GitFork, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';

export const ProjectCard = ({ project }) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    complete: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    research: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
  };

  const languageColors = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    Python: 'bg-green-500',
    Java: 'bg-red-500',
    Rust: 'bg-orange-500',
    Shell: 'bg-slate-500',
    Markdown: 'bg-gray-500'
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-cyan-500 transition-colors">
              {project.name}
            </CardTitle>
            <CardDescription className="text-sm">
              {project.description}
            </CardDescription>
          </div>
          <Badge className={`${statusColors[project.status]} border-0`}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress Bar */}
        {project.progress !== undefined && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Progress</span>
              <span className="font-semibold text-cyan-500">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
        )}

        {/* Achievement */}
        {project.achievement && (
          <div className="flex items-center gap-2 text-sm">
            <Activity className="w-4 h-4 text-teal-500" />
            <span className="text-slate-600 dark:text-slate-400">{project.achievement}</span>
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span>{project.forks}</span>
          </div>
          {project.language && (
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${languageColors[project.language] || 'bg-gray-500'}`} />
              <span>{project.language}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-cyan-200 dark:border-cyan-900 text-cyan-700 dark:text-cyan-400"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          variant="ghost"
          className="w-full group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
          asChild
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View on GitHub
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
