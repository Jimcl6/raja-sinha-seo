
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Check, FileText, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualReviews from '@/components/ManualReviews';
import { toast } from '@/components/ui/sonner';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  websiteUrl: z.string().url("Please enter a valid URL"),
  businessBackground: z.string().min(10, "Please provide at least 10 characters describing your business"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      websiteUrl: '',
      businessBackground: '',
      phone: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log("3-hour review form submitted with values:", values);
    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const submissionMessage = `3-Hour Website Review Request\n\nWebsite URL: ${values.websiteUrl}\n\nBusiness Background: ${values.businessBackground}`;
      
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: submissionMessage,
        });

      if (error) {
        console.error('Error saving to database:', error);
        toast.error("There was an issue saving your request. Please try again.");
        return;
      }

      console.log("3-hour review request saved to database successfully");

      // Send notification email to Raja
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-confirmation', {
          body: {
            name: values.name,
            email: 'raja@rajasinhaseo.com',
            phone: values.phone,
            message: submissionMessage,
            isNotification: true,
          },
        });

        if (emailError) {
          console.error('Error sending notification email:', emailError);
        } else {
          console.log("Notification email sent successfully");
        }
      } catch (emailError) {
        console.error('Error sending notification email:', emailError);
      }

      // Send confirmation email to the inquirer
      try {
        const confirmationMessage = `Thank you for submitting your website for a free 3-hour review!\n\nI've received your request and will get back to you within 24 hours with your comprehensive website analysis.\n\nYour submission details:\n- Website: ${values.websiteUrl}\n- Business Background: ${values.businessBackground}\n\nBest regards,\nRaja Sinha`;
        
        const { error: confirmationEmailError } = await supabase.functions.invoke('send-contact-confirmation', {
          body: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: confirmationMessage,
            isConfirmation: true,
          },
        });

        if (confirmationEmailError) {
          console.error('Error sending confirmation email:', confirmationEmailError);
        } else {
          console.log("Confirmation email sent successfully");
        }
      } catch (confirmationEmailError) {
        console.error('Error sending confirmation email:', confirmationEmailError);
      }

      // Show success dialog
      setShowSuccessDialog(true);
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
        <div className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">Get Your Free Website Review</span>
              </h1>
              <p className="text-lg text-gray-600">
                Fill out the form below and I'll provide you with a comprehensive 3-hour review of your website - completely free.
              </p>
            </div>

            {/* 3-Hour Review Benefits Section */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-yellow-100">
                <div className="flex items-center justify-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800">What you'll receive:</h3>
                  <div className="ml-4 relative">
                    <FileText className="h-8 w-8 text-red-500" />
                    <Star className="h-3 w-3 text-yellow-500 absolute -top-1 -right-1" />
                    <Star className="h-2 w-2 text-yellow-400 absolute top-1 -right-2" />
                    <Star className="h-2 w-2 text-yellow-600 absolute -top-2 right-0" />
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "A no-pressure PDF with key findings",
                    "Clear takeaways on how to move forward",
                    "No jargon, no cookie-cutter checklists — just pure insight",
                    "A 3-hour review, but a long-lasting impact"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative max-w-2xl mx-auto">
              {/* Background image for form only */}
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: "url('/lovable-uploads/22ac246d-b4ea-4ade-9e8c-11107bf02e8c.png')"
                }}
              ></div>
              
              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
              
              <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
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
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="websiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessBackground"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brief Background About Your Business <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your business, industry, target audience, and current challenges..."
                              className="min-h-[120px]"
                              {...field}
                            />
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
                          <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-bold py-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending Request..." : "Send My Request"}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    * Required fields. Your information is secure and will only be used to provide your free website review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ManualReviews />
      </main>
      <Footer />

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              Request Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="text-left space-y-2">
              <p>Thank you for submitting your website for a free 3-hour review!</p>
              <p>I've received your request and will get back to you within <strong>24 hours</strong> with your comprehensive website analysis.</p>
              <p>A confirmation email has been sent to your email address with all the details.</p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600"
            >
              Got it, thanks!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;
