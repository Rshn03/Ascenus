export default function ServiceCard({ icon, title, description }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25">
                    {icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
            </div>
        </div>
    )
}
