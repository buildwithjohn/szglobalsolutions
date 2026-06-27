'use client';

import { useState } from 'react';
import { Arrow, CheckCircle } from './Icons';

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'company', label: 'Company / Organisation', type: 'text', required: false },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
];

const EMPTY = { name: '', email: '', company: '', subject: '', message: '', website: '' };

export default function ContactForm() {
  const [data, setData] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const update = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus('success');
        setData(EMPTY);
      } else {
        setStatus('error');
        setError(json.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-gold/30 bg-gold/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle width={30} height={30} />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-white">Message sent</h3>
        <p className="mt-2 text-sm text-slate-300">
          Thank you for getting in touch. A member of our team will respond shortly.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === 'sending';

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
              disabled={sending}
              autoComplete={f.name === 'company' ? 'organization' : f.name}
              className="w-full rounded-md border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/40 disabled:opacity-60"
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
          disabled={sending}
          className="w-full rounded-md border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/40 disabled:opacity-60"
          placeholder="Tell us about the opportunity, mandate or partnership you have in mind."
        />
      </div>

      {/* Honeypot — hidden from real users, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={update}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={sending} className="btn-primary disabled:opacity-70">
          {sending ? 'Sending…' : 'Send Message'}
          {!sending && <Arrow width={16} height={16} />}
        </button>
        {status === 'error' && <p className="text-sm text-red-400">{error}</p>}
      </div>
    </form>
  );
}
