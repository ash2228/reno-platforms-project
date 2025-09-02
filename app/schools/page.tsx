'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface School {
    id: number;
    name: string;
    address: string;
    city: string;
    image: string;
}

export default function ShowSchoolsPage() {
    const [schools, setSchools] = useState<School[]>([]);
    const [loading, setLoading] = useState(true);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchSchools();
    }, []);

    useEffect(() => {
        if (schools.length > 0 && gridRef.current) {
            const cards = gridRef.current.children;

            gsap.fromTo(
                cards,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    }, [schools]);

    const fetchSchools = async () => {
        try {
            const response = await fetch('/api/schools');
            if (response.ok) {
                const data = await response.json();
                setSchools(data.schools);
            }
        } catch (error) {
            console.error('Error fetching schools:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading schools...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our Schools
                    </h1>
                    <p className="text-xl text-gray-600">
                        Discover excellence in education
                    </p>
                </div>

                {schools.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-500">No schools found.</p>
                        <p className="text-gray-400 mt-2">Add some schools to get started!</p>
                    </div>
                ) : (
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {schools.map((school) => (
                            <Card
                                key={school.id}
                                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="aspect-w-16 aspect-h-9 relative h-48">
                                    {school.image ? (
                                        <Image
                                            src={school.image}
                                            alt={school.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">
                                                {school.name.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                                        {school.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-1 line-clamp-2">
                                        {school.address}
                                    </p>
                                    <p className="text-blue-600 font-semibold text-sm">
                                        📍 {school.city}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
