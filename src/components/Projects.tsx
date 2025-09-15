import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { ExternalLink, Github, Play, X } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { useState } from "react"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const featuredProjects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    githubUrl: string;
    liveUrl: string;
    videoUrl?: string;
    videoEmbedUrl?: string;
    documentationUrl?: string;
    features: string[];
  }> = [
    {
      id: 1,
      title: "AI Study Buddy",
      description: "An educational no-code chatbot designed to help students understand AI fundamentals. Features interactive quizzes and personalized learning support to enhance student engagement and comprehension.",
      image: "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGVlcCUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NzQwMDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Chatbot Platform", "Figma", "No-code AI", "Educational Design"],
      category: "Educational Technology",
      githubUrl: "https://github.com/konkemaphisa/ai-study-buddy",
      liveUrl: "https://medimindv2.netlify.app/",
      videoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/lindiwe_mkuzangwe_capaciti_org_za/EZu9LYDqPnRPnktKAWiWmZwBzYTY0jX58joiidLhv-EdEg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=hwpacw",
      videoEmbedUrl: "https://capeitinitiative-my.sharepoint.com/personal/lindiwe_mkuzangwe_capaciti_org_za/_layouts/15/embed.aspx?UniqueId=6abd7d41-3fea-174f-9e4b-5010689499c0",
      documentationUrl: "https://magenta-valentina-8.tiiny.site/",
      features: [
        "Interactive AI fundamentals tutorials",
        "Personalized learning pathways",
        "Progress tracking and analytics",
        "Multi-modal learning support"
      ]
    },
    {
      id: 2,
      title: "MediMind AI",
      description: "A healthcare-focused chatbot that provides healthcare workers with an AI-powered assistant for sentiment analysis and decision support, improving patient care and workflow efficiency.",
      image: "https://images.unsplash.com/photo-1612198273689-b437f53152ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0cyUyMGdyYXBoc3xlbnwxfHx8fDE3NTczOTE4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Chatbot Framework", "Sentiment Analysis", "Healthcare APIs"],
      category: "Healthcare Technology",
      githubUrl: "https://github.com/konkemaphisa/medimind-ai",
      liveUrl: "https://garb-hut-44763277.figma.site/",
      videoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/konke_maphisa_capaciti_org_za/EYWGk5qoXRRBt8IEDiWh6hkBE9NavcnXvwlNRULdytgFPw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=dWRgFk",
      features: [
        "Real-time sentiment analysis",
        "Healthcare decision support",
        "Patient interaction monitoring",
        "Integration with healthcare systems"
      ]
    },
    {
      id: 3,
      title: "Learnly",
      description: "An intelligent educational chatbot designed to enhance learning experiences through personalized AI-powered conversations. Built using Chatbase platform to provide students with instant support and guidance.",
      image: "https://images.unsplash.com/photo-1682941664177-7920d0e59418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMGNoYXRib3QlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTc1NzcwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Chatbase", "AI Conversation", "Educational Design", "Natural Language Processing"],
      category: "Educational Technology",
      githubUrl: "https://github.com/konkemaphisa/learnly-chatbot",
      liveUrl: "https://www.chatbase.co/chatbot-iframe/3J84m0g-_D8FwGeW0YBuq",
      videoUrl: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/konke_maphisa_capaciti_org_za/EbR-pOv4lk5JgYa1ZGtOof0B_zMIGWcg3Gh-jRU5QZ_wRw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=gLyYVD",
      documentationUrl: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/konke_maphisa_capaciti_org_za/Edayg-Rz1yFLp9Z2ZOI30QwBxS7lTns21GaLtCvTve9tNg?e=5pPBVX",
      features: [
        "Personalized learning conversations",
        "Instant student support and guidance",
        "AI-powered educational assistance",
        "Interactive knowledge exploration"
      ]
    }
  ]

  const additionalProjects = [
    {
      title: "ERP System Evaluation",
      description: "Comprehensive evaluation of enterprise resource planning systems for manufacturing companies",
      technologies: ["Business Analysis", "ERP Systems", "Excel", "Process Modeling"],
      category: "Business Analysis"
    },
    {
      title: "Retail IT Solutions Case Study",
      description: "Business challenges identification and IT-based solution recommendations for retail operations",
      technologies: ["Business Analysis", "Survey Design", "Process Improvement", "IT Strategy"],
      category: "Business Consulting"
    },
    {
      title: "Business Process Automation",
      description: "Automated workflow solutions using Microsoft Power Platform",
      technologies: ["Power Automate", "SharePoint", "Forms"],
      category: "Process Optimization"
    },
    {
      title: "Cloud Migration Assessment",
      description: "Azure cloud readiness evaluation for small businesses",
      technologies: ["Azure", "Assessment Tools", "Migration Planning"],
      category: "Cloud Solutions"
    },
    {
      title: "Customer Feedback Analysis",
      description: "Sentiment analysis dashboard for retail feedback",
      technologies: ["Python", "Data Visualization", "Analytics"],
      category: "Data Analysis"
    },
    {
      title: "Digital Transformation Roadmap",
      description: "Strategic planning for SME digital transformation",
      technologies: ["Business Strategy", "Technology Planning"],
      category: "Strategic Planning"
    },
    {
      title: "Inventory Management System",
      description: "Database design and optimization for retail inventory",
      technologies: ["SQL", "Database Design", "Reporting"],
      category: "Database Solutions"
    },
    {
      title: "User Experience Evaluation",
      description: "UX assessment and improvement recommendations",
      technologies: ["UX Research", "Prototyping", "Testing"],
      category: "User Experience"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world IT solutions and business analysis projects that demonstrate expertise 
            in bridging technology and business needs to create value and drive innovation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-2 flex-wrap">
                {/* Try Project Button - Always first */}
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Try Project
                  </a>
                </Button>

                {/* Demo Video Button for projects with video */}
                {project.videoUrl && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-1" />
                        Demo Video
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh]">
                      <DialogHeader>
                        <DialogTitle>{project.title} - Demo Video</DialogTitle>
                        <DialogDescription>
                          Watch a comprehensive demonstration of the {project.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex-1 w-full h-full">
                        <div className="space-y-4">
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-2">
                              Click the link below to view the {project.title} demo video:
                            </p>
                            <Button asChild className="w-full">
                              <a 
                                href={project.videoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                <Play className="w-4 h-4 mr-2" />
                                Open Demo Video in SharePoint
                              </a>
                            </Button>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-sm text-primary">About this demo:</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {project.id === 1 ? (
                                <>
                                  <li>• Interactive AI fundamentals learning experience</li>
                                  <li>• No-code chatbot implementation</li>
                                  <li>• Personalized student engagement features</li>
                                  <li>• Educational content delivery system</li>
                                </>
                              ) : project.id === 2 ? (
                                <>
                                  <li>• Healthcare-focused AI assistant demonstration</li>
                                  <li>• Sentiment analysis capabilities</li>
                                  <li>• Decision support for healthcare workers</li>
                                  <li>• Patient care workflow optimization</li>
                                </>
                              ) : (
                                <>
                                  <li>• Educational chatbot demonstration</li>
                                  <li>• AI-powered learning conversations</li>
                                  <li>• Student support and guidance features</li>
                                  <li>• Interactive knowledge exploration</li>
                                </>
                              )}
                            </ul>
                          </div>
                          
                          <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                            <p className="text-xs text-amber-800 dark:text-amber-200">
                              📝 Note: This video is hosted on SharePoint and will open in a new tab. You may need to sign in with appropriate credentials.
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                {/* Interactive Chatbot for Learnly only */}
                {project.id === 3 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-1" />
                        Try Chatbot
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh]">
                      <DialogHeader>
                        <DialogTitle>{project.title} - Interactive Demo</DialogTitle>
                        <DialogDescription>
                          Interact directly with the Learnly educational chatbot in this live demonstration
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex-1 w-full h-full">
                        <iframe
                          src={project.liveUrl}
                          width="100%"
                          height="100%"
                          className="rounded-lg border-0"
                          title={`${project.title} Interactive Demo`}
                          allow="microphone"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
                {project.documentationUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Docs
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-2xl mb-8 text-center text-primary">Additional Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg text-primary">{project.title}</h4>
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work? Visit my GitHub profile for the complete collection.
          </p>
          <Button size="lg" asChild>
            <a href="https://github.com/konkemaphisa" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}