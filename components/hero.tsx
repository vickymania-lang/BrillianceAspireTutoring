"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const heroSlides = [
  {
    badge: "🎓 Brilliance Aspire Tutoring",
    title: "Brilliance Aspire Tutoring",
    description:
      "Empowering Minds, Inspiring Success Personalized online tutoring that helps every learner reach their full potential. Master subjects, build confidence, and achieve academic excellence with expert guidance.[Start Learning Today]",
    image: "/b3.jpg",
    imageAlt: "Students learning with tutor",
    stats: [
      { value: "100+", label: "Students Tutored" },
      { value: "80%", label: "Client Referrals" },
      { value: "3+", label: "Countries Served" },
    ],
    badge2: { label: "Success Rate", value: "98%" },
  },
  {
    badge: "Excellence in Education Since 2021",
    title: "Expert Tutoring for Every Learning Journey",
    description:
      "Personalized, high-impact learning support from preschool to A-Levels. Whether your child needs to catch up, keep up, or surge ahead, we provide expert guidance every step of the way.",
    image: "/b4.webp",
    imageAlt: "Students learning with tutor",
    stats: [
      { value: "100+", label: "Students Tutored" },
      { value: "80%", label: "Client Referrals" },
      { value: "3+", label: "Countries Served" },
    ],
    badge2: { label: "Success Rate", value: "98%" },
  },
  {
    badge: "Specialized Learning Programs",
    title: "One-on-One Tutoring That Makes a Difference",
    description:
      "From exam preparation to special needs support, our qualified tutors provide individualized attention tailored to your child's unique learning style and pace.",
    image: "/b7.jpg",
    imageAlt: "One-on-one tutoring session",
    stats: [
      { value: "95%", label: "Grade Improvement" },
      { value: "10+", label: "Expert Tutors" },
      { value: "24/7", label: "Support Available" },
    ],
    badge2: { label: "Satisfaction", value: "99%" },
  },
  {
    badge: "Comprehensive Subject Coverage",
    title: "Master Every Subject with Confidence",
    description:
      "From Mathematics and Sciences to Languages and Coding, we offer expert tutoring across all subjects for students from preschool through A-Levels.",
    image: "/students-studying-multiple-subjects-books-and-lapt.jpg",
    imageAlt: "Students studying various subjects",
    stats: [
      { value: "30+", label: "Subjects Covered" },
      { value: "5000+", label: "Hours Taught" },
      { value: "4.9/5", label: "Average Rating" },
    ],
    badge2: { label: "Pass Rate", value: "97%" },
  },
  {
    badge: "Flexible Learning Options",
    title: "Learn Anytime, Anywhere at Your Pace",
    description:
      "Choose from in-home tutoring or online sessions that fit your schedule. Our flexible approach ensures quality education without compromising your family's routine.",
    image: "/student-learning-online-video-call-with-tutor.jpg",
    imageAlt: "Online tutoring session",
    stats: [
      { value: "7 Days", label: "Weekly Availability" },
      { value: "50+", label: "Cities Covered" },
      { value: "2hrs", label: "Avg Response Time" },
    ],
    badge2: { label: "Retention", value: "92%" },
  },
]

export function Hero() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <section className="relative py-10 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="inline-block">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                        {slide.badge}
                      </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{slide.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                         All sessions are scheduled in your local time zone to make learning convenient wherever you are in the world
                      
                      </div>
                     
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                      {slide.stats.map((stat, statIndex) => (
                        <div key={statIndex}>
                          <div className="text-3xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                      <div className="text-sm text-muted-foreground">{slide.badge2.label}</div>
                      <div className="text-3xl font-bold text-primary">{slide.badge2.value}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden lg:flex -left-12 h-12 w-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden lg:flex -right-12 h-12 w-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  )
}
