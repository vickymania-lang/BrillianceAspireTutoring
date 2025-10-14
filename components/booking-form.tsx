"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Mail, User, Video } from "lucide-react"
import { bookSession } from "@/app/actions/book-session"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [meetLink, setMeetLink] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await bookSession(formData)

      if (result.success && result.meetLink) {
        setMeetLink(result.meetLink)
      } else {
        setError(result.error || "Failed to create session")
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (meetLink) {
    return (
      <Card className="border-2 border-primary/20">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Video className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Session Booked Successfully!</CardTitle>
          <CardDescription>Your Google Meet link has been generated</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">Your Meeting Link:</p>
            <a
              href={meetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all font-medium"
            >
              {meetLink}
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            A confirmation email has been sent to your email address with the meeting details.
          </p>
          <Button onClick={() => setMeetLink(null)} variant="outline" className="w-full">
            Book Another Session
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Session Details</CardTitle>
        <CardDescription>Please provide your information to book a tutoring session</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name
            </Label>
            <Input id="name" name="name" placeholder="Enter your full name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address
            </Label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Purpose of Session
            </Label>
            <Textarea
              id="purpose"
              name="purpose"
              placeholder="Describe what you'd like to focus on during the session (e.g., Math homework help, SAT prep, etc.)"
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Preferred Date & Time
            </Label>
            <Input id="time" name="time" type="datetime-local" required />
          </div>

          {error && (
            <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive border border-destructive/20">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Booking Session..." : "Book Session"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
