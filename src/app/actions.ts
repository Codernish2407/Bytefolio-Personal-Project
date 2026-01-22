'use server';

import { analyzeContactFormSubmission } from '@/ai/flows/contact-form-pii-reasoning';
import { contactSchema, type ContactFormData } from '@/lib/schemas';

export async function submitContactForm(data: ContactFormData) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { name, email, message } = validatedFields.data;

    const piiAnalysis = await analyzeContactFormSubmission({ message });

    // Simulate saving to database
    console.log("New Contact Form Submission Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("---");
    console.log("PII Analysis Result:", piiAnalysis.piiSummary);
    console.log("---");


    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
