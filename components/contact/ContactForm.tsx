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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = "Please enter your full name.";
    if (!data.email.trim() || !EMAIL_REGEX.test(data.email.trim())) newErrors.email = "Please enter a valid email.";
    if (!data.phone.trim() || !PHONE_REGEX.test(data.phone.trim())) newErrors.phone = "Please enter a valid phone.";
    if (!data.subject.trim()) newErrors.subject = "Please select a subject.";
    if (!data.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setFormData(initialFormData);
  };

  if (status === "success") {
    return (
      <div role="status" className="flex w-full max-w-full flex-col items-center justify-center gap-4 rounded-2xl border border-primary-100 bg-primary-50 p-6 text-center sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-primary-800">Thank You!</h3>
        <p className="max-w-full text-xs text-gray-600 sm:text-sm">Your message has been received.</p>
        <button type="button" onClick={() => setStatus("idle")} className="text-xs font-semibold text-primary-700 underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    /* CRITICAL FIX: 
      - Added 'max-w-xl' (or max-w-lg) to explicitly cap how wide the form can stretch.
      - Added 'mx-auto' to keep it beautifully centered on desktops.
      - Added 'box-border' safety to prevent paddings from extending the width calculation.
    */
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-xl mx-auto box-border space-y-4 px-4 sm:space-y-5 sm:px-0" 
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="w-full min-w-0">
          <label htmlFor="name" className="mb-1 block text-xs font-medium text-primary-800 sm:text-sm">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full box-border rounded-xl border bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-primary-500 ${
              errors.name ? "border-red-400" : "border-primary-100"
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-2xs text-red-500">{errors.name}</p>}
        </div>

        <div className="w-full min-w-0">
          <label htmlFor="phone" className="mb-1 block text-xs font-medium text-primary-800 sm:text-sm">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full box-border rounded-xl border bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-primary-500 ${
              errors.phone ? "border-red-400" : "border-primary-100"
            }`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="mt-1 text-2xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="w-full min-w-0">
        <label htmlFor="email" className="mb-1 block text-xs font-medium text-primary-800 sm:text-sm">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full box-border rounded-xl border bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-primary-500 ${
            errors.email ? "border-red-400" : "border-primary-100"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-2xs text-red-500">{errors.email}</p>}
      </div>

      <div className="w-full min-w-0">
        <label htmlFor="subject" className="mb-1 block text-xs font-medium text-primary-800 sm:text-sm">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full box-border rounded-xl border bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-primary-500 ${
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
        {errors.subject && <p className="mt-1 text-2xs text-red-500">{errors.subject}</p>}
      </div>

      <div className="w-full min-w-0">
        <label htmlFor="message" className="mb-1 block text-xs font-medium text-primary-800 sm:text-sm">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full box-border resize-none rounded-xl border bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-primary-500 ${
            errors.message ? "border-red-400" : "border-primary-100"
          }`}
          placeholder="Tell us how we can help..."
        />
        {errors.message && <p className="mt-1 text-2xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all disabled:opacity-70 sm:w-auto sm:px-6"
      >
        {status === "submitting" ? (
          <><Loader2 className="h-4 w-4 animate-spin" />Sending...</>
        ) : (
          <><Send className="h-4 w-4" />Send Message</>
        )}
      </button>
    </form>
  );
}