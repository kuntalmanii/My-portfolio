import {
  Navbar,
  Hero,
  Capabilities,
  FeaturedProjects,
  Playground,
  Footer,
} from './components'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111827]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <FeaturedProjects />
        <Playground />
      </main>
      <Footer />
    </div>
  )
}
