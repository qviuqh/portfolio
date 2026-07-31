import Header from './Header.jsx'
import Footer from './Footer.jsx'
import NoiseOverlay from './NoiseOverlay.jsx'

export default function Layout({ children, bio }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between p-5 md:p-8 lg:p-12 font-sans selection:bg-foreground selection:text-background relative">
      <NoiseOverlay />
      <Header />
      {children}
      <Footer bio={bio} />
    </div>
  )
}
