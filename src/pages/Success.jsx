import { Link } from 'react-router-dom'

const stats = [
    { value: '500+', label: 'Candidates Placed' },
    { value: '100+', label: 'Partner Companies' },
    { value: '50+', label: 'Cities Covered' },
    { value: '95%', label: 'Satisfaction Rate' },
]

const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'Software Developer at TCS',
        content: 'Ascenus helped me land my dream job within 2 weeks. Their resume building service was incredibly helpful.',
        rating: 5,
    },
    {
        name: 'Priya Patel',
        role: 'HR Manager at Infosys',
        content: 'As an employer, we\'ve found excellent candidates through Ascenus. Their screening process is thorough.',
        rating: 5,
    },
    {
        name: 'Amit Kumar',
        role: 'Banking Executive at HDFC',
        content: 'The interview training really boosted my confidence. Got placed in my first attempt!',
        rating: 5,
    },
]

const milestones = [
    { year: '2025', title: 'Company Founded', description: 'Ascenus Consultancy Services established in Bolpur, WB' },
    { year: '2025', title: 'PAN India Expansion', description: 'Extended services to major cities across India' },
    { year: '2025', title: '100+ Placements', description: 'Achieved our first 100 successful placements' },
    { year: '2026', title: '500+ Placements', description: 'Crossed 500 successful job placements milestone' },
]

export default function Success() {
    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Our Success
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Celebrating the achievements of our candidates and the growth of our journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="relative overflow-hidden border-y border-white/10 py-16">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="mb-2 text-4xl font-bold text-white">{stat.value}</div>
                                <div className="text-zinc-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white">What Our Candidates Say</h2>
                        <p className="text-zinc-400">Real stories from real people we've helped.</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
                            >
                                <div className="mb-4 flex items-center gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="size-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="mb-4 text-zinc-400">"{testimonial.content}"</p>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white">Our Journey</h2>
                        <p className="text-zinc-400">Key milestones in our growth story.</p>
                    </div>
                    <div className="mx-auto max-w-3xl">
                        <div className="relative border-l-2 border-violet-500/50 pl-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative mb-10 last:mb-0">
                                    <div className="absolute -left-10 flex size-4 items-center justify-center rounded-full bg-violet-500 ring-4 ring-zinc-950" />
                                    <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-6">
                                        <div className="mb-2 inline-block rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-400">
                                            {milestone.year}
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold text-white">{milestone.title}</h3>
                                        <p className="text-sm text-zinc-400">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-2xl font-bold text-white">Be Our Next Success Story</h2>
                    <p className="mb-6 text-zinc-400">Start your journey with Ascenus today.</p>
                    <Link
                        to="/jobs"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25"
                    >
                        Browse Jobs
                    </Link>
                </div>
            </section>
        </div>
    )
}
