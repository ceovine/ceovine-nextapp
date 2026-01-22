'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        'https://www.ceovine.com/wp-json/contact-form-7/v1/contact-forms/5e8e9bd/feedback',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status === 'mail_sent') {
        setMessage('✅ Message sent successfully');
        form.reset();
      } else {
        setMessage('❌ Failed to send message');
      }
    } catch {
        setMessage('❌ Something went wrong');
        }finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          required
          className="border p-3"
        />

        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          required
          className="border p-3"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          className="border p-3"
        />

        <input
          type="email"
          name="your-email"
          placeholder="Your Email"
          required
          className="border p-3"
        />
      </div>

      <input
        type="text"
        name="your-subject"
        placeholder="Subject"
        className="border p-3"
      />

      <textarea
        name="queries"
        placeholder="Queries / Suggestions"
        rows={5}
        className="border p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>

      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
