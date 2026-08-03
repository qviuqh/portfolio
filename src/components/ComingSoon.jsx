import Layout from './Layout.jsx'

export default function ComingSoon({ section }) {
  return (
    <Layout>
      <main className="relative z-10 flex w-full flex-grow flex-col items-center justify-center py-16 sm:py-20 md:py-24">
        <section
          data-reveal
          className="flex w-full max-w-[1440px] flex-col text-left lg:w-[75vw]"
        >
          <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-gray-400 md:mb-4 md:text-xs">
            {section}
          </p>

          <h1 className="flex flex-col leading-[0.85] tracking-tighter text-foreground">
            <span className="whitespace-nowrap text-[clamp(3rem,15vw,11rem)] font-black uppercase lg:text-[clamp(5rem,11vw,11rem)]">
              Coming
            </span>
            <span className="pl-[5vw] font-serif text-[clamp(3.2rem,16vw,11rem)] lowercase tracking-normal lg:pl-[8vw] lg:text-[clamp(5rem,11vw,11rem)]">
              <span className="italic">soon</span>
              <span className="text-accent">.</span>
            </span>
          </h1>
        </section>
      </main>
    </Layout>
  )
}
