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
        className="flex-grow flex flex-col justify-center items-center w-full my-12 animate-fade-in z-10 relative"
        style={{ animationDelay: '0.4s', opacity: 0 }}
      >
        {/* Micro text above main headline */}
        <div className="w-full max-w-[90vw] lg:max-w-[75vw] text-left mb-2 md:mb-4">
          <p className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400">
            Writing &amp; Notes
          </p>
        </div>

        {/* Massive Typography Block */}
        <div className="w-full max-w-[90vw] lg:max-w-[75vw] text-left flex flex-col leading-[0.85] tracking-tighter mb-10 md:mb-16">
          <h1 className="text-[13vw] lg:text-[11vw] font-black uppercase text-foreground">
            WORDS ON
          </h1>
          <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-6 lg:gap-x-8 pl-[5vw] lg:pl-[8vw]">
            <span className="text-[14vw] lg:text-[11vw] font-serif lowercase tracking-normal text-foreground">
              <span className="italic">the craft</span>
              <span className="text-accent">.</span>
            </span>
          </div>
        </div>

        {/* Post list */}
        <div className="w-full max-w-[90vw] lg:max-w-[75vw] flex flex-col">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-t border-foreground/10 last:border-b hover:bg-foreground/[0.03] transition-colors px-1 -mx-1"
            >
              <span className="text-[9px] md:text-xs tracking-widest uppercase text-gray-400 md:w-32 shrink-0">
                {formatDate(post.date)}
              </span>

              <div className="flex-1">
                <h2 className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground group-hover:text-accent transition-colors">
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
