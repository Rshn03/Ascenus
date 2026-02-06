import { Link } from 'react-router-dom'

const values = [
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Trust & Integrity',
        description: 'We maintain transparency in all our dealings.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Fast & Efficient',
        description: 'Quick turnaround on placements and hiring.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'PAN India Network',
        description: 'Opportunities across all major cities.',
    },
]

const stats = [
    { value: '500+', label: 'Placements Done' },
    { value: '100+', label: 'Partner Companies' },
    { value: '50+', label: 'Cities Covered' },
    { value: '95%', label: 'Client Satisfaction' },
]

export default function About() {
    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            About Us
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Your trusted partner in career development and recruitment solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-white">Who We Are</h2>
                            <div className="space-y-4 text-zinc-400">
                                <p>
                                    <strong className="text-white">Ascenus Consultancy Services</strong> is a leading
                                    job consultancy established in 2025, dedicated to bridging the gap between talented
                                    professionals and top employers across India.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg className="mt-1 size-5 shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>We connect candidates with verified job opportunities across India</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="mt-1 size-5 shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>We support both freshers and experienced professionals</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="mt-1 size-5 shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>We help employers with fast, structured hiring</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/50 p-6 text-center"
                                >
                                    <span className="mb-1 text-3xl font-bold text-violet-400">{stat.value}</span>
                                    <span className="text-sm text-zinc-500">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-8 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">Our Vision</h3>
                            <p className="text-zinc-400">
                                To be India's most trusted career partner, empowering individuals to
                                achieve their professional dreams.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-400">
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                                </svg>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">Our Mission</h3>
                            <p className="text-zinc-400">
                                To connect the right talent with the right opportunities through
                                personalized guidance and industry expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white">Our Values</h2>
                        <p className="text-zinc-400">The principles that guide everything we do</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {values.map((value, index) => (
                            <div key={index} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 text-center">
                                <div className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
                                    {value.icon}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-white">{value.title}</h3>
                                <p className="text-sm text-zinc-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden py-16">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20" />
                <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-3xl font-bold text-white">Join Us Today</h2>
                    <p className="mb-8 text-zinc-300">Start your career journey with Ascenus.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-zinc-900 shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    )
}
