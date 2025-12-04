import { Target, Lightbulb } from "lucide-react"

export function VisionMission() {
  return (
    <section id="about" className="py-5 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* who are we with image */}

         <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Who We Are</h3>
            <p className="text-justify text-muted-foreground leading-relaxed">
              At Brilliance Aspire Tutoring, we believe every child has the potential to shine when guided with patience, purpose, and the right learning support.
We are a team of passionate, qualified educators dedicated to helping students build confidence, master challenging subjects, and discover the joy of learning.

From preschool to advanced levels, we offer personalized one-on-one and group lessons that fit your child’s unique learning style, goals, and schedule. Our tutors are experienced in international and local curricula, ensuring that students thrive wherever they are in the world.

With learners across multiple countries and time zones, we provide flexible scheduling and interactive sessions that make education accessible and enjoyable. Whether your child needs academic support, homework assistance, exam preparation, homeschooling guidance, or enrichment programs like coding and creative skills, Brilliance Aspire Tutoring is your trusted partner for lifelong learning success.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            
             <img
                src="/CEOOyin.jpeg"
                alt="CEO of Brilliance Aspire Tutoring"
                className=" w-auto object-contain"
              />
              <p className="text-justify text-muted-foreground leading-relaxed">
               <b>Meet Catherine - Founder, Tutor & Learning Coach
               </b><br></br>
               I specialize in helping students from preschool to secondary school build strong academic foundations. Through personalized teaching and patience, I guide learners to understand deeply, grow confidently, achieve consistent progress.<br></br>Every child has the ability to shine, they just need the right support.
  
               </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto my-6">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To nurture a world where every learner feels seen, supported, and celebrated.
We envision an inclusive educational space where students of all abilities can learn at their own pace, connect with caring tutors, and unlock their full potential.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To bridge educational gaps worldwide by connecting learners with passionate tutors who deliver personalized, inclusive, and technology-driven lessons.
Through innovation, empathy, and commitment, we help students everywhere discover their brilliance and achieve success beyond the classroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
