import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import WhatsAppButton from '@/components/whatsapp-button'


export const metadata: Metadata = {
  title: "Brilliance Aspire Tutoring | Online Learning for Academic Success",
  description:
    "Brilliance Aspire Tutoring provides personalized online lessons to help students excel in Mathematics, English, Science, and more. Our expert tutors empower learners to build confidence, master concepts, and achieve academic brilliance — anytime, anywhere.",
  generator: "Brilliance Aspire Tutoring Platform",
  keywords: [
    "Brilliance Aspire Tutoring",
    "online tutoring",
    "home lessons Nigeria",
    "Math tutor",
    "English tutor",
    "Science tutoring",
    "online education",
    "academic success",
    "private tutor",
    "virtual learning"
  ],

  // ⭐️ ADDED: Favicon and Icon Configuration ⭐️
  icons: {
    // Standard Favicon (.ico)
    icon: '/favicon.ico', 
    // Apple Touch Icon (used when saving to iOS home screen)
    apple: '/apple-touch-icon.png',
    // You can add more specific icon sizes here if needed, 
    // but Next.js often handles common sizes automatically.
    // Example: { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }
  },
  // ⭐️ ADDED: Web Manifest for PWA support ⭐️
  manifest: '/site.webmanifest', 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      
      </body>
    </html>
  )
}