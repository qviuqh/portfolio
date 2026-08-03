import { Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import AboutUs from './pages/AboutUs.jsx'
import NotFound from './pages/NotFound.jsx'
import GraduationCeremony from './pages/GraduationCeremony.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/graduation-ceremony" element={<GraduationCeremony />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
