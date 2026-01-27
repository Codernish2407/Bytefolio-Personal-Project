'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitContactForm } from '@/app/actions';
import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { socialLinks } from '@/lib/data';
import Link from 'next/link';

export function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitContactForm(data);
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.message || 'There was a problem with your request.',
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Get In Touch
        </h2>
        <Card className="max-w-3xl mx-auto glass-card">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Have a question or want to work together? Feel free to reach out.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
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
                            <Textarea placeholder="Your message..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="font-semibold text-lg">Connect with me</h3>
                <p className="text-muted-foreground">
                  Find me on other platforms.
                </p>
                <div className="flex flex-col space-y-3">
                  {socialLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
