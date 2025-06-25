
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualReviews from '@/components/ManualReviews';

interface ContactFormData {
  name: string;
  websiteUrl: string;
  businessBackground: string;
  phone: string;
}

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      websiteUrl: '',
      businessBackground: '',
      phone: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
    alert('Thank you! Your request has been submitted. We will get back to you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Get Your Free Website Review</span>
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below and I'll provide you with a comprehensive 3-hour review of your website - completely free.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="websiteUrl"
                  rules={{ 
                    required: "Website URL is required",
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Please enter a valid URL (starting with http:// or https://)"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL *</FormLabel>
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
                  rules={{ required: "Business background is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brief Background About Your Business *</FormLabel>
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
                  rules={{ 
                    required: "Phone number is required",
                    pattern: {
                      value: /^[\+]?[\d\s\-\(\)]{10,}$/,
                      message: "Please enter a valid phone number"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
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
                >
                  Send My Request
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
        <ManualReviews />
      </main>
      <Footer />
    </div>
  );
};

export default ContactForm;
