'use server';

import { analyzeContactFormSubmission } from '@/ai/flows/contact-form-pii-reasoning';
import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { initializeFirebase } from '@/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

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
    const { firestore } = initializeFirebase();
    const { name, email, message } = validatedFields.data;

    const piiAnalysis = await analyzeContactFormSubmission({ message });

    // Save to database
    const submissionCollection = collection(firestore, 'contact_form_submissions');
    const newSubmissionRef = doc(submissionCollection);
    
    await setDoc(newSubmissionRef, {
      id: newSubmissionRef.id,
      name,
      email,
      message,
      submissionDate: new Date().toISOString(),
      piiSummary: piiAnalysis.piiSummary,
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
}
