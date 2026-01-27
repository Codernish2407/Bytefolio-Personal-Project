'use server';

import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { connectToDatabase } from '@/lib/mongodb';
import { Contact } from '@/lib/models/Contact';

export async function submitContactForm(data: ContactFormData) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  try {
    await connectToDatabase();

    const { name, email, message } = validatedFields.data;

    await Contact.create({
      name,
      email,
      message,
    });

    return {
      success: true,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Database error. Please try again later.',
    };
  }
}
