import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VisionMission } from "@/components/vision-mission"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { WhoWeServe } from "@/components/who-we-serve"
import { Consultation } from "@/components/consultation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VisionMission />
      <Services />
      <WhyChooseUs />
      <WhoWeServe />
      <Consultation />
      <Footer />
    </main>
  )
}
