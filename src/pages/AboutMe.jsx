import Layout from '../components/Layout.jsx'
import TechnologyMarquee from '../components/TechnologyMarquee.jsx'
import profileImage from '../../assets/Qvinh-01-01.svg'

const EXPERIENCE = [
  {
    company: 'Viettel Information Center',
    role: 'Intern AI Engineer',
    description:
      'Researching and developing enterprise AI solutions involving Retrieval-Augmented Generation, AI agents, and internal knowledge systems. The work focuses on context-aware workflows, connecting language models with private data sources, and maintaining access control, data security, and system performance.',
  },
  {
    company: 'FPT Software',
    role: 'Associate AI Engineer',
    description:
      'Contributing to the research, development, and integration of AI solutions for enterprise systems, including backend development and support for AI/ML deployment and operations. The role centers on scalable AI services, production model integration, and dependable system performance in real-world environments.',
  },
]

const PROJECTS = [
  {
    number: '01',
    title: 'Education Chatbot',
    tags: 'RAG · LLM · Information Retrieval',
    description:
      'An educational chatbot built with a hybrid Retrieval-Augmented Generation pipeline that combines traditional information retrieval with large language models. Retrieved domain knowledge grounds each response, improving accuracy, contextual relevance, reliability, and explainability.',
  },
  {
    number: '02',
    title: 'Attendance Checking System',
    tags: 'Computer Vision · MLOps · Face Recognition',
    description:
      'An end-to-end facial recognition system with automated retraining and experiment tracking. The pipeline combines face detection and identification with MLOps practices for performance monitoring, experiment management, and continuous improvement as new data becomes available.',
  },
  {
    number: '03',
    title: 'Multimodal Fashion Recommendation System',
    tags: 'Multimodal AI · Embeddings · Recommendation',
    description:
      'A personalized fashion recommendation system that brings visual and textual features together. Image embeddings and product descriptions provide a richer understanding of user preferences and item similarity, enabling more accurate and context-aware recommendations.',
  },
]

function SectionLabel({ children }) {
  return (
    <div
      data-reveal
      className="flex w-full items-start sm:items-center gap-3 sm:gap-5 md:gap-7 mb-8 sm:mb-10 md:mb-12"
    >
      <h2 className="shrink-0 text-[clamp(2rem,9vw,3rem)] md:text-[clamp(3rem,5vw,4rem)] lg:text-[clamp(3.5rem,4.5vw,4.5rem)] font-black uppercase leading-[0.85] tracking-[-0.055em] text-foreground">
        <span className="text-accent">.</span>{children}
      </h2>

      <span aria-hidden="true" className="hidden sm:block h-px flex-1 bg-foreground/15" />
    </div>
  )
}

export default function AboutMe() {
  return (
    <Layout>
      <main
        className="flex-grow flex flex-col items-center w-full my-10 sm:my-12 md:my-16 z-10 relative"
      >
        <section data-reveal className="w-full lg:w-[75vw] max-w-[1440px] min-h-[50svh] sm:min-h-[58svh] flex flex-col justify-center">
          <p className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400 mb-2 md:mb-4">
            Quang Vinh&apos;s Portfolio
          </p>

          <div className="text-left flex flex-col leading-[0.85] tracking-tighter">
            <h1 className="text-[clamp(2.5rem,13vw,11rem)] lg:text-[clamp(5rem,11vw,11rem)] font-black uppercase text-foreground whitespace-nowrap">
              MORE THAN
            </h1>

            <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-6 lg:gap-x-8 pl-[5vw] lg:pl-[8vw]">
              <span className="text-[clamp(2.7rem,14vw,11rem)] lg:text-[clamp(5rem,11vw,11rem)] font-serif lowercase tracking-normal text-foreground whitespace-nowrap">
                <span className="italic">just models</span>
                <span className="text-accent">.</span>
              </span>
            </div>
          </div>
        </section>

        <section className="w-full lg:w-[75vw] max-w-[1440px] py-10 sm:py-12 md:py-20">
          <SectionLabel>Profile</SectionLabel>

          <div data-reveal className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-end">
            <figure className="md:col-span-4 mx-auto md:mx-0">
              <img
                src={profileImage}
                alt="Quang Vinh"
                className="block w-full max-w-sm md:max-w-none h-auto"
              />
            </figure>

            <div className="md:col-start-4.5 md:col-span-8 space-y-5 text-sm md:text-base leading-relaxed text-gray-600">
              <p className="font-serif font-bold italic text-accent text-2xl md:text-3xl lg:text-4xl">
                Hi there,
              </p>
              <p>
                I&apos;m <span className="font-serif font-bold">Quang Vinh</span>, an AI Engineer based in Hanoi with more than one
                year of experience building practical AI products that go beyond experimental
                demos.
              </p>
              <p>
                My work sits at the intersection of Generative AI, backend engineering, and
                MLOps, where I develop RAG systems, AI agents, and end-to-end machine learning
                pipelines.
              </p>
              <p>
                I&apos;m especially interested in the challenges that arise after a model starts
                working: improving retrieval quality, evaluating outputs, designing reliable
                system architectures, protecting user data, and deploying solutions that create
                measurable value in real-world environments.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full lg:w-[75vw] max-w-[1440px] py-8 sm:py-10 md:py-16">
          <SectionLabel>Education</SectionLabel>

          <div data-reveal className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-3 py-3">
              <p className="text-sm md:text-base tracking-[0.2em] uppercase font-bold leading-snug">
                <span className="highlight">2022 - 2026</span>
              </p>
            </div>

            <div className="md:col-span-9 min-w-0">
              <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground break-words">
                National Economics University
              </h3>
              <p className="mt-3 md:mt-4 md:col-span-4 text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-700">
                Bachelor of Data Science in Economics and Business
              </p>

              <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 text-xs md:text-sm leading-relaxed text-gray-600">
                <p>
                  Graduated with a strong academic foundation in statistics, machine learning,
                  deep learning, computer vision, natural language processing, and data
                  visualization.
                </p>
                <p>
                  Achieved a GPA of <span className="text-foreground font-semibold">3.66/4.0</span>{' '}
                  and earned scholarships in{' '}
                  <span className="text-foreground font-semibold">3 of 7 academic terms</span>,
                  reflecting consistent academic performance and dedication.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full lg:w-[75vw] max-w-[1440px] py-8 sm:py-10 md:py-16">
          <SectionLabel>Experience</SectionLabel>

          <div className="flex flex-col">
            {EXPERIENCE.map((item) => (
              <article
                key={item.company}
                data-reveal
                className="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-4 md:py-5 first:pt-0 before:absolute before:inset-x-0 before:top-0 before:h-px before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-foreground/15 before:to-transparent first:before:hidden"
              >
                <div className="md:col-span-8 min-w-0">
                  <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground break-words">
                    {item.company}
                  </h3>
                  <p className="mt-3 md:mt-4 md:col-span-4 text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-700">
                    {item.role}
                  </p>
                  <p className="mt-4 max-w-3xl text-xs md:text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full lg:w-[75vw] max-w-[1440px] py-8 sm:py-10 md:py-16 mb-8 sm:mb-10 md:mb-16">
          <SectionLabel>Projects</SectionLabel>

          <div className="flex flex-col">
            {PROJECTS.map((project) => (
              <article
                key={project.number}
                data-reveal
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-4 md:py-5 first:pt-0 before:absolute before:inset-x-0 before:top-0 before:h-px before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-foreground/15 before:to-transparent first:before:hidden"
              >
                <div className="md:col-span-6 min-w-0">
                  <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground break-words group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-gray-400 leading-relaxed">
                    {project.tags}
                  </p>
                </div>

                <p className="md:col-start-7 md:col-span-8 text-xs md:text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <TechnologyMarquee />
    </Layout>
  )
}
