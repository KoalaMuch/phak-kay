import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  checkIn?: string;
  guests?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In production, you would send an email using Resend or similar service
    // For now, we'll just log and return success
    //
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'Phakkay Camping <noreply@phakkaycamping.com>',
    //   to: ['contact@phakkaycamping.com'],
    //   subject: `New Inquiry from ${data.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Check-in Date:</strong> ${data.checkIn || 'Not specified'}</p>
    //     <p><strong>Guests:</strong> ${data.guests || 'Not specified'}</p>
    //     <p><strong>Message:</strong> ${data.message || 'No message'}</p>
    //   `,
    // });

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.info('Contact form submission:', data);
    }

    return NextResponse.json(
      { message: 'Inquiry sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    );
  }
}
