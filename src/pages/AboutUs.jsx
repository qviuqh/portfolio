import Layout from '../components/Layout.jsx'

const VALUES = [
  {
    label: 'CRAFT',
    text: 'We treat models as materials, not magic — every product decision is grounded in what the system can actually do.',
  },
  {
    label: 'CLARITY',
    text: 'Complex systems deserve simple explanations. If it can\u2019t be explained plainly, it isn\u2019t understood yet.',
  },
  {
    label: 'CANDOR',
    text: 'We say what a model is good at, and just as clearly, what it is not.',
  },
]

export default function AboutUs() {
  return (
    <Layout
      bio={
        <>
          A small studio exploring what{' '}
          <span className="font-serif italic text-foreground text-base">AI engineering</span> looks
          like when it is treated as a craft, not a pipeline.
        </>
      }
    >
      <main
        className="flex-grow flex flex-col justify-center items-center w-full my-10 sm:my-12 md:my-16 z-10 relative"
      >
        {/* Micro text above main headline */}
        <div data-reveal className="w-full lg:w-[75vw] max-w-[1440px] text-left mb-2 md:mb-4">
          <p className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400">
            Who We Are
          </p>
        </div>

        {/* Massive Typography Block */}
        <div data-reveal style={{ '--reveal-delay': '80ms' }} className="w-full lg:w-[75vw] max-w-[1440px] text-left flex flex-col leading-[0.85] tracking-tighter mb-10 md:mb-16">
          <h1 className="text-[clamp(2.5rem,13vw,11rem)] lg:text-[clamp(5rem,11vw,11rem)] font-black uppercase text-foreground whitespace-nowrap">
            BUILT WITH
          </h1>
          <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-6 lg:gap-x-8 pl-[5vw] lg:pl-[8vw]">
            <span className="text-[clamp(2.7rem,14vw,11rem)] lg:text-[clamp(5rem,11vw,11rem)] font-serif lowercase tracking-normal text-foreground whitespace-nowrap">
              <span className="italic">good people</span>
              <span className="text-accent">.</span>
            </span>
          </div>
        </div>

        {/* Values grid */}
        <div className="w-full lg:w-[75vw] max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 border-t border-foreground/10 pt-8">
          {VALUES.map((v, index) => (
            <div
              key={v.label}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
              className="flex flex-col gap-2"
            >
              <span className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-accent font-semibold">
                {v.label}
              </span>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">{v.text}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
