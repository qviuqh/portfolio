import Layout from '../components/Layout.jsx'

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

function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center justify-between gap-6 mb-7 md:mb-10">
      <p className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-accent font-semibold">
        {children}
      </p>
      <span className="text-[9px] md:text-xs tracking-[0.2em] text-gray-400">{index}</span>
    </div>
  )
}

export default function AboutMe() {
  return (
    <Layout>
      <main
        className="flex-grow flex flex-col items-center w-full my-12 md:my-16 animate-fade-in z-10 relative"
        style={{ animationDelay: '0.4s', opacity: 0 }}
      >
        <section className="w-full max-w-[90vw] lg:max-w-[75vw] min-h-[58vh] flex flex-col justify-center">
          <p className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400 mb-2 md:mb-4">
            Quang Vinh&apos;s Portfolio
          </p>

          <div className="text-left flex flex-col leading-[0.85] tracking-tighter">
            <h1 className="text-[13vw] lg:text-[11vw] font-black uppercase text-foreground">
              MORE THAN
            </h1>

            <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-6 lg:gap-x-8 pl-[5vw] lg:pl-[8vw]">
              <span className="text-[14vw] lg:text-[11vw] font-serif lowercase tracking-normal text-foreground">
                <span className="italic">just models</span>
                <span className="text-accent">.</span>
              </span>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[90vw] lg:max-w-[75vw] border-t border-foreground/10 py-12 md:py-20">
          <SectionLabel index="00">Profile</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <h2 className="md:col-span-4 font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-foreground">
              AI built for the real world<span className="text-accent">.</span>
            </h2>

            <div className="md:col-start-6 md:col-span-7 space-y-5 text-sm md:text-base leading-relaxed text-gray-600">
              <p>
                Hi there, I&apos;m Quang Vinh, an AI Engineer based in Hanoi with more than one
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

        <section className="w-full max-w-[90vw] lg:max-w-[75vw] border-t border-foreground/10 py-12 md:py-20">
          <SectionLabel index="01">Education</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-4">
              <p className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400">
                2022 — 2026
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                National Economics University
              </h2>
              <p className="mt-2 text-[9px] md:text-xs tracking-[0.2em] uppercase text-accent font-semibold">
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

        <section className="w-full max-w-[90vw] lg:max-w-[75vw] border-t border-foreground/10 py-12 md:py-20">
          <SectionLabel index="02">Experience</SectionLabel>

          <div className="flex flex-col">
            {EXPERIENCE.map((item) => (
              <article
                key={item.company}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-7 md:py-9 border-t border-foreground/10 first:border-t-0 first:pt-0"
              >
                <p className="md:col-span-4 text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-400">
                  {item.role}
                </p>
                <div className="md:col-span-8">
                  <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground">
                    {item.company}
                  </h3>
                  <p className="mt-4 max-w-3xl text-xs md:text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full max-w-[90vw] lg:max-w-[75vw] border-y border-foreground/10 py-12 md:py-20 mb-12 md:mb-20">
          <SectionLabel index="03">Selected Projects</SectionLabel>

          <div className="flex flex-col">
            {PROJECTS.map((project) => (
              <article
                key={project.number}
                className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-7 md:py-9 border-t border-foreground/10 first:border-t-0 first:pt-0"
              >
                <span className="md:col-span-1 text-[9px] md:text-xs tracking-[0.2em] text-gray-400">
                  /{project.number}
                </span>

                <div className="md:col-span-4">
                  <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-gray-400 leading-relaxed">
                    {project.tags}
                  </p>
                </div>

                <p className="md:col-start-7 md:col-span-6 text-xs md:text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
