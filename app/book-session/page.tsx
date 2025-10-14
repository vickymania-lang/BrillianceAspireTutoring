import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"

export default function BookSessionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book Your Session</h1>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll generate a Google Meet link for your tutoring session
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
