'use server';

/**
 * @fileOverview A flow to analyze contact form submissions for personally identifiable information (PII).
 *
 * - analyzeContactFormSubmission - A function that analyzes contact form submissions for PII.
 * - AnalyzeContactFormSubmissionInput - The input type for the analyzeContactFormSubmission function.
 * - AnalyzeContactFormSubmissionOutput - The return type for the analyzeContactFormSubmission function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeContactFormSubmissionInputSchema = z.object({
  message: z.string().describe('The message from the contact form submission.'),
});
export type AnalyzeContactFormSubmissionInput = z.infer<typeof AnalyzeContactFormSubmissionInputSchema>;

const AnalyzeContactFormSubmissionOutputSchema = z.object({
  piiSummary: z.string().describe('A summary of the types of personally identifiable information (PII) detected in the message.'),
});
export type AnalyzeContactFormSubmissionOutput = z.infer<typeof AnalyzeContactFormSubmissionOutputSchema>;

export async function analyzeContactFormSubmission(input: AnalyzeContactFormSubmissionInput): Promise<AnalyzeContactFormSubmissionOutput> {
  return analyzeContactFormSubmissionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeContactFormSubmissionPrompt',
  input: {schema: AnalyzeContactFormSubmissionInputSchema},
  output: {schema: AnalyzeContactFormSubmissionOutputSchema},
  prompt: `You are an expert in identifying personally identifiable information (PII).

  Analyze the following contact form message and provide a summary of the types of PII detected.

  Message: {{{message}}}

  If no PII is found, state that no PII was detected.
  `,
});

const analyzeContactFormSubmissionFlow = ai.defineFlow(
  {
    name: 'analyzeContactFormSubmissionFlow',
    inputSchema: AnalyzeContactFormSubmissionInputSchema,
    outputSchema: AnalyzeContactFormSubmissionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
