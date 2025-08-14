import { useState, FormEvent } from 'react';

interface UseContactFormReturn {
  status: string;
  isSubmitting: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const useContactForm = (): UseContactFormReturn => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgwebqa", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return { status, isSubmitting, handleSubmit };
};