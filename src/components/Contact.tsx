import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Calendar } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "maphisakonke@gmail.com",
      href: "mailto:maphisakonke@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+27 (614983940)",
      href: "tel:+27614983940"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Johannesburg, South Africa",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      username: "@konkemaphisa",
      url: "https://github.com/konkemaphisa",
      description: "Complete collection of IT projects and business solutions"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      username: "konke-maphisa",
      url: "https://www.linkedin.com/in/konke-maphisa-92bb11250",
      description: "Professional network and career updates"
    }
  ]

  const availability = [
    {
      type: "Full-time Positions",
      status: "Immediately Available",
      description: "Ready to start immediately for the right opportunity"
    },
    {
      type: "Contract Work",
      status: "Open to Discussions",
      description: "Available for project-based work and consulting"
    },
    {
      type: "Remote Work",
      status: "Preferred",
      description: "Open to remote, hybrid, or on-site arrangements"
    },
    {
      type: "Relocation",
      status: "Flexible",
      description: "Willing to relocate for the right opportunity"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to contribute to innovative IT and business analysis projects. Whether you're looking for a dedicated team member, 
            intern, or consultant, I'd love to discuss how we can work together to drive business success through technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-xl mb-6 text-primary">Send a Message</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Email Address</label>
                    <Input type="email" placeholder="your.email@company.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Company/Organization</label>
                    <Input placeholder="Your company name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Subject</label>
                    <Input placeholder="Job opportunity, collaboration, etc." />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about the opportunity, project, or how we can work together..." 
                    rows={6}
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="p-6">
              <h3 className="text-lg mb-4 text-primary">Direct Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      {contact.href ? (
                        <a href={contact.href} className="text-primary hover:underline">
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-primary">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6">
              <h3 className="text-lg mb-4 text-primary">Availability</h3>
              <div className="space-y-4">
                {availability.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{item.type}</span>
                      <Badge variant="outline" className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-6">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
            </Card>
          </div>
        </div>

        {/* Professional Online Presence */}
        <div>
          <h3 className="text-2xl mb-8 text-center text-primary">Professional Online Presence</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
                <CardContent className="p-0">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {social.icon}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg text-primary">{social.label}</h4>
                      <p className="text-muted-foreground">{social.username}</p>
                      <p className="text-sm text-muted-foreground">{social.description}</p>
                    </div>
                    
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        Visit Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rosebank College Attribution */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <div className="space-y-4">
            <h4 className="text-lg text-primary">Proudly Educated by Rosebank College</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div>📍 Multiple Campuses Across South Africa</div>
              <div>🎓 Business Information Technology Graduate</div>
              <div>✉️ info@rosebankcollege.co.za</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of IT and business professionals in South Africa
            </p>
            <Button variant="outline" asChild>
              <a href="https://www.rosebankcollege.co.za" target="_blank" rel="noopener noreferrer">
                Learn More About Rosebank College
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}