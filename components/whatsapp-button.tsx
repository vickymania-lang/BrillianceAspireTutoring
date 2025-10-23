"use client"

export default function WhatsAppButton() {
  const whatsappNumber = "2348163688635" // ✅ No spaces or "+" in wa.me link
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="/WhatsappLogo.png" // 👈 place your WhatsApp image in /public/whatsapp-icon.png
        alt="WhatsApp"
        className="w-14 h-14"
      />
    </a>
  )
}
