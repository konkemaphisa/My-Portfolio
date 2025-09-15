import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { ArrowDown, Download, Play } from "lucide-react"
import { useState } from "react"
import profileImage from 'figma:asset/edd7f8861637e8b93472371673b41e33b5451b36.png';

export function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm text-primary">IT Specialist & Business Analyst</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl text-primary">
                Konke Maphisa
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl text-muted-foreground">
                  Transforming Business Challenges into Innovative Technology Solutions
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-xl">
                  Rosebank College Business Information Technology graduate passionate about leveraging cloud platforms, 
                  ERP systems, and AI-driven solutions to solve real-world problems. Skilled in both technical implementation 
                  and business analysis.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToProjects} className="group">
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="group">
                    <Download className="mr-2 w-4 h-4" />
                    View Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                  <DialogHeader className="p-6">
                    <DialogTitle>Professional Resume</DialogTitle>
                    <DialogDescription>
                      Konke Maphisa - IT Specialist & Business Analyst
                    </DialogDescription>
                  </DialogHeader>
                  <div className="px-6 pb-6">
                    <div className="relative w-full">
                      <img
                        src="figma:asset/a044dbd750f7cff4e7538ec1226a2eca82defc2c.png"
                        alt="Konke Maphisa Professional Resume"
                        className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg"
                        onError={(e) => {
                          console.log('Resume image failed to load');
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Button 
                        onClick={() => setIsResumeOpen(false)}
                        variant="outline"
                        className="w-full sm:w-auto"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 w-4 h-4" />
                Watch Demo Reel
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">5</div>
                <div className="text-sm text-muted-foreground">Languages Spoken</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">2</div>
                <div className="text-sm text-muted-foreground">Core Specializations</div>
              </div>
            </div>
          </div>

          <div className="lg:flex justify-center hidden">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Konke Maphisa - IT Specialist & Business Analyst"
                  className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
                  onError={(e) => {
                    console.log('Profile image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div className="absolute top-8 -right-8 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-xl">☁️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}