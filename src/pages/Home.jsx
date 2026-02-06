import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { jobs } from '../data/jobs'
import JobCard from '../components/JobCard'
import heroTeam from '../assets/hero-team.png'
import heroNetwork from '../assets/hero-network.png'
import heroSuccess from '../assets/hero-success.png'

const highlights = [
    'Verified job opportunities across India',
    'Support for freshers & experienced professionals',
    'Fast & structured hiring for employers',
]

const services = [
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Placement Assistance',
        description: 'Get placed in top companies with our expert guidance.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Resume Building',
        description: 'Professional resumes that stand out to recruiters.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: 'Interview Training',
        description: 'Mock interviews & tips to ace your next interview.',
    },
]

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 sm:py-28">
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-violet-500/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="text-center lg:text-left">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-violet-400 opacity-75" />
                                    <span className="relative inline-flex size-2 rounded-full bg-violet-500" />
                                </span>
                                Now Hiring Across India
                            </div>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Connecting Talent to
                                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                                    Career Success
                                </span>
                            </h1>
                            <p className="mb-8 max-w-2xl text-lg text-zinc-400 lg:mx-0 mx-auto">
                                Your trusted partner in finding the perfect career opportunity.
                                We connect talented professionals with top employers across India.
                            </p>
                            <div className="flex flex-col items-center lg:items-start justify-center gap-4 sm:flex-row">
                                <Link
                                    to="/jobs"
                                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/40 hover:scale-105"
                                >
                                    Get started
                                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Right side - Image gallery */}
                        <div className="relative hidden lg:block">
                            {/* Main featured image */}
                            <div className="relative z-10">
                                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-violet-500/20 backdrop-blur-sm">
                                    <img
                                        src={heroTeam}
                                        alt="Professional team collaboration"
                                        className="w-full rounded-xl object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating smaller images */}
                            <div className="absolute -left-8 top-1/4 z-20 animate-float">
                                <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 p-1.5 shadow-xl backdrop-blur-md">
                                    <img
                                        src={heroNetwork}
                                        alt="Career network visualization"
                                        className="w-32 h-32 rounded-lg object-cover"
                                    />
                                </div>
                            </div>

                            <div className="absolute -right-4 bottom-8 z-20 animate-float-delayed">
                                <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 p-1.5 shadow-xl backdrop-blur-md">
                                    <img
                                        src={heroSuccess}
                                        alt="Career success celebration"
                                        className="w-36 h-36 rounded-lg object-cover"
                                    />
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 size-24 rounded-full bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 blur-xl" />
                            <div className="absolute -bottom-4 -left-4 size-20 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-orange-500/30 blur-xl" />
                        </div>
                    </div>

                    {/* Mobile image display */}
                    <div className="mt-12 lg:hidden">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-violet-500/20 backdrop-blur-sm">
                            <img
                                src={heroTeam}
                                alt="Professional team collaboration"
                                className="w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="border-y border-white/10 bg-zinc-900/30 py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
                        {highlights.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <svg className="size-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm font-medium text-zinc-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white">Our Services</h2>
                        <p className="text-zinc-400">Comprehensive career solutions for your success</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300"
                        >
                            View all services
                            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Jobs */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white">Featured Jobs</h2>
                        <p className="text-zinc-400">Latest opportunities from top employers</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {jobs.slice(0, 3).map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            to="/jobs"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            View all jobs
                            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden py-16">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20" />
                <div className="absolute top-0 left-0 size-64 rounded-full bg-violet-600/30 blur-3xl" />
                <div className="absolute bottom-0 right-0 size-64 rounded-full bg-fuchsia-600/30 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-3xl font-bold text-white">Ready to Start Your Career Journey?</h2>
                    <p className="mb-8 text-zinc-300">Join thousands of professionals who found their dream job with us.</p>
                    <Link
                        to="/jobs"
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-zinc-900 shadow-lg transition-all hover:shadow-xl hover:scale-105"
                    >
                        Get Started Today
                        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    )
}
