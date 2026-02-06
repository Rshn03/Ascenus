import { Link } from 'react-router-dom'
import { APPLY_FORM_URL } from '../config/constants'

const categoryColors = {
    IT: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Banking: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    BPO: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Sales: 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30',
}

export default function JobCard({ job }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[job.category] || 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                        {job.category}
                    </span>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                    {job.experience}
                </span>
            </div>

            <h3 className="mb-1 text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">
                {job.title}
            </h3>
            <p className="mb-3 text-sm text-zinc-500">{job.company}</p>

            <div className="mb-4 flex flex-wrap gap-3 text-sm text-zinc-500">
                <span className="flex items-center gap-1">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                </span>
                <span className="flex items-center gap-1">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {job.type}
                </span>
            </div>

            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-violet-400">{job.salary}</span>
                <a
                    href={APPLY_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-violet-500/25"
                >
                    Apply
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
