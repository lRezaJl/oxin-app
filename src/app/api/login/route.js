import { NextResponse } from 'next/server';
import axios from 'axios';
import { urlBase } from '../../../../utility/config';

export async function POST(request) {

    try {
        const apiUrl = `${urlBase}/api/v1/user/login/`;

        const body = await request.json();
        const phone = body.phone.phone
        const code = body.code

        const response = await axios.post(apiUrl, {
            phone,code
        });

        if (response.status !== 200) {
            throw new Error('Failed to fetch contacts');
        }

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
