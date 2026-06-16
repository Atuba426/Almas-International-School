"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,15}$/;

/**
 * Client-side validated contact form. Validates required fields,
 * email format, and phone format before "submitting" (simulated
 * here — wire up to an API route or email service in production).
 */
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!PHONE_REGEX.test(data.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!data.subject.trim()) {
      newErrors.subject = "Please select a subject.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as the user edits
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    // Simulate an async submission. Replace with a real API call,
    // e.g. POST to /api/contact which sends an email or stores the lead.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    setFormData(initialFormData);
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-primary-100 bg-primary-50 p-10 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-700 text-white">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-xl font-bold text-primary-800">
          Thank You!
        </h3>
        <p className="max-w-sm text-sm text-gray-600 md:text-base">
          Your message has been received. Our team will get back to you
          within 1-2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary-700 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-primary-800"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary-500 ${
              errors.name ? "border-red-400" : "border-primary-100"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-primary-800"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary-500 ${
              errors.phone ? "border-red-400" : "border-primary-100"
            }`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-500">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-primary-800"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary-500 ${
            errors.email ? "border-red-400" : "border-primary-100"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-primary-800"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary-500 ${
            errors.subject ? "border-red-400" : "border-primary-100"
          }`}
        >
          <option value="">Select a subject</option>
          <option value="admissions">Admissions Enquiry</option>
          <option value="hostel">Boys Hostel Enquiry</option>
          <option value="academics">Academics Information</option>
          <option value="general">General Enquiry</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-red-500">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-primary-800"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full resize-none rounded-2xl border bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary-500 ${
            errors.message ? "border-red-400" : "border-primary-100"
          }`}
          placeholder="Tell us how we can help..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
