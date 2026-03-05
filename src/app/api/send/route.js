import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, name, email, company, role, message, budget } = body;

    // Build email HTML based on form type
    let subject, html;

    if (type === 'guest') {
      subject = `🎙️ New Podcast Guest Application — ${name}`;
      html = `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7B2FF7, #FF6B6B, #00D4FF); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Guest Application</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Someone wants to be on The EKKKO Podcast</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px;"><a href="mailto:${email}" style="color: #7B2FF7;">${email}</a></td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Company</td><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px;">${company || '—'}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Role</td><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px;">${role || '—'}</td></tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">What they'd talk about</p>
              <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.7; color: #1f2937;">${message || '—'}</div>
            </div>
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Podcast Guest Application — EKKKO" style="display: inline-block; background: #7B2FF7; color: white; padding: 12px 32px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `;
    } else {
      subject = `🚀 New Project Inquiry — ${name} (${company || 'Unknown'})`;
      html = `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7B2FF7, #FF6B6B, #00D4FF); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Project Inquiry</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Someone wants to collaborate with EKKKO</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px;"><a href="mailto:${email}" style="color: #7B2FF7;">${email}</a></td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Company</td><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px;">${company || '—'}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Budget</td><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px; font-weight: 600; color: #7B2FF7;">${budget || '—'}</td></tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Project Details</p>
              <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.7; color: #1f2937;">${message || '—'}</div>
            </div>
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Project Inquiry — EKKKO" style="display: inline-block; background: #7B2FF7; color: white; padding: 12px 32px; border-radius: 999px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `;
    }

    // Send via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'EKKKO <onboarding@resend.dev>',
        to: [process.env.NOTIFY_EMAIL || 'hello@ekkko.com'],
        subject,
        html,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', data);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}