import { Target, Lightbulb } from "lucide-react"

export function VisionMission() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Who We Are</h2>
          <p className="text-lg text-justify text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Brilliance Aspire Tutoring is a proudly dedicated online tutoring service offering global-standard education. We serve busy parents, schools, and students who want more than just average results — we aim for excellence through care, consistency, and strategy.

Our platform connects learners across the world with experienced, passionate tutors who specialize in subjects like Mathematics, English, Science, and Coding. Every lesson is personalized, flexible, and focused on helping students reach their highest potential from the comfort of their home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted and sought-after provider of tailored academic and enrichment tutoring for learners
              from preschool to A-Levels, empowering success and excellence through innovative, flexible, and culturally
              responsive tutoring services globally.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              We deliver expert-led, flexible, and measurable learning solutions that support, accelerate, and extend
              every child's growth through curriculum mastery, 21st century innovation, and consistent parental
              engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
