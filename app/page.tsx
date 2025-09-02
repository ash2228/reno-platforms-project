'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
      .fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
        '-=0.5'
      );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <div ref={heroRef}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            School
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Your comprehensive platform for managing school information with modern technology
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/add-school">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              📚 Add New School
            </Button>
          </Link>
          <Link href="/schools">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🏫 View All Schools
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
