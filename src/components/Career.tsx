import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { FileText, Video, Briefcase, Target, BookOpen, Users, Download, ExternalLink } from "lucide-react"

export function Career() {
  const careerMaterials = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Professional Resume",
      description: "Professionally crafted resume tailored specifically for IT Specialist and Business Analyst positions with relevant skills and achievements.",
      features: [
        "IT and business analysis focused skills section",
        "Quantified project outcomes and achievements",
        "Professional formatting optimized for ATS",
        "Tailored for entry to mid-level positions"
      ],
      status: "Ready",
      downloadUrl: "/resume-konke-maphisa-it-ba.pdf"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "LinkedIn Professional Profile",
      description: "Complete LinkedIn profile optimization with project showcases, skill endorsements, and professional networking for IT and business roles.",
      features: [
        "Compelling professional headline",
        "Detailed project case studies",
        "Skills section with relevant endorsements",
        "Professional network connections"
      ],
      status: "Updated",
      profileUrl: "https://www.linkedin.com/in/konke-maphisa-92bb11250"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Portfolio Presentation",
      description: "Comprehensive presentation covering educational background, project highlights, technical skills, and career aspirations in IT and business analysis.",
      features: [
        "Personal introduction and academic background",
        "Technical deep-dives into key projects",
        "Demonstration of problem-solving approach",
        "Future learning and career development plans"
      ],
      status: "Recorded",
      videoUrl: "/portfolio-presentation-konke-maphisa.mp4"
    }
  ]

  const jobApplicationStrategy = [
    {
      phase: "Target Identification",
      timeline: "Week 1-2",
      activities: [
        "Research IT and business analysis opportunities in South Africa",
        "Identify entry-level and graduate positions matching skill set",
        "Analyze job requirements and create application priority list",
        "Connect with Rosebank College alumni network for referrals"
      ]
    },
    {
      phase: "Application Preparation",
      timeline: "Week 2-3",
      activities: [
        "Customize resume for each target position",
        "Prepare compelling cover letters highlighting relevant projects",
        "Create portfolio links and project demonstration materials",
        "Practice technical and behavioral interview questions"
      ]
    },
    {
      phase: "Active Application",
      timeline: "Week 3-6",
      activities: [
        "Submit 10-15 applications per week to qualified positions",
        "Follow up on applications after 1-2 weeks",
        "Engage with company content on LinkedIn",
        "Attend virtual job fairs and networking events"
      ]
    },
    {
      phase: "Interview Preparation",
      timeline: "Ongoing",
      activities: [
        "Practice case study and problem-solving scenarios",
        "Prepare detailed project explanations and methodologies",
        "Research company-specific business challenges and solutions",
        "Mock interviews with mentors and career services"
      ]
    }
  ]

  const targetRoles = [
    {
      title: "Junior IT Specialist",
      description: "Entry-level position focusing on system administration and user support",
      requirements: ["Microsoft 365", "Azure", "Technical Support", "Documentation"],
      companies: ["BCX", "Dimension Data", "EOH", "Accenture"]
    },
    {
      title: "Business Analyst",
      description: "Analysis and optimization of business processes and systems",
      requirements: ["Business Analysis", "Process Modeling", "Requirements", "Communication"],
      companies: ["Standard Bank", "Discovery", "Old Mutual", "Investec"]
    },
    {
      title: "ERP Consultant",
      description: "Implementation and optimization of enterprise resource planning systems",
      requirements: ["ERP Systems", "Business Processes", "System Integration", "Change Management"],
      companies: ["SAP", "Oracle", "Microsoft", "Deloitte"]
    },
    {
      title: "IT Project Coordinator",
      description: "Coordination and support of IT projects and initiatives",
      requirements: ["Project Management", "Communication", "Documentation", "Stakeholder Management"],
      companies: ["Vodacom", "MTN", "Cell C", "Telkom"]
    }
  ]

  const professionalDevelopment = [
    {
      title: "Continuous Learning Plan",
      items: [
        "Complete Microsoft Azure Fundamentals certification by Q2 2024",
        "Pursue Business Analysis certification (IIBA)",
        "Develop expertise in Power Platform and automation",
        "Attend 4+ IT and business conferences annually"
      ]
    },
    {
      title: "Network Building",
      items: [
        "Join IT and business analysis professional associations",
        "Engage with tech community through LinkedIn and forums",
        "Mentor upcoming Rosebank College students",
        "Build relationships with industry professionals and recruiters"
      ]
    },
    {
      title: "Skill Enhancement",
      items: [
        "Deepen expertise in cloud technologies and digital transformation",
        "Learn emerging technologies (AI integration, automation)",
        "Develop advanced project management and leadership skills",
        "Improve presentation and stakeholder management abilities"
      ]
    }
  ]

  return (
    <section id="career" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Career Ready</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Career Materials & Strategy</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive career preparation materials and strategic approach for securing IT Specialist and 
            Business Analyst positions, tailored for the South African technology market.
          </p>
        </div>

        {/* Career Materials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {careerMaterials.map((material, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {material.icon}
                    </div>
                    <h3 className="text-lg text-primary">{material.title}</h3>
                  </div>
                  <Badge variant={material.status === 'Ready' ? 'default' : 'secondary'}>
                    {material.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground text-sm">{material.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {material.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  {material.downloadUrl && (
                    <Button size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                  {material.profileUrl && (
                    <Button size="sm" className="w-full" asChild>
                      <a href={material.profileUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Profile
                      </a>
                    </Button>
                  )}
                  {material.videoUrl && (
                    <Button size="sm" className="w-full">
                      <Video className="w-4 h-4 mr-2" />
                      Watch Presentation
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Job Application Strategy */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-primary">Job Application Strategy</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobApplicationStrategy.map((phase, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-lg text-primary mb-2">{phase.phase}</h4>
                    <Badge variant="outline">{phase.timeline}</Badge>
                  </div>
                  
                  <Separator />
                  
                  <ul className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Roles */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-primary">Target Roles & Companies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {targetRoles.map((role, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg text-primary mb-2">{role.title}</h4>
                    <p className="text-muted-foreground text-sm">{role.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm text-primary">Key Requirements:</h5>
                    <div className="flex flex-wrap gap-2">
                      {role.requirements.map((req) => (
                        <Badge key={req} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm text-primary">Target Companies:</h5>
                    <p className="text-sm text-muted-foreground">{role.companies.join(", ")}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Development */}
        <div>
          <h3 className="text-2xl mb-8 text-center text-primary">Professional Development Plan</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {professionalDevelopment.map((area, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-primary" />
                    <h4 className="text-lg text-primary">{area.title}</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Ready to take the next step in my IT and business analysis career journey. All materials are prepared and 
            optimized for successful job applications in the South African technology market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <FileText className="w-5 h-5 mr-2" />
              Download Complete Portfolio
            </Button>
            <Button variant="outline" size="lg">
              <Briefcase className="w-5 h-5 mr-2" />
              Schedule Career Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}