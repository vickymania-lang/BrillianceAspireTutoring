import { Card } from "@/components/ui/card"
import { BookOpen, Home, GraduationCap, Heart, Code, School, Languages, Users } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Home & Online Tutoring",
    description:
      "From phonics and foundational maths to A-Level physics and literature, we offer tailored \"in-person\" and group classes in person and online.",
  },
  {
    icon: BookOpen,
    title: "Homeschooling Support",
    description:
      "Structured and expertly guided learning for families choosing homeschooling, with comprehensive curriculum coverage.",
  },
  {
    icon: GraduationCap,
    title: "Exam Preparation",
    description: `IGCSE, O-Level, AS & A-Level,
                  
                  SAT, ACT, and AP Exams 
                  
                  Edexcel GCSE & A-Level 
                  
                  IB (International Baccalaureate) 
                  
                  WASSCE, BECE, JAMB, and other regional assessments`,
  },
  {
    icon: Heart,
    title: "Special Needs Support",
    description:
      "Customized IEPs and expert tutors trained in working with dyslexia, ADHD, autism, and learning delays.",
  },
  {
    icon: Code,
    title: "Coding & Digital Skills",
    description: "Fun and foundational courses in programming, robotics, web design, and digital literacy for kids.",
  },
  {
    icon: School,
    title: "School Placement Consulting",
    description:
      "We guide families in choosing the right-fit schools locally and abroad, with prep support for admissions.",
  },
  {
    icon: Languages,
    title: "Language & Enrichment",
    description: "French, Spanish, Yoruba lessons, music theory, piano, chess mastery, and Scrabble coaching.",
  },
  {
    icon: Users,
    title: "Recruitment Services",
    description:
      "We match trained teachers and subject specialists with families and schools seeking quality educators.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tutoring solutions tailored to every learning need and stage
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
