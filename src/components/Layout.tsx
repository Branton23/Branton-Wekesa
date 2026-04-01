import { Link, useLocation } from 'react-router-dom';
import { Github, Twitter, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 font-sans flex flex-col transition-colors duration-300">
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-50/80 dark:bg-zinc-950/80 border-b border-slate-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter">
            Branton<span className="text-blue-600 dark:text-emerald-400">Wekesa</span>
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-emerald-400 ${
                  location.pathname === link.path 
                    ? 'text-blue-600 dark:text-emerald-400' 
                    : 'text-slate-600 dark:text-zinc-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors text-slate-600 dark:text-zinc-400"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t border-slate-200 dark:border-zinc-800 py-8 mt-12 transition-colors duration-300">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-zinc-500 text-sm">
            © {new Date().getFullYear()} Branton Wekesa. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 dark:text-zinc-500">
            <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://twitter.com/placeholder" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
