'use client';

import { useState } from 'react';
import { site } from '@/lib/site';
import { Arrow } from './Icons';

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'company', label: 'Company / Organisation', type: 'text', required: false },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
];

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\n\n${data.message}`
    );
    const subject = encodeURIComponent(data.subject || 'New enquiry from szglobalsolutions.com');
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.name === 'subject' ? 'sm:col-span-2' : ''}>
            <label htmlFor={f.name} className="mb-2 block text-sm font-medium text-slate-300">
              {f.label} {f.required && <span className="text-gold">*</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              value={data[f.name]}
              onChange={update}
              className="w-full rounded-md border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
              placeholder={f.label}
            />
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={data.message}
          onChange={update}
          className="w-full rounded-md border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
          placeholder="Tell us about the opportunity, mandate or partnership you have in mind."
        />
      </div>
      <button type="submit" className="btn-primary">
        Send Message <Arrow width={16} height={16} />
      </button>
      {sent && (
        <p className="text-sm text-gold">
          Thanks — your email client should now open with the message ready to send.
        </p>
      )}
    </form>
  );
}
