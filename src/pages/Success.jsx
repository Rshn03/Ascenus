import { Link } from 'react-router-dom'
import { useState } from 'react'

const stats = [
    { value: '500+', label: 'Candidates Placed' },
    { value: '100+', label: 'Partner Companies' },
    { value: '50+', label: 'Cities Covered' },
    { value: '95%', label: 'Satisfaction Rate' },
]

const testimonials = [
    { name: 'Rahul Sharma', role: 'Software Developer at TCS', content: 'Ascenus helped me land my dream job within 2 weeks. Their resume building service was incredibly helpful.', rating: 5 },
    { name: 'Priya Patel', role: 'HR Manager at Infosys', content: 'As an employer, we\'ve found excellent candidates through Ascenus. Their screening process is thorough.', rating: 5 },
    { name: 'Amit Kumar', role: 'Banking Executive at HDFC', content: 'The interview training really boosted my confidence. Got placed in my first attempt!', rating: 5 },
    { name: 'Sneha Gupta', role: 'Data Analyst at Wipro', content: 'Professional and dedicated team. They understood my profile perfectly.', rating: 5 },
    { name: 'Vikram Singh', role: 'Sales Manager at Reliance', content: 'Highly recommended for freshers looking for good opportunities.', rating: 4 },
    { name: 'Anjali Das', role: 'Content Writer at Zomato', content: 'Great experience! The process was smooth and transparent.', rating: 5 },
    { name: 'Rohan Mehta', role: 'Frontend Dev at Swiggy', content: 'They connected me with a startup that matched my vibe perfectly.', rating: 5 },
    { name: 'Kavita Reddy', role: 'Operations Lead at Flipkart', content: 'Found the perfect role closer to my hometown. Thank you Ascenus!', rating: 5 },
    { name: 'Arjun Nair', role: 'System Engineer at Cognizant', content: 'Good guidance provided throughout the recruitment process.', rating: 4 },
    { name: 'Meera Iyer', role: 'Marketing Executive at Nykaa', content: 'Fast responses and very supportive staff.', rating: 5 },
    { name: 'Suresh Menon', role: 'Accountant at ICICI Bank', content: 'Helped me switch my career path successfully.', rating: 5 },
    { name: 'Pooja Verma', role: 'QA Engineer at Oracle', content: 'Excellent service. Got placed in a top MNC.', rating: 5 },
    { name: 'Karan Malhotra', role: 'Business Analyst at Deloitte', content: 'The mock interviews were a game changer for me.', rating: 5 },
    { name: 'Nisha Khan', role: 'HR Recruiter at Amazon', content: 'We hire regularly through Ascenus. Quality candidates every time.', rating: 5 },
    { name: 'Rajesh Gupta', role: 'Civil Engineer at L&T', content: 'Good opportunities for core engineering roles too.', rating: 4 },
    { name: 'Divya Sen', role: 'Graphic Designer at Canva', content: 'Found a creative role that pays well. Very happy!', rating: 5 },
    { name: 'Manish Tiwari', role: 'Support Specialist at Dell', content: 'Supportive team, guided me at every step.', rating: 5 },
    { name: 'Sonia Roy', role: 'Teacher at Byjus', content: 'Quick placement assistance. Very satisfied.', rating: 4 },
    { name: 'Aditya Joshi', role: 'Product Manager at Paytm', content: 'They have a wide network of companies.', rating: 5 },
    { name: 'Rina Kapoor', role: 'Admin Executive at Tata Steel', content: 'Professionalism at its best.', rating: 5 },
    { name: 'Manoj Verma', role: 'Cloud Engineer at Google', content: 'Exceptional service for experienced professionals.', rating: 5 },
    { name: 'Sita Devi', role: 'UX Designer at Microsoft', content: 'Got multiple offers thanks to their wide reach.', rating: 5 },
    { name: 'Rajiv Menon', role: 'Marketing Lead at Puma', content: 'Reliable consultancy with genuine job postings.', rating: 4 },
    { name: 'Fatima Begum', role: 'Public Relations at Vogue', content: 'Seamless experience from application to offer letter.', rating: 5 },
    { name: 'Ashish Kulkarni', role: 'Investment Banker at JP Morgan', content: 'Top-notch career counseling provided.', rating: 5 },
    { name: 'Lakshmi Narayanan', role: 'Legal Advisor at Khaitan & Co', content: 'Very strict screening but worth it for the roles they offer.', rating: 5 },
    { name: 'Gurpreet Singh', role: 'Energy Analyst at Shell', content: 'Helped me relocate with a great package.', rating: 5 },
    { name: 'Sunita Patil', role: 'Brand Manager at L\'Oreal', content: 'Best consultancy in the region.', rating: 5 },
    { name: 'Vimal Saxena', role: 'Director at Red Chillies', content: 'Efficient hiring partner for our creative needs.', rating: 5 },
    { name: 'Praveen Yadav', role: 'Fitness Trainer at Gold\'s Gym', content: 'Good for localized job searches.', rating: 4 },
    { name: 'Neeta Agarwal', role: 'Educational Consultant at Vedantu', content: 'Focuses on quality over quantity.', rating: 5 },
    { name: 'Chetan Sharma', role: 'Dance Instructor at Remo\'s', content: 'Found my passion through their career guidance.', rating: 5 },
    { name: 'Zaheer Ahmed', role: 'Stunt Coordinator at Action Inc', content: 'Fastest placement I\'ve ever seen.', rating: 5 },
    { name: 'Irfan Qureshi', role: 'Security Chief at CISF', content: 'Reliable and trustworthy.', rating: 5 },
    { name: 'Tabassum Khan', role: 'Interior Designer at Livspace', content: 'They understood my portfolio needs well.', rating: 5 },
    { name: 'Nawaz Ali', role: 'Hospitality Manager at Taj', content: 'Great for hospitality industry roles.', rating: 5 },
    { name: 'Vidya Iyer', role: 'Fashion Consultant at Myntra', content: 'Connected me with top fashion brands.', rating: 5 },
    { name: 'Rajkumar Yadav', role: 'Logistics Manager at BlueDart', content: 'Systematic approach to hiring.', rating: 4 },
    { name: 'Farhan Siddiqui', role: 'Radio Jockey at Red FM', content: 'Unique roles available here.', rating: 5 },
    { name: 'Shahid Malik', role: 'Sales Executive at Maruti', content: 'Good start for my sales career.', rating: 5 }
]

const ReviewCard = ({ testimonial }) => (
    <div className="w-[350px] flex-shrink-0 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-violet-500/30 hover:bg-zinc-900/80">
        <div className="mb-4 flex items-center gap-1">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
                <svg key={i} className="size-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">"{testimonial.content}"</p>
        <div className="border-t border-white/5 pt-4">
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-xs text-violet-400">{testimonial.role}</div>
        </div>
    </div>
)

const milestones = [
    { year: '2025', title: 'Company Founded', description: 'Ascenus Consultancy Services established in Bolpur, WB' },
    { year: '2025', title: 'PAN India Expansion', description: 'Extended services to major cities across India' },
    { year: '2025', title: '100+ Placements', description: 'Achieved our first 100 successful placements' },
    { year: '2026', title: '500+ Placements', description: 'Crossed 500 successful job placements milestone' },
]

export default function Success() {
    // Split testimonials for two rows
    // Split testimonials for two rows
    const firstRow = testimonials.slice(0, 20);
    const secondRow = testimonials.slice(20);

    // Rating State
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRating = (r) => {
        if (!isSubmitted) setRating(r);
    }

    const handleSubmit = () => {
        if (rating > 0) {
            setIsSubmitted(true);
        }
    }

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

            {/* Scrolling Testimonials */}
            <section className="overflow-hidden py-16 sm:py-24">
                <div className="mb-12 text-center px-4">
                    <h2 className="mb-4 text-3xl font-bold text-white">What Our Candidates Say</h2>
                    <p className="text-zinc-400">Real stories from real people we've helped.</p>
                </div>

                <div className="space-y-8">
                    {/* First Marquee Row (Left Scroll) */}
                    <div className="relative flex overflow-x-hidden">
                        <div className="animate-scroll flex gap-6 px-3">
                            {[...firstRow, ...firstRow].map((testimonial, idx) => (
                                <ReviewCard key={`row1-${idx}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>

                    {/* Second Marquee Row (Right Scroll) */}
                    <div className="relative flex overflow-x-hidden">
                        <div className="animate-scroll-reverse flex gap-6 px-3">
                            {[...secondRow, ...secondRow].map((testimonial, idx) => (
                                <ReviewCard key={`row2-${idx}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gradient Masks for edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
            </section>

            {/* Rating Section */}
            <section className="py-16">
                <div className="mx-auto max-w-3xl px-4 sm:px-6">
                    <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 text-center backdrop-blur-sm sm:p-12">
                        {!isSubmitted ? (
                            <>
                                <h2 className="mb-4 text-2xl font-bold text-white">How was your experience?</h2>
                                <p className="mb-8 text-zinc-400">Rate our services and help us improve.</p>

                                <div className="mb-8 flex justify-center gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            onClick={() => handleRating(star)}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="transition-transform hover:scale-110 focus:outline-none"
                                        >
                                            <svg
                                                className={`size-10 sm:size-12 transition-colors duration-200 ${star <= (hoveredRating || rating)
                                                    ? 'text-amber-400 fill-amber-400'
                                                    : 'text-zinc-600 fill-transparent stroke-2'
                                                    }`}
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>

                                <div className="mx-auto mb-8 max-w-md">
                                    <textarea
                                        placeholder="Tell us more about your experience (optional)..."
                                        className="h-32 w-full rounded-xl border border-white/10 bg-zinc-950/50 p-4 text-white placeholder:text-zinc-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={rating === 0}
                                    className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    Submit Review
                                </button>
                            </>
                        ) : (
                            <div className="animate-float py-8">
                                <div className="mb-6 flex justify-center">
                                    <div className="flex size-20 items-center justify-center rounded-full bg-green-500/10 text-green-400 ring-1 ring-green-500/50">
                                        <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-white">Thank You!</h3>
                                <p className="text-zinc-400">Your feedback means the world to us.</p>
                            </div>
                        )}
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
