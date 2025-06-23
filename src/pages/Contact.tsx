
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, User, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLogos from '@/components/ClientLogos';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from '@/components/ui/sonner';
import { useIsMobile } from '@/hooks/use-mobile';
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

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useIsMobile();

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

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center">
            <span className="gradient-text">Contact Me</span>
          </h1>
          
          <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto font-feature italic text-gray-600">
            Not for nothing, but if you're here for SEO — you came to the right place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto mt-12">
            {/* Left column with image and contact info - hidden on mobile */}
            <div className={`flex flex-col justify-center ${isMobile ? 'hidden' : 'block'}`}>
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-yellow-100 w-full aspect-[4/5] mb-8">
                <img 
                  src="/lovable-uploads/7532a2f8-b4e4-437a-80c4-28235766761e.png" 
                  alt="Raja Sinha SEO Consultancy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Get In Touch</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Email</p>
                    <a href="mailto:raja@rajasinhaseo.com" className="text-gray-900 hover:text-yellow-600 transition-colors">
                      raja@rajasinhaseo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Phone</p>
                    <a href="tel:+639617521638" className="text-gray-900 hover:text-yellow-600 transition-colors">
                      +63 961 752 1638
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600">
                    Or book a free strategy call directly via my calendar
                  </p>
                  <Button 
                    className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>

            {/* Right column with form - for mobile this has background image */}
            <div className={`relative ${isMobile ? 'pt-[50%]' : ''}`}>
              {/* Background image for mobile only */}
              {isMobile && (
                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full relative">
                    <img 
                      src="/lovable-uploads/7532a2f8-b4e4-437a-80c4-28235766761e.png" 
                      alt="Raja Sinha SEO Consultancy" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
                  </div>
                </div>
              )}

              {/* Form content */}
              <div className={`bg-white p-8 rounded-lg shadow-lg border border-gray-200 ${isMobile ? 'relative z-10 -mt-[30%] mx-4' : ''}`}>
                {!submitted ? (
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
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
                    <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile contact info - only visible on mobile */}
          {isMobile && (
            <div className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md mx-4">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Get In Touch</h3>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <a href="mailto:raja@rajasinhaseo.com" className="text-gray-900 hover:text-yellow-600 transition-colors">
                    raja@rajasinhaseo.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone</p>
                  <a href="tel:+639617521638" className="text-gray-900 hover:text-yellow-600 transition-colors">
                    +63 961 752 1638
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600">
                  Or book a free strategy call directly via my calendar
                </p>
                <Button 
                  className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  onClick={() => window.open('https://calendly.com/raja-sinha-seo-consultancy/30min?back=1&month=2025-05', '_blank')}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          )}

          {/* Client Logos moved below the form and contact info */}
          <div className="mt-16">
            <ClientLogos />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
