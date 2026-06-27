import { Resend } from 'resend';
import { site } from '@/lib/site';

// Contact form backend — receives a JSON POST, validates it and sends an email
// via Resend. Configure with environment variables (see .env.example).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function bad(message, status = 400) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return bad('Invalid request body.');
  }

  const name = String(data.name || '').trim();
  const email = String(data.email || '').trim();
  const company = String(data.company || '').trim();
  const subject = String(data.subject || '').trim();
  const message = String(data.message || '').trim();
  const honeypot = String(data.website || '').trim(); // bots fill hidden fields

  // Silently accept-and-drop obvious bot submissions.
  if (honeypot) return Response.json({ ok: true });

  if (!name || !email || !subject || !message) {
    return bad('Please complete all required fields.');
  }
  if (!EMAIL_RE.test(email)) {
    return bad('Please enter a valid email address.');
  }
  if (message.length > 5000) {
    return bad('Message is too long.');
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || 'SZ Global Solutions <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set — cannot send email.');
    return bad('The contact form is not configured yet. Please email us directly.', 500);
  }

  const resend = new Resend(apiKey);

  const escape = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0a1019;line-height:1.6">
      <h2 style="color:#0a1019;margin:0 0 16px">New enquiry — szglobalsolutions.com</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#64748b">Name</td><td><strong>${escape(name)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#64748b">Email</td><td>${escape(email)}</td></tr>
        ${company ? `<tr><td style="padding:4px 16px 4px 0;color:#64748b">Company</td><td>${escape(company)}</td></tr>` : ''}
        <tr><td style="padding:4px 16px 4px 0;color:#64748b">Subject</td><td>${escape(subject)}</td></tr>
      </table>
      <p style="margin:20px 0 6px;color:#64748b">Message</p>
      <div style="white-space:pre-wrap;border-left:3px solid #e8a33d;padding:8px 14px;background:#f8fafc">${escape(message)}</div>
    </div>`;

  const text = `New enquiry — szglobalsolutions.com

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}Subject: ${subject}

${message}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Website] ${subject}`,
      html,
      text,
    });

    if (error) {
      console.error('[contact] Resend error:', error);
      return bad('We could not send your message. Please try again shortly.', 502);
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return bad('Something went wrong. Please try again shortly.', 500);
  }
}
