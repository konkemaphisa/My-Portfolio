import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Career } from "./components/Career"
import { Contact } from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Career />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Konke Maphisa. Built with React and Tailwind CSS. 
            Proudly educated by <a href="https://www.rosebankcollege.co.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rosebank College</a>.
          </p>
        </div>
      </footer>
    </div>
  )
}