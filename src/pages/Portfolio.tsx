import { projects } from '../data';
import { FileText } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-zinc-100 transition-colors">Portfolio</h1>
          <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-2xl transition-colors">
            A collection of my recent work, side projects, and open source contributions.
          </p>
        </div>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 px-6 py-3 rounded-xl font-medium transition-colors shadow-sm whitespace-nowrap"
        >
          <FileText size={18} />
          View Resume
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <a key={project.id} href={project.link} className="group flex flex-col h-full">
            <div className="relative overflow-hidden rounded-2xl mb-4 border border-slate-200 dark:border-zinc-800 shadow-sm flex-shrink-0 transition-colors">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors text-slate-900 dark:text-zinc-100">{project.title}</h3>
              <p className="text-slate-600 dark:text-zinc-400 text-sm mb-4 flex-1 transition-colors">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 rounded-full border border-slate-200 dark:border-zinc-700 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
