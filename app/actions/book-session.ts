"use server"

export async function bookSession(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const purpose = formData.get("purpose") as string
  const time = formData.get("time") as string

  // Validate inputs
  if (!name || !email || !purpose || !time) {
    return {
      success: false,
      error: "All fields are required",
    }
  }

  try {
    // Generate a unique meeting ID
    const meetingId = generateMeetingId()

    // In a real implementation, you would:
    // 1. Use Google Calendar API to create an event
    // 2. Generate a real Google Meet link
    // 3. Send confirmation emails to both the user and tutor
    // 4. Store the booking in a database

    // For now, we'll generate a simulated Google Meet link
    const meetLink = `https://meet.google.com/${meetingId}`

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // - Save to database
    // - Send confirmation emails
    // - Create calendar events

    console.log("[v0] Session booked:", { name, email, purpose, time, meetLink })

    return {
      success: true,
      meetLink,
    }
  } catch (error) {
    console.error("[v0] Error booking session:", error)
    return {
      success: false,
      error: "Failed to create session. Please try again.",
    }
  }
}

function generateMeetingId(): string {
  // Generate a random meeting ID similar to Google Meet format (xxx-xxxx-xxx)
  const chars = "abcdefghijklmnopqrstuvwxyz"
  const segment1 = Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
  const segment2 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
  const segment3 = Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
  return `${segment1}-${segment2}-${segment3}`
}
