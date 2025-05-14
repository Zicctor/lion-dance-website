import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, formType, eventDate, position } = body;

    const { data, error } = await resend.emails.send({
      from: 'Au Lac Lion Dance <onboarding@resend.dev>',
      to: ['Aulacmualan@gmail.com'],
      subject: `New ${formType === 'booking' ? 'Booking' : 'Team Application'} Inquiry`,
      react: EmailTemplate({ 
        name, 
        email, 
        phone, 
        message, 
        formType,
        eventDate,
        position
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}