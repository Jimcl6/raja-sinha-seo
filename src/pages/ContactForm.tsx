
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Check, FileText, Star } from 'lucide-react';
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
          </div>
        </div>
        <ManualReviews />
      </main>
      <Footer />
    </div>
  );
};

export default ContactForm;
