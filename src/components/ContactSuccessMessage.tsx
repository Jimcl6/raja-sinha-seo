
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactSuccessMessageProps {
  onReset: () => void;
}

const ContactSuccessMessage = ({ onReset }: ContactSuccessMessageProps) => {
  return (
    <div className="text-center py-12">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
      <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for reaching out. I'll get back to you as soon as possible.
      </p>
      <Button 
        onClick={onReset}
        className="bg-yellow-500 hover:bg-yellow-600 text-black"
      >
        Send Another Message
      </Button>
    </div>
  );
};

export default ContactSuccessMessage;
