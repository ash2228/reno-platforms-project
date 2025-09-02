import { z } from 'zod';

export const schoolSchema = z.object({
  name: z.string().min(2, 'School name must be at least 2 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  contact: z.string()
    .min(10, 'Contact must be at least 10 digits')
    .max(15, 'Contact must be at most 15 digits')
    .regex(/^\d+$/, 'Contact must contain only numbers'),
  email_id: z.string().email('Please enter a valid email address'),
  image: z.any().optional(),
});

export type SchoolFormData = z.infer<typeof schoolSchema>;
