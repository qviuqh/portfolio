export default function Footer({ bio }) {
  return (
    <footer
      data-reveal
      className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 md:gap-10 border-t border-foreground/10 pt-8 md:pt-10"
    >
      {/* Left: Bio */}
      <div className="w-full max-w-sm md:max-w-xs text-xs md:text-sm leading-relaxed text-gray-600 font-medium">
        {bio}
      </div>

      {/* Right: Meta Data Grid */}
      <div className="grid grid-cols-2 gap-x-8 text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase font-semibold text-gray-400 w-full md:w-auto">
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] text-foreground">LOCATE</span>
          <span className="text-foreground pt-3">Hanoi, Vietnam</span>
        </div>

        <div className="flex flex-col items-start space-y-1 text-left">
          <span className="text-[8px] text-foreground">SOCIALS</span>
          <div className="flex flex-1 gap-5 justify-start text-foreground">
            {/* Mail */}
            <a
              href="mailto:tqvinh.neu@gmail.com"
              className="inline-flex h-8 w-8 items-center justify-center hover:text-accent hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/quang-vinh-th%C3%A2n-376b77276/"
              className="inline-flex h-8 w-8 items-center justify-center hover:text-accent hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/qviuqh"
              className="inline-flex h-8 w-8 items-center justify-center hover:text-accent hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  bio: (
    <>
      I'm open to <span className="font-serif italic text-foreground text-base">AI Engineer</span> and{' '}
      <span className="font-serif italic text-foreground text-base">AI Software Engineer</span> opportunities,
      collaborations, and technical discussions.
    </>
  ),
}
