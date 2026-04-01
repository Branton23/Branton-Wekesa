import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Calculator, LineChart, Send, MessageCircle } from 'lucide-react';
import { projects, posts } from '../data';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:brantonwekesa8203@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="pt-12 md:pt-24 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-900 dark:text-zinc-100 transition-colors">
          Hi, I'm <br />
          <span className="text-blue-600 dark:text-emerald-400 transition-colors">Branton Wekesa.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed transition-colors">
          I'm an undergraduate student pursuing a BSc in Actuarial Science. 
          Passionate about data analysis, risk management, and applying statistical modeling to solve complex financial problems.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/portfolio" className="bg-blue-600 hover:bg-blue-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-sm">
            View My Work <ArrowRight size={18} />
          </Link>
          <Link to="/blog" className="bg-slate-200 hover:bg-slate-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-900 dark:text-zinc-100 px-6 py-3 rounded-full font-medium transition-colors shadow-sm">
            Read Blog
          </Link>
        </div>
      </section>

      {/* Skills/Services */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 rounded-2xl transition-colors">
          <div className="w-12 h-12 bg-blue-100 dark:bg-emerald-400/10 text-blue-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-4 transition-colors">
            <BarChart3 size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-zinc-100 transition-colors">Data Analysis</h3>
          <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">
            Proficient in extracting insights from complex datasets using tools like R, Python, and advanced Excel.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 rounded-2xl transition-colors">
          <div className="w-12 h-12 bg-blue-100 dark:bg-emerald-400/10 text-blue-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-4 transition-colors">
            <Calculator size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-zinc-100 transition-colors">Risk Management</h3>
          <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">
            Evaluating financial risks, understanding mortality tables, and applying probability theories to real-world scenarios.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 rounded-2xl transition-colors">
          <div className="w-12 h-12 bg-blue-100 dark:bg-emerald-400/10 text-blue-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-4 transition-colors">
            <LineChart size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-zinc-100 transition-colors">Statistical Modeling</h3>
          <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">
            Building predictive models and utilizing statistical methods to forecast future trends and financial outcomes.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 transition-colors">Featured Projects</h2>
          <Link to="/portfolio" className="text-blue-600 dark:text-emerald-400 hover:text-blue-700 dark:hover:text-emerald-300 flex items-center gap-1 text-sm font-medium transition-colors">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map(project => (
            <Link key={project.id} to={project.link} className="group block">
              <div className="relative overflow-hidden rounded-2xl mb-4 border border-slate-200 dark:border-zinc-800 shadow-sm transition-colors">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/5 dark:bg-zinc-950/20 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors text-slate-900 dark:text-zinc-100">{project.title}</h3>
              <p className="text-slate-600 dark:text-zinc-400 text-sm mb-4 transition-colors">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 rounded-full border border-slate-200 dark:border-zinc-700 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 transition-colors">Recent Posts</h2>
          <Link to="/blog" className="text-blue-600 dark:text-emerald-400 hover:text-blue-700 dark:hover:text-emerald-300 flex items-center gap-1 text-sm font-medium transition-colors">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="space-y-6">
          {posts.slice(0, 3).map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block group">
              <article className="p-6 rounded-2xl bg-white dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-zinc-500 mb-3 transition-colors">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors text-slate-900 dark:text-zinc-100">{post.title}</h3>
                <p className="text-slate-600 dark:text-zinc-400 text-sm transition-colors">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm transition-colors">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 mb-4 transition-colors">Get in Touch</h2>
          <p className="text-slate-600 dark:text-zinc-400 transition-colors">
            Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-zinc-100 transition-colors">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-emerald-400 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-zinc-100 transition-colors">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-emerald-400 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-zinc-100 transition-colors">Message</label>
            <textarea 
              id="message" 
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-emerald-400 transition-all resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Send Message <Send size={18} />
            </button>
            <a 
              href="https://wa.me/254112072446" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Chat on WhatsApp <MessageCircle size={18} />
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
