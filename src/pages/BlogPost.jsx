import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import { posts } from '../data/posts.js'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <Layout>
        <main
          data-reveal
          className="flex-grow flex flex-col justify-center items-center w-full my-10 sm:my-12 z-10 relative text-center"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-4">
            404 — Post not found
          </p>
          <Link to="/blog" className="hover-underline-animation text-accent text-sm uppercase tracking-widest">
            Back to Blog
          </Link>
        </main>
      </Layout>
    )
  }

  return (
    <Layout>
      <main
        className="flex-grow flex flex-col justify-center items-start w-full my-10 sm:my-12 md:my-16 z-10 relative"
      >
        <article data-reveal className="w-full lg:w-[65vw] max-w-[1100px] mx-auto min-w-0">
          <Link
            to="/blog"
            className="hover-underline-animation text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-accent transition-colors"
          >
            ← Back to Blog
          </Link>

          <p className="mt-8 text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400">
            {formatDate(post.date)} · {post.tag}
          </p>

          <h1 className="mt-3 font-serif italic text-[clamp(2.25rem,10vw,4.5rem)] md:text-[clamp(3rem,6vw,5rem)] lg:text-[clamp(3.5rem,4.5vw,5.5rem)] leading-[0.95] tracking-tight text-foreground break-words">
            {post.title}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-8 text-sm md:text-base leading-relaxed text-gray-600 max-w-2xl">
            {post.excerpt}
          </p>

          <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-600 max-w-2xl">
            This is placeholder body copy — swap it out for the full article, either hand-written
            here or loaded from markdown/a CMS. The layout stays true to the site's broadsheet
            system: hairline rules, a serif display headline, and generous, quiet line spacing.
          </p>
        </article>
      </main>
    </Layout>
  )
}
