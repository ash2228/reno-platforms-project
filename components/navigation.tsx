'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        SchoolHub
                    </Link>

                    <div className="flex space-x-4">
                        <Link href="/add-school">
                            <Button
                                variant={pathname === '/add-school' ? 'default' : 'ghost'}
                                className="font-medium"
                            >
                                Add School
                            </Button>
                        </Link>
                        <Link href="/schools">
                            <Button
                                variant={pathname === '/schools' ? 'default' : 'ghost'}
                                className="font-medium"
                            >
                                View Schools
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
