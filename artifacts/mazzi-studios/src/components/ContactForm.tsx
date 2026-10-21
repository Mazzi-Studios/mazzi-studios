import { useState, type FormEvent } from 'react';
import { useSubmitContact } from '@workspace/api-client-react';

const initialValues = { name: '', email: '', message: '', website: '' };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const submit = useSubmitContact();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSent(false);
    try {
      await submit.mutateAsync({ data: values });
      setValues(initialValues);
      setSent(true);
    } catch {
      setError('We could not confirm your message was sent. Please email Ricardo directly using the link below.');
    }
  }

  const inputClass = 'w-full bg-[#080810] border border-white/20 px-4 py-3 text-[#F5F0EB] placeholder:text-[#888] focus:outline-none focus:border-[#EB2571] font-sans';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Send a message">
      <div>
        <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-widest text-[#cfcfcf] mb-2">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} className={inputClass} />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-widest text-[#cfcfcf] mb-2">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} className={inputClass} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-widest text-[#cfcfcf] mb-2">How can we help?</label>
        <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={5} value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} className={inputClass} />
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => setValues({ ...values, website: event.target.value })} />
      </div>
      <button type="submit" disabled={submit.isPending} className="bg-[#EB2571] text-white px-6 py-4 font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-50">
        {submit.isPending ? 'Sending…' : 'Send Message'}
      </button>
      {sent && <p role="status" className="text-[#F5F0EB] font-sans text-sm">Your message was sent. Thank you for reaching out.</p>}
      {error && <p role="alert" className="text-[#ff9cbf] font-sans text-sm">{error}</p>}
    </form>
  );
}