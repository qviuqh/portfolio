import { useEffect, useRef } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import NoiseOverlay from './NoiseOverlay.jsx'

export default function Layout({ children, bio }) {
  const layoutRef = useRef(null)

  useEffect(() => {
    const elements = layoutRef.current?.querySelectorAll('[data-reveal]') ?? []

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={layoutRef}
      className="scroll-reveal-scope min-h-screen min-h-[100dvh] w-full overflow-x-clip flex flex-col justify-between px-4 py-5 sm:p-6 md:p-8 lg:p-12 font-sans selection:bg-foreground selection:text-background relative"
    >
      <NoiseOverlay />
      <Header />
      {children}
      <Footer bio={bio} />
    </div>
  )
}
