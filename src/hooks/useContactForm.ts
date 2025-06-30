
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from '@/components/ui/sonner';
import { supabase } from '@/integrations/supabase/client';
import { formSchema, FormValues } from '@/lib/contactFormSchema';

interface UseContactFormProps {
  onSuccess: () => void;
}

export const useContactForm = ({ onSuccess }: UseContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      captcha: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log("Contact form submitted with values:", values);
    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message || null,
        });

      if (error) {
        console.error('Error saving to database:', error);
        toast.error("There was an issue saving your message. Please try again.");
        return;
      }

      console.log("Form submission saved to database successfully");

      // Send confirmation and notification emails
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-confirmation', {
          body: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
          },
        });

        if (emailError) {
          console.error('Error sending emails:', emailError);
          // Don't fail the whole process if email fails
          toast.success("Message sent successfully! Note: confirmation email may be delayed.");
        } else {
          console.log("Emails sent successfully");
          toast.success("Message sent successfully! Check your email for confirmation.");
        }
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
        toast.success("Message sent successfully! Note: confirmation email may be delayed.");
      }

      onSuccess();
      form.reset();
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
