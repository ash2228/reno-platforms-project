'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schoolSchema, SchoolFormData } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import gsap from 'gsap';

export default function AddSchoolPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<SchoolFormData>({
        resolver: zodResolver(schoolSchema),
    });

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
            );
        }
    }, []);

    const onSubmit = async (data: SchoolFormData) => {
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (key === 'image' && value instanceof FileList) {
                    if (value[0]) {
                        formData.append(key, value[0]);
                    }
                } else {
                    formData.append(key, value as string);
                }
            });

            const response = await fetch('/api/schools', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                toast("success!");
                reset();

                if (formRef.current) {
                    gsap.fromTo(
                        formRef.current,
                        { scale: 1 },
                        { scale: 0.98, duration: 0.1, yoyo: true, repeat: 1 }
                    );
                }
            } else {
                const errorData = await response.json();
                toast("Failed to add school!");
            }
        } catch (error) {
            toast("Network Error!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                <Card ref={cardRef} className="shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold text-gray-800">
                            Add New School
                        </CardTitle>
                        <p className="text-gray-600">Fill in the school details below</p>
                    </CardHeader>
                    <CardContent>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                            encType="multipart/form-data"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">School Name</Label>
                                    <Input
                                        id="name"
                                        {...register('name')}
                                        placeholder="Enter school name"
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input
                                        id="city"
                                        {...register('city')}
                                        placeholder="Enter city"
                                        className={errors.city ? 'border-red-500' : ''}
                                    />
                                    {errors.city && (
                                        <p className="text-red-500 text-sm">{errors.city.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    {...register('address')}
                                    placeholder="Enter complete address"
                                    className={errors.address ? 'border-red-500' : ''}
                                />
                                {errors.address && (
                                    <p className="text-red-500 text-sm">{errors.address.message}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input
                                        id="state"
                                        {...register('state')}
                                        placeholder="Enter state"
                                        className={errors.state ? 'border-red-500' : ''}
                                    />
                                    {errors.state && (
                                        <p className="text-red-500 text-sm">{errors.state.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contact">Contact Number</Label>
                                    <Input
                                        id="contact"
                                        {...register('contact')}
                                        placeholder="Enter contact number"
                                        className={errors.contact ? 'border-red-500' : ''}
                                    />
                                    {errors.contact && (
                                        <p className="text-red-500 text-sm">{errors.contact.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email_id">Email Address</Label>
                                <Input
                                    id="email_id"
                                    type="email"
                                    {...register('email_id')}
                                    placeholder="Enter email address"
                                    className={errors.email_id ? 'border-red-500' : ''}
                                />
                                {errors.email_id && (
                                    <p className="text-red-500 text-sm">{errors.email_id.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image">School Image</Label>
                                <Input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    {...register('image')}
                                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-3 text-lg font-semibold"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Adding School...' : 'Add School'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
