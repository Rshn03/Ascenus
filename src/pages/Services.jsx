import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const services = [
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Placement Assistance',
        description: 'Get placed in top companies with our expert guidance. We match your skills with the right opportunities.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Resume Building',
        description: 'Professional resumes that stand out. ATS-optimized formats that get you noticed by recruiters.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: 'Interview Training',
        description: 'Mock interviews and expert tips. Boost your confidence and ace your next interview.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Career Counseling',
        description: 'Personalized career guidance. Find the right path based on your skills and aspirations.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Corporate/Bulk Hiring',
        description: 'End-to-end recruitment solutions for businesses. Hire multiple candidates efficiently.',
    },
]

const benefits = [
    'Free registration for job seekers',
    'Access to exclusive job listings',
    'Direct connection with employers',
    'Regular job updates & alerts',
    'Interview coordination support',
    'Post-placement assistance',
]

export default function Services() {
    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Our Services
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Comprehensive career solutions to help you succeed at every step of your journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-white">Why Choose Us?</h2>
                            <p className="mb-8 text-zinc-400">
                                We go beyond just job matching. Our comprehensive approach ensures you're
                                prepared for success at every stage of your career journey.
                            </p>
                            <ul className="grid gap-4 sm:grid-cols-2">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <svg className="size-5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-zinc-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 text-center text-white shadow-xl shadow-violet-500/25">
                                <div className="mb-4 text-5xl font-bold">500+</div>
                                <div className="mb-6 text-violet-100">Successful Placements</div>
                                <Link
                                    to="/success"
                                    className="inline-flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white hover:bg-white/30"
                                >
                                    View Success Stories
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-3xl font-bold text-white">Ready to Get Started?</h2>
                    <p className="mb-8 text-zinc-400">Submit your details and let us help you find your dream job.</p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            to="/jobs"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25"
                        >
                            Browse Jobs
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
