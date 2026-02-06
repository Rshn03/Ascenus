import galleryOffice from '../assets/gallery-office.png'
import galleryMeeting from '../assets/gallery-meeting.png'
import galleryJobFair from '../assets/gallery-jobfair.png'
import galleryTraining from '../assets/gallery-training.png'
import galleryInterview from '../assets/gallery-interview.png'
import galleryAward from '../assets/gallery-award.png'
import galleryOuting from '../assets/gallery-outing.png'
import galleryWorkshop from '../assets/gallery-workshop.png'

const images = [
    { id: 1, title: 'Office Space', category: 'Office', src: galleryOffice },
    { id: 2, title: 'Team Meeting', category: 'Team', src: galleryMeeting },
    { id: 3, title: 'Job Fair Event', category: 'Events', src: galleryJobFair },
    { id: 4, title: 'Training Session', category: 'Training', src: galleryTraining },
    { id: 5, title: 'Interview Room', category: 'Office', src: galleryInterview },
    { id: 6, title: 'Award Ceremony', category: 'Events', src: galleryAward },
    { id: 7, title: 'Team Outing', category: 'Team', src: galleryOuting },
    { id: 8, title: 'Workshop', category: 'Training', src: galleryWorkshop },
]

const colors = [
    'from-violet-500 to-fuchsia-600',
    'from-rose-500 to-orange-600',
    'from-emerald-500 to-teal-600',
    'from-blue-500 to-cyan-600',
    'from-fuchsia-500 to-pink-600',
    'from-amber-500 to-yellow-600',
    'from-pink-500 to-rose-600',
    'from-cyan-500 to-blue-600',
]

export default function Gallery() {
    return (
        <div>
            {/* Hero */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="absolute top-0 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Gallery
                        </h1>
                        <p className="text-lg text-zinc-400">
                            A glimpse into our workplace, events, and team activities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="border-t border-white/10 bg-zinc-900/30 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10"
                            >
                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Text Overlay - Bottom Gradient */}
                                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <h3 className="text-lg font-bold text-white text-glow">{image.title}</h3>
                                    <p className="mt-1 text-sm font-medium text-zinc-300">{image.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="mb-4 text-2xl font-bold text-white">Follow Us</h2>
                        <p className="mb-6 text-zinc-400">
                            Stay updated with our latest events, job fairs, and success stories.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/company/ascenus-consultancy-services/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white transition-transform hover:scale-110 shadow-lg shadow-violet-500/25"
                                aria-label="LinkedIn"
                            >
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/Ascenusacs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white transition-transform hover:scale-110 shadow-lg shadow-violet-500/25"
                                aria-label="X (Twitter)"
                            >
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/share/1AbnkAofG9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white transition-transform hover:scale-110 shadow-lg shadow-violet-500/25"
                                aria-label="Facebook"
                            >
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
