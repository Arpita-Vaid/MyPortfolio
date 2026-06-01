import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { MapPin, Mail, Phone } from 'lucide-react'
import { FadeIn } from '../ui/FadeIn'
import { ContactButton } from '../ui/ContactButton'
import { ResumeDownload } from '../ui/ResumeDownload'
import { SocialLinks } from '../ui/SocialLinks'
import { personal } from '../../data/portfolio'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    setSubmitted(false)

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    }

    // Replace these values with your EmailJS details
    const serviceId = 'service_co1cp7b'
    const templateId = 'template_bvv543b'
    const publicKey = '58dLz1nOoMblnCrHe'

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSubmitted(true)
        form.reset()
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        alert('Sorry, something went wrong sending your message. Please try again later.')
      })
  }

  return (
    <section className="relative px-5 py-12 sm:px-8 md:py-16">
      <FadeIn>
        <h2
          className="hero-heading mb-6 text-center"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 100px)' }}
        >
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
          Open to internships, collaborations, and software engineering opportunities.
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="space-y-6">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 text-foreground transition-opacity hover:opacity-70"
            >
              <Mail className="h-6 w-6 text-muted-foreground" />
              <span>{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 text-foreground transition-opacity hover:opacity-70"
            >
              <Phone className="h-6 w-6 text-muted-foreground" />
              <span>{personal.phone}</span>
            </a>
            <div className="flex items-center gap-4 text-muted-foreground">
              <MapPin className="h-6 w-6 shrink-0" />
              <span>{personal.location}</span>
            </div>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-foreground"
            >
              github.com/Arpita-Vaid
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-foreground"
            >
              linkedin.com/in/arpita-vaid-0470502b6
            </a>
            <SocialLinks className="pt-4" />
            <div className="flex flex-wrap gap-3 pt-2">
              <ContactButton href={`mailto:${personal.email}`} label="Email Me" />
              <ResumeDownload variant="button">Download Resume</ResumeDownload>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:border-foreground/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:border-foreground/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:border-foreground/40"
                />
              </div>
            </div>
            <button
              type="submit"
              className="liquid-glass relative z-[1] mt-6 w-full cursor-pointer rounded-full py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-[1]">{submitted ? 'Opening email…' : 'Send Message'}</span>
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
