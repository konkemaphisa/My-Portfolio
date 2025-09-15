import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"

export function About() {
  const achievements = [
    "Graduated from Rosebank College with Bachelor of IT in Business Systems (2024)",
    "Contributed to cloud integration and business process optimization for Cirrus Document Storage",
    "Successfully completed AWS S3 migration with automation and security enhancements",
    "Designed and developed responsive NGO website with interactive features and optimized performance",
    "Earned 10 AI and technology certifications from Coursera and Microsoft (Aug-Sep 2025)",
    "Multilingual professional fluent in 5 languages: Zulu, English, Pedi, Sotho, and Setswana",
    "Demonstrated expertise in ERP systems evaluation, business process modeling, and system analysis"
  ]

  const careerObjectives = [
    {
      title: "Short-term (6-12 months)",
      goals: [
        "Secure an internship or entry-level role as an IT Specialist or Business Analyst",
        "Gain hands-on experience with Microsoft technologies (Azure, M365)",
        "Build a professional portfolio of IT solutions and ERP case studies",
        "Develop expertise in business process modeling and optimization"
      ]
    },
    {
      title: "Medium-term (1-3 years)",
      goals: [
        "Advance into a Business Analyst or IT Specialist role",
        "Lead small-scale IT projects and improve organizational processes",
        "Develop deeper expertise in ERP, cloud, and AI applications",
        "Build strong relationships with business stakeholders"
      ]
    },
    {
      title: "Long-term (3-5 years)",
      goals: [
        "Transition into a strategic role in IT project management or systems consulting",
        "Build innovative solutions that integrate business and technology",
        "Launch my own clothing brand infused with digital innovation",
        "Establish thought leadership in business technology integration"
      ]
    }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Professional Biography</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A highly motivated IT graduate with a Bachelor of IT in Business Systems, specializing in 
            Business Analysis. Seeking to leverage my technical skills, business acumen, and 
            practical experience to contribute effectively to the intersection of technology and business operations.
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-primary">Professional Experience</h3>
          <div className="space-y-8">
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h4 className="text-lg text-primary">Cloud Integration and Business Process Optimization</h4>
                    <p className="text-muted-foreground">Cirrus Document Storage Pty. Ltd, Johannesburg</p>
                  </div>
                  <Badge variant="outline">Jun 2022 - Nov 2023</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Worked as part of a team at CloudStrive Solutions for a client, contributing to comprehensive cloud migration and business optimization initiatives</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Contributed to the migration of document storage to AWS S3, implemented automation with AWS Lambda, and enhanced security using AWS IAM</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Participated in the reengineering of business processes, streamlining client onboarding, billing, and customer support</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h4 className="text-lg text-primary">Web Developer</h4>
                    <p className="text-muted-foreground">NGO Project, Johannesburg</p>
                  </div>
                  <Badge variant="outline">Jan 2023 - Jun 2023</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Designed and developed a complete website for an NGO using HTML, JavaScript, and CSS</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Focused on creating a user-friendly interface and responsive design for optimal accessibility</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Implemented interactive features and optimized the site for performance across different devices</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8">
            <h3 className="text-xl mb-6 text-primary">Background & Experience</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into information technology began with a fascination for how technology can 
                streamline business processes and solve complex organizational challenges. Through my 
                Bachelor of IT in Business Systems studies at Rosebank College, I've developed expertise 
                in ERP systems, cloud platforms, and business analysis methodologies.
              </p>
              <p>
                I've gained practical experience working on cloud integration projects, contributing to 
                AWS S3 migrations, implementing automation with AWS Lambda, and enhancing security using 
                AWS IAM. Additionally, I've participated in business process reengineering initiatives, 
                streamlining client onboarding, billing, and customer support systems.
              </p>
              <p>
                My web development experience includes designing and developing responsive websites using 
                HTML, CSS, and JavaScript, with a focus on user-friendly interfaces and performance optimization. 
                I'm particularly passionate about leveraging technology to improve efficiency, accessibility, 
                and decision-making in business environments.
              </p>
              <p>
                As a multilingual professional fluent in 5 languages (Zulu, English, Pedi, Sotho, and Setswana), 
                I bring strong communication skills that enable me to work effectively across diverse teams 
                and stakeholders in South Africa's multicultural business environment.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl mb-6 text-primary">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-xl mb-8 text-primary text-center">Career Objectives & Development Plans</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {careerObjectives.map((phase, index) => (
              <div key={index} className="space-y-4">
                <div className="text-center">
                  <h4 className="text-lg text-primary mb-2">{phase.title}</h4>
                  <Separator className="w-16 mx-auto" />
                </div>
                <ul className="space-y-3">
                  {phase.goals.map((goal, goalIndex) => (
                    <li key={goalIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm committed to continuous learning and staying at the forefront of business technology innovations. 
            My goal is to contribute meaningfully to organizations while building solutions that create 
            positive impact for businesses and communities through effective technology integration.
          </p>
        </div>
      </div>
    </section>
  )
}