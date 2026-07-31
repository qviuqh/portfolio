import { Link } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import { posts } from '../data/posts.js'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
}

export default function Blog() {
  return (
    <Layout>
      <main
        className="flex-grow flex flex-col justify-center items-center w-full my-10 sm:my-12 md:my-16 z-10 relative"
      >
        {/* Micro text above main headline */}
        <div data-reveal className="w-full lg:w-[75vw] max-w-[1440px] text-left mb-2 md:mb-4">
          <p className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400">
            Writing &amp; Notes
          </p>
        </div>

        {/* Massive Typography Block */}
        <div data-reveal style={{ '--reveal-delay': '80ms' }} className="w-full lg:w-[75vw] max-w-[1440px] text-left flex flex-col leading-[0.85] tracking-tighter mb-10 md:mb-16">
          <h1 className="text-[clamp(2.5rem,13vw,11rem)] lg:text-[clamp(5rem,11vw,11rem)] font-black uppercase text-foreground whitespace-nowrap">
            WORDS ON
          </h1>
          <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-6 lg:gap-x-8 pl-[5vw] lg:pl-[8vw]">
            <span className="text-[clamp(2.7rem,14vw,11rem)] lg:text-[clamp(5rem,11vw,11rem)] font-serif lowercase tracking-normal text-foreground whitespace-nowrap">
              <span className="italic">the craft</span>
              <span className="text-accent">.</span>
            </span>
          </div>
        </div>

        {/* Post list */}
        <div className="w-full lg:w-[75vw] max-w-[1440px] flex flex-col">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i, 4) * 70}ms` }}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-t border-foreground/10 last:border-b hover:bg-foreground/[0.03] transition-colors px-1 -mx-1"
            >
              <span className="text-[9px] md:text-xs tracking-widest uppercase text-gray-400 md:w-32 shrink-0">
                {formatDate(post.date)}
              </span>

              <div className="flex-1 min-w-0">
                <h2 className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground break-words group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs md:text-sm text-gray-600 max-w-2xl leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <span className="text-[9px] md:text-xs tracking-widest uppercase text-gray-400 shrink-0">
                {post.tag}
              </span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}
