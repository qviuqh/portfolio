import { Link } from 'react-router-dom'
import Layout from '../components/Layout.jsx'

export default function NotFound() {
  return (
    <Layout>
      <main className="flex-grow flex flex-col justify-center items-start w-full my-12 z-10 relative">
        <div className="w-full max-w-[90vw] lg:max-w-[75vw] text-left flex flex-col leading-[0.85] tracking-tighter">
          <h1 className="text-[13vw] lg:text-[11vw] font-black uppercase text-foreground">
            NOT
          </h1>
          <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-6 lg:gap-x-8 pl-[5vw] lg:pl-[8vw]">
            <span className="text-[14vw] lg:text-[11vw] font-serif lowercase tracking-normal text-foreground">
              <span className="italic">found</span>
              <span className="text-accent">.</span>
            </span>
          </div>
        </div>
        <Link
          to="/"
          className="hover-underline-animation mt-8 ml-[1vw] text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-accent transition-colors"
        >
          Back to Home
        </Link>
      </main>
    </Layout>
  )
}
