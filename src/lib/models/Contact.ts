import mongoose, { Schema, models } from 'mongoose';

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Contact =
  models.Contact || mongoose.model('Contact', ContactSchema);
