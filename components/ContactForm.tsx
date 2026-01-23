'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    /* ===============================
       Merge First + Last Name for CF7
    =============================== */
    const firstName = (formData.get('first-name') || '') as string;
    const lastName = (formData.get('last-name') || '') as string;
    const fullName = `${firstName} ${lastName}`.trim();

    // CF7 required field
    formData.set('your-name', fullName);

    // optional cleanup
    formData.delete('first-name');
    formData.delete('last-name');

    /* ===============================
       Honeypot (Spam protection)
    =============================== */
    if (formData.get('company')) {
      return; // silently block bots
    }

    setLoading(true);
    setMessage(null);
    setStatus(null);

    try {
      const res = await fetch(
        'https://www.ceovine.com/wp-json/contact-form-7/v1/contact-forms/12281/feedback',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const data = await res.json();

      if (data.status === 'mail_sent') {
        setStatus('success');
        setMessage('Message sent successfully. We will get back to you soon.');
        form.reset();
      } else {
        setStatus('error');
        setMessage(data.message || 'Failed to send message.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 max-w-xl w-full"
    >
      {/* CF7 required hidden field */}
      <input
        type="hidden"
        name="_wpcf7_unit_tag"
        value={`nextjs-form-${Date.now()}`}
      />

      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          required
          className="border p-2"
        />
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          className="border p-2"
        />
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="your-phone"
          placeholder="Contact Number"
          className="border p-2"
        />
        <input
          type="email"
          name="your-email"
          placeholder="Your Email"
          required
          className="border p-2"
        />
      </div>

      {/* Subject */}
      <input
        type="text"
        name="your-subject"
        placeholder="Subject"
        required
        className="border p-2"
      />

      {/* Message */}
      <textarea
        name="your-message"
        placeholder="Queries / Suggestions"
        rows={5}
        className="border p-2"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 disabled:opacity-50"
      >
        {loading && (
          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
        {loading ? 'Sending...' : 'SUBMIT'}
      </button>

      {/* Message */}
      {message && (
        <p
          className={`text-sm ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
