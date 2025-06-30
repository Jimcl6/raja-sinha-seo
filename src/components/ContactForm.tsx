
import React from 'react';
import { Button } from '@/components/ui/button';
import { useContactForm } from '@/hooks/useContactForm';
import ContactFormFields from './ContactFormFields';

interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const { form, isSubmitting, onSubmit } = useContactForm({ onSuccess });

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
      <ContactFormFields 
        form={form}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default ContactForm;
