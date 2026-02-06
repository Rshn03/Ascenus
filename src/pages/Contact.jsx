import { useState } from 'react'
import { CONTACT_FORM_ACTION_URL } from '../config/constants'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState({ submitting: false, sent: false, error: null })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ submitting: true, sent: false, error: null })

        try {
            const response = await fetch(CONTACT_FORM_ACTION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus({ submitting: false, sent: true, error: null })
                setFormData({ name: '', phone: '', email: '', subject: '', message: '' })

                // Hide success message after 5 seconds
                setTimeout(() => setStatus(prev => ({ ...prev, sent: false })), 5000)
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            setStatus({ submitting: false, sent: false, error: 'Failed to send message. Please try again.' })
        }
    }

    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Contact us
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Have questions? We'd love to hear from you. Reach out to us anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-white">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-white">Address</h3>
                                        <p className="text-zinc-400">
                                            584, Rabindrapally Bypass,<br />
                                            Bolpur, Birbhum,<br />
                                            West Bengal 731204
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-white">Phone</h3>
                                        <p className="text-zinc-400">
                                            <a href="tel:9093037967" className="hover:text-violet-400">9093037967</a>
                                            <br />
                                            <a href="tel:7003951164" className="hover:text-violet-400">7003951164</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-white">Email</h3>
                                        <p className="text-zinc-400">
                                            <a href="mailto:info@ascenusconsultancy.in" className="hover:text-violet-400">
                                                info@ascenusconsultancy.in
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-white">Working Hours</h3>
                                        <p className="text-zinc-400">
                                            Monday – Saturday<br />
                                            10:00 AM – 6:30 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8 relative">
                            <h2 className="mb-6 text-xl font-bold text-white">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-300">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full resize-none rounded-lg border border-white/10 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status.submitting}
                                    className="w-full rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {status.error && (
                                    <p className="text-center text-sm text-red-400">{status.error}</p>
                                )}
                            </form>

                            {/* Success Popup/Overlay */}
                            {status.sent && (
                                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-zinc-900/95 backdrop-blur-sm">
                                    <div className="text-center p-6 animate-in fade-in zoom-in duration-300">
                                        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                                            <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-white">Message Sent!</h3>
                                        <p className="text-zinc-400">We'll get back to you shortly.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                        <div className="flex h-64 items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                            <div className="text-center">
                                <svg className="mx-auto size-12 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="mt-2 text-sm text-zinc-500">Map will be integrated here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
