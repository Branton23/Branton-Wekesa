import { posts } from '../data';

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-zinc-100 transition-colors">Blog</h1>
        <p className="text-slate-600 dark:text-zinc-400 text-lg transition-colors">
          Thoughts, tutorials, and insights about data analysis, risk management, and actuarial science.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.id} className="group relative flex flex-col items-start justify-between bg-white dark:bg-zinc-900/30 p-6 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md dark:hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-x-4 text-xs mb-3">
              <time dateTime={post.date} className="text-slate-500 dark:text-zinc-500 transition-colors">
                {post.date}
              </time>
              <span className="text-blue-600 dark:text-emerald-400 font-medium bg-blue-100 dark:bg-emerald-400/10 px-2 py-1 rounded-full transition-colors">
                {post.readTime}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                <a href={`/blog/${post.id}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-zinc-400 transition-colors">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-x-2 text-sm font-medium text-blue-600 dark:text-emerald-400 transition-colors">
              Read article <span aria-hidden="true">&rarr;</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
