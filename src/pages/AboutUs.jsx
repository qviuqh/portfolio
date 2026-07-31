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
        className="flex-grow flex flex-col justify-center items-center w-full my-12 animate-fade-in z-10 relative"
        style={{ animationDelay: '0.4s', opacity: 0 }}
      >
        {/* Micro text above main headline */}
        <div className="w-full max-w-[90vw] lg:max-w-[75vw] text-left mb-2 md:mb-4">
          <p className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400">
            Who We Are
          </p>
        </div>

        {/* Massive Typography Block */}
        <div className="w-full max-w-[90vw] lg:max-w-[75vw] text-left flex flex-col leading-[0.85] tracking-tighter mb-10 md:mb-16">
          <h1 className="text-[13vw] lg:text-[11vw] font-black uppercase text-foreground">
            BUILT WITH
          </h1>
          <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-6 lg:gap-x-8 pl-[5vw] lg:pl-[8vw]">
            <span className="text-[14vw] lg:text-[11vw] font-serif lowercase tracking-normal text-foreground">
              <span className="italic">good people</span>
              <span className="text-accent">.</span>
            </span>
          </div>
        </div>

        {/* Values grid */}
        <div className="w-full max-w-[90vw] lg:max-w-[75vw] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-foreground/10 pt-8">
          {VALUES.map((v) => (
            <div key={v.label} className="flex flex-col gap-2">
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
