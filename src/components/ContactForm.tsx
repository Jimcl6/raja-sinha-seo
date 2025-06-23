
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from '@/components/ui/sonner';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
  captcha: z.boolean().refine(val => val === true, {
    message: "Please verify you're not a robot",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
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
        // Fall back to mailto if database save fails
        const subject = encodeURIComponent("Contact Form Submission");
        const body = encodeURIComponent(`
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Message: ${values.message || 'No message provided'}
        `);
        const mailtoLink = `mailto:raja@rajasinhaseo.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        toast.error("There was an issue saving your message, but we've opened your email client as a backup.");
      } else {
        console.log("Form submission saved to database successfully");
        toast.success("Message sent successfully! We'll be in touch soon.");
        
        // Also send via mailto as additional notification
        const subject = encodeURIComponent("Contact Form Submission");
        const body = encodeURIComponent(`
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Message: ${values.message || 'No message provided'}
        `);
        const mailtoLink = `mailto:raja@rajasinhaseo.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
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

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input className="pl-10" placeholder="Your name" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input className="pl-10" placeholder="your.email@example.com" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input className="pl-10" placeholder="Your phone number" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell me about your SEO needs..." 
                    className="min-h-32"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="captcha"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I'm not a robot
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
