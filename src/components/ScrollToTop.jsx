import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const { pathname } = useLocation()

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                type="button"
                onClick={scrollToTop}
                className={`
                    inline-flex size-12 items-center justify-center rounded-full 
                    bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white 
                    shadow-lg shadow-violet-500/30 transition-all duration-300
                    hover:scale-110 hover:shadow-violet-500/50 hover:-translate-y-1
                    focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                `}
                aria-label="Scroll to top"
            >
                <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    )
}
