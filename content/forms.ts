/**
 * Application form schemas. The same schema renders the form (components/forms/ApplicationForm.tsx) and
 * validates the submission on the server (app/api/applications/route.ts), so the two can't drift.
 */

import { productNames } from "./products";

export type FieldType = "text" | "email" | "tel" | "url" | "textarea" | "select" | "checkboxes";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  hint?: string;
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  /** Spans both columns on wide screens (textareas and checkbox groups always do). */
  wide?: boolean;
}

export interface FormSchema {
  id: FormId;
  title: string;
  submitLabel: string;
  /** Subject used for the email fallback. */
  emailSubject: string;
  fields: FormField[];
}

export type FormId = "startup" | "referral" | "products" | "partner";

const contact = {
  name: { name: "fullName", label: "Full name", type: "text", required: true, autoComplete: "name" },
  email: { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  phone: {
    name: "phone",
    label: "Phone / WhatsApp",
    type: "tel",
    required: true,
    autoComplete: "tel",
    placeholder: "+91 …",
  },
  city: { name: "city", label: "City", type: "text", required: true, autoComplete: "address-level2" },
  linkedin: { name: "linkedin", label: "LinkedIn profile", type: "url", placeholder: "linkedin.com/in/…" },
} satisfies Record<string, FormField>;

export const forms: Record<FormId, FormSchema> = {
  startup: {
    id: "startup",
    title: "Startup Program application",
    submitLabel: "Submit application",
    emailSubject: "Startup Program application",
    fields: [
      contact.name,
      contact.email,
      contact.phone,
      { name: "startupName", label: "Startup name", type: "text", required: true, autoComplete: "organization" },
      { name: "website", label: "Website or product link", type: "url", placeholder: "Optional" },
      {
        name: "stage",
        label: "Current stage",
        type: "select",
        required: true,
        options: ["Idea", "Prototype or MVP in progress", "Live product with early users", "Generating revenue"],
      },
      {
        name: "problem",
        label: "What problem are you solving, and for whom?",
        type: "textarea",
        required: true,
      },
      {
        name: "needs",
        label: "Where do you need help?",
        type: "checkboxes",
        required: true,
        options: [
          "Product strategy & MVP planning",
          "UI/UX & product design",
          "Web or mobile development",
          "AI or automation",
          "QA & testing",
          "Technical leadership",
        ],
      },
      {
        name: "structure",
        label: "Engagement structure you're open to",
        type: "select",
        options: ["Equity-based partnership", "Paid engagement", "A mix of both", "Not sure yet"],
        hint: "This helps the first conversation. Nothing is agreed until both sides sign.",
      },
      { name: "notes", label: "Anything else we should know?", type: "textarea" },
    ],
  },

  referral: {
    id: "referral",
    title: "Referral & Ambassador Program application",
    submitLabel: "Join the NHB network",
    emailSubject: "Referral & Ambassador Program application",
    fields: [
      contact.name,
      contact.email,
      contact.phone,
      contact.city,
      { name: "organization", label: "College / organisation", type: "text", autoComplete: "organization" },
      {
        name: "category",
        label: "How would you like to participate?",
        type: "select",
        required: true,
        options: ["Network Referrer", "Student City Ambassador", "Technical Contributor / Community Member"],
      },
      contact.linkedin,
      { name: "why", label: "Why do you want to join?", type: "textarea", required: true },
      {
        name: "experience",
        label: "Relevant experience or network",
        type: "textarea",
        hint: "For example, the kinds of businesses or communities you're connected to.",
      },
    ],
  },

  products: {
    id: "products",
    title: "Product Partner application",
    submitLabel: "Become a Product Partner",
    emailSubject: "Products & Revenue Program application",
    fields: [
      contact.name,
      contact.email,
      contact.phone,
      contact.city,
      {
        name: "profile",
        label: "Which best describes you?",
        type: "select",
        required: true,
        options: ["Student", "Working professional", "Business owner or consultant", "Sales professional", "Other"],
      },
      contact.linkedin,
      {
        name: "products",
        label: "Products you'd like to represent",
        type: "checkboxes",
        required: true,
        options: productNames,
      },
      {
        name: "network",
        label: "Which businesses or industries can you reach?",
        type: "textarea",
        required: true,
      },
      { name: "why", label: "Anything else you'd like us to know?", type: "textarea" },
    ],
  },

  partner: {
    id: "partner",
    title: "Agency Partner Program application",
    submitLabel: "Apply for partnership",
    emailSubject: "Agency Partner Program application",
    fields: [
      { name: "agencyName", label: "Agency name", type: "text", required: true, autoComplete: "organization" },
      { name: "website", label: "Website", type: "url", required: true, placeholder: "youragency.com" },
      { name: "contactName", label: "Contact person", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Business email", type: "email", required: true, autoComplete: "email" },
      { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+91 …" },
      { name: "location", label: "Location", type: "text", required: true, autoComplete: "address-level2" },
      {
        name: "teamSize",
        label: "Team size",
        type: "select",
        required: true,
        options: ["1–5", "6–15", "16–50", "More than 50"],
      },
      { name: "portfolio", label: "Portfolio link", type: "url", required: true },
      { name: "services", label: "Core services", type: "textarea", required: true },
      {
        name: "caseStudies",
        label: "Relevant case studies",
        type: "textarea",
        hint: "Links or short descriptions of work you can show us.",
      },
      {
        name: "collaboration",
        label: "Where would you like to collaborate?",
        type: "checkboxes",
        required: true,
        options: [
          "Product & UI/UX design",
          "Web & mobile development",
          "Custom software & SaaS",
          "AI & automation",
          "QA & testing",
          "Technical consultation",
        ],
      },
      { name: "notes", label: "Additional information", type: "textarea" },
    ],
  },
};
