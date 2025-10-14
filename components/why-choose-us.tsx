import { Award, CreditCard, Brain, Globe, UsersIcon, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Top-Tier Tutors",
    description:
      "Qualified educators including First-Class graduates, Master's and PhD holders, EYFS-certified to IB-trained experts.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Pay per session, weekly, monthly, or for groups—whatever suits your lifestyle and budget.",
  },
  {
    icon: Brain,
    title: "IEP Precision",
    description: "Custom learning strategies backed by multiple intelligences and 21st-century pedagogy approaches.",
  },
  {
    icon: Globe,
    title: "Curriculum Diversity",
    description: "Deep expertise in local and global curricula including British, American, Nigerian, and IB systems.",
  },
  {
    icon: UsersIcon,
    title: "Rigorous Onboarding",
    description:
      "Academic assessment, culture fit evaluation, mentoring, and continuous professional training for all tutors.",
  },
  {
    icon: TrendingUp,
    title: "Client Trust",
    description: "Over 80% of our clients come through referrals—a testament to the impact we deliver consistently.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A choice that makes the difference in your child's educational journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="space-y-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
