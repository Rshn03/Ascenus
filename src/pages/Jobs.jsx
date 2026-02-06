import { useState } from 'react'
import JobCard from '../components/JobCard'
import { jobs, categories, experienceLevels } from '../data/jobs'
import { APPLY_FORM_URL } from '../config/constants'

export default function Jobs() {
    const [categoryFilter, setCategoryFilter] = useState('All')
    const [experienceFilter, setExperienceFilter] = useState('All')

    const filteredJobs = jobs.filter((job) => {
        const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter
        const matchesExperience = experienceFilter === 'All' || job.experience === experienceFilter
        return matchesCategory && matchesExperience
    })

    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Job Openings
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Find your next opportunity from our curated job listings across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters & Jobs */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    {/* Filters */}
                    <div className="mb-10 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/50 p-4">
                        <div className="flex items-center gap-2">
                            <label htmlFor="category" className="text-sm font-medium text-zinc-400">
                                Category:
                            </label>
                            <select
                                id="category"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="rounded-lg border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <label htmlFor="experience" className="text-sm font-medium text-zinc-400">
                                Experience:
                            </label>
                            <select
                                id="experience"
                                value={experienceFilter}
                                onChange={(e) => setExperienceFilter(e.target.value)}
                                className="rounded-lg border border-white/10 bg-zinc-800 px-3 py-2 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                            >
                                {experienceLevels.map((exp) => (
                                    <option key={exp} value={exp}>
                                        {exp}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="ml-auto text-sm text-zinc-500">
                            {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
                        </div>
                    </div>

                    {/* Job Cards */}
                    {filteredJobs.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredJobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <svg className="mx-auto size-12 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="mt-4 text-lg font-medium text-white">No jobs found</h3>
                            <p className="mt-2 text-sm text-zinc-500">Try adjusting your filters.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-2xl font-bold text-white">Can't find what you're looking for?</h2>
                    <p className="mb-6 text-zinc-400">Submit your resume and we'll reach out when matching positions open up.</p>
                    <a
                        href={APPLY_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25"
                    >
                        Apply Now
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    )
}
