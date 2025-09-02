import { NextRequest, NextResponse } from 'next/server';
import connection from '@/lib/db';
import { schoolSchema } from '@/lib/schemas';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const data = {
            name: formData.get('name') as string,
            address: formData.get('address') as string,
            city: formData.get('city') as string,
            state: formData.get('state') as string,
            contact: formData.get('contact') as string,
            email_id: formData.get('email_id') as string,
        };

        const validation = schoolSchema.safeParse(data);
        if (!validation.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validation.error.issues },
                { status: 400 }
            );
        }

        let imagePath = '';
        const image = formData.get('image') as File;

        if (image && image.size > 0) {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const fileName = `${Date.now()}_${image.name}`;
            imagePath = `/schoolImages/${fileName}`;

            await writeFile(
                path.join(process.cwd(), 'public/schoolImages', fileName),
                buffer
            );
        }

        const query = `
      INSERT INTO schools (name, address, city, state, contact, email_id, image)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

        await connection.execute(query, [
            data.name,
            data.address,
            data.city,
            data.state,
            parseInt(data.contact),
            data.email_id,
            imagePath,
        ]);

        return NextResponse.json({ message: 'School added successfully' });
    } catch (error) {
        console.error('Error adding school:', error);
        return NextResponse.json(
            { error: 'Failed to add school' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const query = 'SELECT id, name, address, city, image FROM schools ORDER BY id DESC';
        const [rows] = await connection.execute(query);

        return NextResponse.json({ schools: rows });
    } catch (error) {
        console.error('Error fetching schools:', error);
        return NextResponse.json(
            { error: 'Failed to fetch schools' },
            { status: 500 }
        );
    }
}
