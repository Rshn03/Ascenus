import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import logo from '../assets/logo.png'

const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Careers', to: '/jobs' },
    { label: 'Contact', to: '/contact' },
]

const legalLinks = [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
]

const watermarkText = [
    'Ascenus', // English
    'एसीनस',   // Hindi
    'এসেনাস',  // Bengali
    'అసెనస్',  // Telugu
    'एसीनस',   // Marathi
    'அசெனஸ்',  // Tamil
    'آسینوس',  // Urdu
    'એસેનસ',   // Gujarati
    'ಅಸೆನಸ್',  // Kannada
    'അസെനസ്',  // Malayalam
    'ଆସେନସ୍',  // Odia
    'ਅਸੇਨਸ',   // Punjabi
    'এসেনাস',  // Assamese
    'एसीनस',   // Maithili
    'एसीनस',   // Dogri
    'آسینوس',  // Kashmiri
    'एसीनस',   // Konkani
    'एसीनस',   // Nepali
    'अस्केंउस', // Sanskrit
    'एसीनस',   // Bodo
    'آسینوس',  // Sindhi
    'ꯑꯁꯦꯅꯁ',  // Manipuri (Meitei Mayek)
    'ᱚᱥꯦᱱᱚᱥ',  // Santali (Ol Chiki)
]

export default function Footer() {
    const scatteredItems = useMemo(() => {
        // Organic Noise Algorithm - Full Coverage

        // Enhance density by simple duplication
        const fullTextList = [...watermarkText, ...watermarkText, ...watermarkText];
        // Shuffle
        const shuffledText = fullTextList.sort(() => Math.random() - 0.5);

        const items = [];
        const placedBoxes = []; // To track simple collision

        // Helper to check collision with existing placed items
        // simple box collision to prevent direct overlap clutter
        const checkCollision = (x, y, isVertical) => {
            const width = isVertical ? 4 : 12; // Rough estimate %
            const height = isVertical ? 12 : 4; // Rough estimate %

            for (const box of placedBoxes) {
                if (x < box.x + box.w &&
                    x + width > box.x &&
                    y < box.y + box.h &&
                    y + height > box.y) {
                    return true; // Collision
                }
            }
            return false;
        };

        shuffledText.forEach((text) => {
            let left, top, rotate, isVertical;
            let attempts = 0;
            const maxAttempts = 30; // More attempts for better packing

            while (attempts < maxAttempts) {
                // Random position 0-100
                const l = Math.random() * 95; // 0-95 to keep somewhat in bounds
                const t = Math.random() * 90; // 0-90

                // Random orientation: Horizontal (0) or Vertical (90/-90)
                // Reference image has mixed. Let's do 60% horizontal, 40% vertical
                const orientationRoll = Math.random();
                if (orientationRoll > 0.6) {
                    rotate = Math.random() > 0.5 ? 90 : -90;
                    isVertical = true;
                } else {
                    rotate = 0;
                    isVertical = false;
                }

                // Collision check (loose) - we allow some overlap for "texture" feel, but avoid total stacking
                // actually for a watermark texture, some overlap is fine.
                // stricter collision might leave holes. let's be lenient.
                if (!checkCollision(l, t, isVertical) || attempts > 20) {
                    left = l;
                    top = t;
                    break;
                }

                attempts++;
            }

            if (left === undefined) return; // Skip if cant place

            // Register box
            placedBoxes.push({
                x: left,
                y: top,
                w: isVertical ? 3 : 10,
                h: isVertical ? 10 : 3
            });

            // Size variation - MAXIMUM
            const sizes = ['text-7xl', 'text-8xl', 'text-9xl', 'text-[10rem]', 'text-[12rem]'];
            const size = sizes[Math.floor(Math.random() * sizes.length)];

            // Opacity variation - INCREASED MORE
            const opacities = [0.08, 0.1, 0.12, 0.15];
            const opacity = opacities[Math.floor(Math.random() * opacities.length)];

            items.push({
                text,
                style: {
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    opacity: opacity,
                },
                className: `absolute font-black text-zinc-400 whitespace-nowrap select-none ${size}`
            });
        });

        return items;
    }, [])

    return (
        <footer className="relative border-t border-white/10 bg-zinc-950 overflow-hidden">
            {/* Watermark Background */}
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden select-none pointer-events-none">
                {scatteredItems.map((item, idx) => (
                    <span
                        key={idx}
                        className="absolute font-black uppercase text-white/80 whitespace-nowrap transition-all duration-1000"
                        style={item.style}
                    >
                        {item.text}
                    </span>
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <img src={logo} alt="Ascenus" className="h-12 w-auto" />
                        <p className="text-sm leading-relaxed text-zinc-500">
                            Connecting Talent to Career Success
                        </p>
                        <p className="text-xs text-zinc-600">Est. 2025 • PAN India</p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://www.linkedin.com/company/ascenus-consultancy-services/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-all hover:bg-violet-500/20 hover:text-violet-400"
                                aria-label="LinkedIn"
                            >
                                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/Ascenusacs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-all hover:bg-violet-500/20 hover:text-violet-400"
                                aria-label="X (Twitter)"
                            >
                                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/share/1AbnkAofG9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-zinc-400 transition-all hover:bg-violet-500/20 hover:text-violet-400"
                                aria-label="Facebook"
                            >
                                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li className="flex items-start gap-2">
                                <svg className="mt-0.5 size-4 shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=584+Rabindrapally+Bypass+Bolpur+Birbhum+WB+731204"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all hover:text-violet-400 hover-text-glow"
                                >
                                    Head office: 584, Rabindrapally Bypass, Bolpur, Birbhum, WB-731204
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="size-4 shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="flex gap-1">
                                    <a href="tel:+919093037967" className="transition-all hover:text-violet-400 hover-text-glow">9093037967</a>
                                    <span>/</span>
                                    <a href="tel:+917003951164" className="transition-all hover:text-violet-400 hover-text-glow">7003951164</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="size-4 shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@ascenusconsultancy.in" className="transition-all hover:text-violet-400 hover-text-glow">
                                    info@ascenusconsultancy.in
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="size-4 shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Mon–Sat, 10:00 AM – 6:30 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-600">
                    © {new Date().getFullYear()} Ascenus Consultancy Services. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
