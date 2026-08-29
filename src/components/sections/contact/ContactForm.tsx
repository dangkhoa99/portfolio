'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { FaTelegram } from 'react-icons/fa';
import { toast } from 'sonner';

import { contactFormSchema, defaultContactFormValue, TContactFormValue } from '@/common';
import { RHFTextArea, RHFTextField } from '@/components/core/input';
import { Button } from '@/components/ui/button';
import { FieldGroup } from '@/components/ui/field';
import { Spinner } from '@/components/ui/spinner';

const ContactFormComponent: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const methods = useForm<TContactFormValue>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { ...defaultContactFormValue },
  });

  const onSubmit = async (data: TContactFormValue) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const data = await response.json();
        console.error('[ERROR] Error from server:', data?.message);
        toast.error('Failed to send message. Please try again!');
        return;
      }

      toast.success('Message sent successfully!');
      methods.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again!');
      console.error('[ERROR] Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FieldGroup className="gap-3">
          <RHFTextField
            disabled={isLoading}
            autoComplete="name"
            control={methods.control}
            name="name"
            required
            label="Name"
            placeholder="Enter your name"
          />

          <RHFTextField
            disabled={isLoading}
            autoComplete="email"
            control={methods.control}
            name="email"
            type="email"
            required
            label="Email Address"
            placeholder="Enter your email"
          />

          <RHFTextField
            disabled={isLoading}
            autoComplete="off"
            control={methods.control}
            name="subject"
            required
            label="Subject"
            placeholder="Enter message subject"
          />

          <RHFTextArea
            disabled={isLoading}
            autoComplete="off"
            control={methods.control}
            name="message"
            required
            label="Your Message"
            placeholder="Write your message here"
            rows={10}
          />

          <Button
            variant="soft-outline"
            size="action"
            title="Send Message"
            type="submit"
            disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner />
                Sending...
              </>
            ) : (
              <>
                <FaTelegram />
                Send Message
              </>
            )}
          </Button>
        </FieldGroup>
      </form>
    </FormProvider>
  );
};

export const ContactForm = React.memo(ContactFormComponent);
