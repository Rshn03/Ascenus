import { INVOICE_TOOL_URL } from '../config/constants'

export default function Employers() {
    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            For Employers
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Access your employer dashboard to manage job postings and candidates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dashboard Access Section */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-md px-4 sm:px-6">
                    <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-8 shadow-xl shadow-violet-500/5">
                        <div className="mb-8 text-center">
                            <div className="mx-auto mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25">
                                <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold text-white">Coming Soon</h2>
                            <p className="text-sm text-zinc-400">
                                The Employer Dashboard is currently under development.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                            <p className="text-sm text-zinc-300">
                                We are working hard to bring you a seamless experience. <br />
                                Please check back later!
                            </p>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-zinc-500">
                                Need assistance?{' '}
                                <a href="mailto:info@ascenusconsultancy.in" className="font-medium text-violet-400 hover:text-violet-300">
                                    Contact us
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-2xl font-bold text-white">Why Partner with Us?</h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: '🎯', title: 'Targeted Hiring', desc: 'Access pre-screened candidates matching your requirements' },
                            { icon: '⚡', title: 'Fast Turnaround', desc: 'Fill positions quickly with our efficient process' },
                            { icon: '📊', title: 'Bulk Hiring', desc: 'Scale your workforce with our volume hiring solutions' },
                            { icon: '🤝', title: 'Dedicated Support', desc: 'Get a dedicated account manager for your needs' },
                            { icon: '💰', title: 'Cost Effective', desc: 'Reduce hiring costs with our streamlined process' },
                            { icon: '🔒', title: 'Verified Candidates', desc: 'All candidates are thoroughly verified and vetted' },
                        ].map((benefit, index) => (
                            <div key={index} className="rounded-xl border border-white/10 bg-zinc-900/50 p-6">
                                <div className="mb-3 text-2xl">{benefit.icon}</div>
                                <h3 className="mb-2 font-semibold text-white">{benefit.title}</h3>
                                <p className="text-sm text-zinc-400">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
