export default function Privacy() {
    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Last updated: February 2025
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-4 sm:px-6">
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-xl font-bold text-white">1. Information We Collect</h2>
                            <ul className="space-y-2 text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Personal information (name, email, phone, address)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Professional details (resume, qualifications, experience)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Usage data and cookies for website improvement</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-xl font-bold text-white">2. How We Use Your Information</h2>
                            <ul className="space-y-2 text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Match candidates with suitable job opportunities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Share profiles with potential employers (with consent)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Send job alerts and career-related communications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Improve our services and user experience</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-xl font-bold text-white">3. Data Security</h2>
                            <ul className="space-y-2 text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>We implement industry-standard security measures</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Data is stored securely with restricted access</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Regular security audits are conducted</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-xl font-bold text-white">4. Your Rights</h2>
                            <ul className="space-y-2 text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Access and review your personal data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Request corrections to your information</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Request deletion of your data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Opt-out of marketing communications</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-xl font-bold text-white">5. Third-Party Sharing</h2>
                            <ul className="space-y-2 text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>We share data only with verified employers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>No selling of personal data to third parties</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400">•</span>
                                    <span>Service providers bound by confidentiality agreements</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-xl font-bold text-white">6. Contact Us</h2>
                            <p className="text-zinc-400">
                                For privacy-related inquiries, contact us at:
                            </p>
                            <p className="mt-2 text-zinc-400">
                                Email:{' '}
                                <a href="mailto:info@ascenusconsultancy.in" className="text-violet-400 hover:underline">
                                    info@ascenusconsultancy.in
                                </a>
                            </p>
                            <p className="mt-1 text-zinc-400">Phone: 9093037967 / 7003951164</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
