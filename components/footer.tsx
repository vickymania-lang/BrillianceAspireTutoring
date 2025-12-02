import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
             <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/batlogo.jpeg"
                alt="Brilliance Aspire Tutoring Logo"
                className="h-20 w-auto object-contain"
              />
              
            </a>
          </div>
            {/* <h3 className="text-xl font-bold mb-4">EduExcel</h3> */}
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Excellence in education through personalized tutoring from preschool to A-Levels.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Home Tutoring</li>
              <li className="text-primary-foreground/80">Online Classes</li>
              <li className="text-primary-foreground/80">Exam Preparation</li>
              <li className="text-primary-foreground/80">Special Needs Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Brilliance Aspire  Tutoring. All rights reserved. Design by <a href="https://wa.me/+2348145080787">Ogungbuyi victor</a></p>
        </div>
      </div>
    </footer>
  )
}
