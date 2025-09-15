import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { Cloud, Code, Database, Users, BarChart, Briefcase, BookOpen } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & Microsoft Technologies",
      skills: [
        { name: "Microsoft 365", level: 85, description: "Teams, SharePoint, Power Platform, Office Suite" },
        { name: "Azure Fundamentals", level: 75, description: "Cloud services, virtual machines, storage solutions" },
        { name: "Power Platform", level: 80, description: "Power BI, Power Automate, Power Apps" },
        { name: "SharePoint", level: 70, description: "Document management, collaboration, workflows" },
        { name: "Teams Administration", level: 75, description: "User management, security, integration" },
        { name: "Cloud Migration", level: 65, description: "Assessment, planning, implementation strategies" }
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Analysis & ERP",
      skills: [
        { name: "Enterprise Resource Planning", level: 90, description: "SAP, Oracle, Microsoft Dynamics, NetSuite implementation" },
        { name: "System Analysis and Design", level: 85, description: "Requirements gathering, system architecture, design patterns" },
        { name: "IT Project Management", level: 80, description: "Project planning, resource allocation, timeline management" },
        { name: "IT Risk Management", level: 75, description: "Risk assessment, security protocols, compliance management" },
        { name: "Business Analysis (Agile Methodologies)", level: 85, description: "Agile/Scrum, user stories, sprint planning, stakeholder collaboration" },
        { name: "Business Process Modeling", level: 85, description: "BPMN, workflow design, process optimization" },
        { name: "Requirements Analysis", level: 80, description: "Stakeholder interviews, documentation, validation" },
        { name: "System Integration", level: 75, description: "API design, data mapping, integration planning" },
        { name: "Cost-Benefit Analysis", level: 85, description: "ROI calculation, risk assessment, budgeting" },
        { name: "Change Management", level: 70, description: "Training design, adoption strategies, communication" }
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Development",
      skills: [
        { name: "Python Programming", level: 75, description: "Automation, data analysis, chatbot development" },
        { name: "Chatbot Development", level: 80, description: "No-code platforms, conversational AI, NLP" },
        { name: "Database Management (SQL)", level: 75, description: "SQL Server, data modeling, query optimization, database design" },
        { name: "Java Programming", level: 70, description: "Object-oriented programming, application development" },
        { name: "Web Development (HTML, CSS, JavaScript)", level: 75, description: "Frontend development, responsive design, interactive features" },
        { name: "API Integration", level: 70, description: "REST APIs, webhooks, third-party integrations" },
        { name: "Automation Tools", level: 75, description: "RPA, workflow automation, scripting" }
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Data Analysis", level: 80, description: "Excel, Power BI, statistical analysis" },
        { name: "Data Visualization", level: 85, description: "Charts, dashboards, reporting, storytelling" },
        { name: "Survey Design", level: 75, description: "Questionnaire design, data collection, analysis" },
        { name: "Business Intelligence", level: 70, description: "KPI development, metrics, performance tracking" },
        { name: "Excel Advanced", level: 90, description: "Pivot tables, macros, advanced formulas, modeling" },
        { name: "Reporting & Documentation", level: 85, description: "Technical writing, process documentation" }
      ]
    }
  ]

  const softSkills = [
    {
      category: "Communication & Languages",
      items: [
        "Multilingual proficiency (5 languages: Zulu, English, Pedi, Sotho, Setswana)",
        "Technical documentation and reporting",
        "Stakeholder presentation and engagement",
        "Cross-cultural communication",
        "Business requirement translation",
        "Training and knowledge transfer",
        "Effective communication across diverse stakeholders"
      ]
    },
    {
      category: "Problem-Solving & Analysis",
      items: [
        "Critical thinking and analytical reasoning",
        "Root cause analysis and troubleshooting",
        "Creative solution development",
        "Data-driven decision making",
        "Process improvement identification",
        "Risk assessment and mitigation",
        "Strong analytical skills and systematic problem-solving"
      ]
    },
    {
      category: "Teamwork & Collaboration",
      items: [
        "Cross-functional team collaboration",
        "Agile methodology participation",
        "Conflict resolution and mediation",
        "Mentoring and peer support",
        "Cultural sensitivity and inclusion",
        "Remote and hybrid work effectiveness"
      ]
    },
    {
      category: "Project & Business Skills",
      items: [
        "Project planning and coordination",
        "Time management and prioritization",
        "Business process understanding",
        "Customer service orientation",
        "Adaptability and continuous learning",
        "Quality assurance and attention to detail"
      ]
    }
  ]

  const certifications = [
    {
      name: "Business Information Technology",
      issuer: "Rosebank College",
      date: "2024",
      status: "Completed"
    },
    {
      name: "AI For Everyone",
      issuer: "Coursera",
      date: "Aug 8, 2025",
      status: "Completed"
    },
    {
      name: "Introduction to Artificial Intelligence (AI)",
      issuer: "Coursera",
      date: "Aug 8, 2025",
      status: "Completed"
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Coursera",
      date: "Aug 8, 2025",
      status: "Completed"
    },
    {
      name: "AI Essentials",
      issuer: "Coursera",
      date: "Aug 11, 2025",
      status: "Completed"
    },
    {
      name: "Python for Data Science, AI & Development",
      issuer: "Coursera",
      date: "Aug 20, 2025",
      status: "Completed"
    },
    {
      name: "Building AI Powered Chatbots Without Programming",
      issuer: "Coursera",
      date: "Aug 12, 2025",
      status: "Completed"
    },
    {
      name: "Generative AI with Large Language Models",
      issuer: "Coursera",
      date: "Aug 20, 2025",
      status: "Completed"
    },
    {
      name: "Introduction to Responsible AI",
      issuer: "Coursera",
      date: "Aug 1, 2025",
      status: "Completed"
    },
    {
      name: "Trustworthy AI: Managing Bias, Ethics, and Accountability",
      issuer: "Coursera",
      date: "Aug 13, 2025",
      status: "Completed"
    },
    {
      name: "Artificial Intelligence on Microsoft Azure",
      issuer: "Microsoft",
      date: "Sep 4, 2025",
      status: "Completed"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technical Expertise</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Skills & Competencies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical and business skills developed through academic study, professional certifications, and hands-on project experience, 
            covering business analysis, IT systems, AI technologies, and emerging digital solutions.
          </p>
        </div>

        {/* Technical Skills by Category */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl text-primary">{category.title}</h3>
                </div>
              </CardHeader>
              
              <CardContent className="p-0 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-primary">Professional Competencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {softSkills.map((competency, index) => (
              <Card key={index} className="p-6">
                <h4 className="text-lg mb-4 text-primary">{competency.category}</h4>
                <div className="grid gap-3">
                  {competency.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl mb-8 text-center text-primary">Education & Certifications</h3>
          
          {/* Education */}
          <div className="mb-8">
            <h4 className="text-lg mb-4 text-primary text-center">Academic Qualifications</h4>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="p-6 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <BarChart className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-primary">Bachelor of IT in Business Systems</h4>
                    <p className="text-sm text-muted-foreground">Rosebank College, Johannesburg</p>
                    <p className="text-xs text-muted-foreground">2024</p>
                    <p className="text-xs text-muted-foreground">Hands-on experience in IT and Business Systems through practical projects</p>
                  </div>
                  
                  <Badge variant="default" className="w-full justify-center">
                    Completed
                  </Badge>
                </div>
              </Card>

              <Card className="p-6 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-primary">High School</h4>
                    <p className="text-sm text-muted-foreground">Impumelelo High School</p>
                    <p className="text-xs text-muted-foreground">2021</p>
                    <p className="text-xs text-muted-foreground">Foundation for academic excellence and career development</p>
                  </div>
                  
                  <Badge variant="secondary" className="w-full justify-center">
                    Completed
                  </Badge>
                </div>
              </Card>
            </div>
          </div>

          {/* AI & Technology Certifications */}
          <div>
            <h4 className="text-lg mb-6 text-primary text-center">AI & Technology Certifications</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.slice(1).map((cert, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm text-primary line-clamp-2 leading-tight">{cert.name}</h5>
                        <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                      <Badge 
                        variant="default"
                        className="ml-2 flex-shrink-0 text-xs"
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              All AI and technology certifications completed in 2025, demonstrating commitment to continuous learning and staying current with emerging technologies.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously expanding my skill set through practical projects, online courses, and industry engagement. 
            Committed to staying current with the latest developments in business technology and digital transformation.
          </p>
        </div>
      </div>
    </section>
  )
}