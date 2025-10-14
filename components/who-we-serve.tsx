import { Check } from "lucide-react"

const audiences = [
  "Busy parents seeking academic continuity at home or online",
  "Homeschooling families looking for structured support",
  "Students with learning gaps or curriculum transitions",
  "Gifted and talented learners needing enrichment or extension",
  "Diaspora families seeking culturally attuned, curriculum-aligned tutoring",
  "Students preparing for transitions into secondary school or college",
  "Schools seeking qualified tutors for after-school programs",
  "Families with children requiring special educational needs support",
]

export function WhoWeServe() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Who We Serve</h2>
            <p className="text-lg text-muted-foreground">
              We support diverse learners and families at every stage of their educational journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {audiences.map((audience, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
