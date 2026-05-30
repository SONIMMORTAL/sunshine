"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useId } from "react";
import { Send, CheckCircle2, AlertTriangle, Calendar, PhoneCall, User2, Mail, MessageSquare, Baby, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

interface InquiryForm {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  preferredTour: string;
  message: string;
}

const EMPTY: InquiryForm = {
  parentName: "",
  email: "",
  phone: "",
  childAge: "",
  preferredTour: "",
  message: "",
};

const AGE_OPTIONS = [
  "Infant (6 weeks – 18 months)",
  "Toddler (18 months – 3 years)",
  "Preschool (3 – 5 years)",
  "Pre-K (4 – 5 years)",
  "School-age (5 – 12 years)",
];

function isEmail(value: string): boolean {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
}

/**
 * Tour-inquiry form. Submits to `/api/inquiry`, shows inline success/error
 * confirmation, and includes accessible labels and live-region status.
 */
export function ContactSection() {
  const baseId = useId();
  const [data, setData] = useState<InquiryForm>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryForm, string>>>({});
  const [serverMessage, setServerMessage] = useState<string>("");

  const update = <K extends keyof InquiryForm>(key: K, value: InquiryForm[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof InquiryForm, string>> = {};
    if (!data.parentName.trim()) next.parentName = "Please tell us your name.";
    if (!data.email.trim() || !isEmail(data.email))
      next.email = "Please share a valid email address.";
    if (!data.phone.trim() || data.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please share a phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("success");
      setData(EMPTY);
    } catch (err) {
      setStatus("error");
      setServerMessage(err instanceof Error ? err.message : "Please try again.");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby={`${baseId}-heading`}
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,138,43,0.18),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(91,192,248,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,138,43,0.10),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.10),transparent_60%)]" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="font-display text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--sunshine-orange)] dark:text-yellow-300">
            Book a tour
          </p>
          <h2
            id={`${baseId}-heading`}
            className="mt-2 font-heading text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance dark:text-white"
          >
            Come <span className="wavy-underline-pink">say hi</span> in person.
          </h2>
          <p className="mt-5 max-w-xl font-display text-lg text-muted-foreground sm:text-xl text-pretty dark:text-slate-300">
            Tell us a bit about your little one and we&rsquo;ll text or email
            within a few hours to set up a private tour. Or call us
            anytime &mdash; we&rsquo;d love to chat.
          </p>

          <ul className="mt-7 grid gap-3">
            <li className="inline-flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-display font-bold text-foreground shadow-sm ring-1 ring-foreground/5 backdrop-blur dark:bg-slate-900/80 dark:text-slate-100 dark:ring-white/10">
              <PhoneCall className="h-5 w-5 text-[var(--sunshine-blue)] dark:text-sky-300" aria-hidden="true" />
              <a href="tel:+17184046909" className="hover:underline">
                (718) 404-6909
              </a>
            </li>
            <li className="inline-flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-display font-bold text-foreground shadow-sm ring-1 ring-foreground/5 backdrop-blur dark:bg-slate-900/80 dark:text-slate-100 dark:ring-white/10">
              <Mail className="h-5 w-5 text-[var(--sunshine-magenta)] dark:text-pink-400" aria-hidden="true" />
              <a
                href="mailto:sunshineslearninglaboratoryinc@gmail.com"
                className="hover:underline"
              >
                sunshineslearninglaboratoryinc@gmail.com
              </a>
            </li>
            <li className="inline-flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-display font-bold text-foreground shadow-sm ring-1 ring-foreground/5 backdrop-blur dark:bg-slate-900/80 dark:text-slate-100 dark:ring-white/10">
              <Calendar className="h-5 w-5 text-[var(--sunshine-orange)] dark:text-yellow-300" aria-hidden="true" />
              Tours: Mon–Fri, 10am–4pm
            </li>
          </ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 90 }}
          onSubmit={onSubmit}
          noValidate
          aria-busy={status === "submitting"}
          className="relative rounded-[32px] border-4 border-white bg-white p-6 shadow-[0_30px_60px_-30px_rgba(31,42,68,0.4)] sm:p-8 dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute -top-3 right-6 rotate-2 rounded-full bg-[var(--sunshine-yellow)] px-4 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-foreground shadow dark:text-slate-900">
            We reply within hours
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              id={`${baseId}-name`}
              label="Parent / guardian name"
              icon={User2}
              required
              autoComplete="name"
              value={data.parentName}
              onChange={(value) => update("parentName", value)}
              error={errors.parentName}
            />
            <FormField
              id={`${baseId}-email`}
              label="Email"
              icon={Mail}
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={data.email}
              onChange={(value) => update("email", value)}
              error={errors.email}
            />
            <FormField
              id={`${baseId}-phone`}
              label="Phone"
              icon={PhoneCall}
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              value={data.phone}
              onChange={(value) => update("phone", value)}
              error={errors.phone}
            />
            <SelectField
              id={`${baseId}-age`}
              label="Child's age"
              icon={Baby}
              value={data.childAge}
              onChange={(value) => update("childAge", value)}
              options={AGE_OPTIONS}
            />
            <FormField
              id={`${baseId}-tour`}
              label="Preferred tour date"
              icon={Calendar}
              type="date"
              autoComplete="off"
              value={data.preferredTour}
              onChange={(value) => update("preferredTour", value)}
              className="sm:col-span-2"
            />
            <FormField
              id={`${baseId}-msg`}
              label="Anything we should know?"
              icon={MessageSquare}
              multiline
              value={data.message}
              onChange={(value) => update("message", value)}
              className="sm:col-span-2"
            />
          </div>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-xs text-muted-foreground sm:max-w-xs dark:text-slate-400">
              By sending this, you agree we can reply by email or phone. We
              never share your info.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-base font-extrabold text-primary-foreground shadow-[0_10px_0_-4px_rgba(255,138,43,0.6)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-70",
              )}
            >
              {status === "submitting" ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-4 w-4" aria-hidden="true" />
              )}
              {status === "submitting" ? "Sending…" : "Request a tour"}
            </button>
          </div>

          <div role="status" aria-live="polite" className="mt-5">
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 overflow-hidden rounded-2xl border-2 border-[var(--sunshine-green)]/40 bg-[var(--sunshine-green)]/10 p-4 text-foreground dark:border-emerald-300/40 dark:bg-emerald-500/10 dark:text-emerald-50"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--sunshine-green)] dark:text-emerald-300" aria-hidden="true" />
                  <p className="font-display text-sm font-bold">
                    Thanks! We received your message and will reach out within a
                    few hours. (Want it faster? Call{" "}
                    <a className="underline" href="tel:+17184046909">
                      (718) 404-6909
                    </a>
                    .)
                  </p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 overflow-hidden rounded-2xl border-2 border-[var(--sunshine-red)]/40 bg-[var(--sunshine-red)]/10 p-4 text-foreground dark:border-rose-400/40 dark:bg-rose-500/10 dark:text-rose-50"
                >
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-[var(--sunshine-red)] dark:text-rose-300" aria-hidden="true" />
                  <p className="font-display text-sm font-bold">
                    {serverMessage || "Something went wrong."}{" "}
                    <a className="underline" href="tel:+17184046909">
                      Call us instead.
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  multiline?: boolean;
  error?: string;
  className?: string;
}

function FormField({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  inputMode,
  multiline,
  error,
  className,
}: FieldProps) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="inline-flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-wider text-foreground dark:text-slate-200"
      >
        <Icon className="h-4 w-4 text-[var(--sunshine-blue)] dark:text-sky-300" aria-hidden="true" />
        {label}
        {required && (
          <span aria-hidden="true" className="text-[var(--sunshine-red)] dark:text-rose-300">
            *
          </span>
        )}
      </label>
      <Tag
        id={id}
        name={id}
        type={multiline ? undefined : type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        rows={multiline ? 4 : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-2xl border-2 bg-white px-4 py-3 font-display text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:outline-none focus:ring-4",
          "dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500",
          error
            ? "border-[var(--sunshine-red)] focus:border-[var(--sunshine-red)] focus:ring-[var(--sunshine-red)]/30 dark:border-rose-400/60"
            : "border-foreground/10 focus:border-[var(--sunshine-blue)] focus:ring-[var(--sunshine-blue)]/25 dark:border-white/10 dark:focus:border-sky-400 dark:focus:ring-sky-400/25",
        )}
      />
      {error && (
        <p
          id={`${id}-err`}
          className="font-display text-xs font-bold text-[var(--sunshine-red)] dark:text-rose-300"
        >
          {error}
        </p>
      )}
    </div>
  );
}

interface SelectFieldProps {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}

function SelectField({ id, label, icon: Icon, value, onChange, options }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="inline-flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-wider text-foreground dark:text-slate-200"
      >
        <Icon className="h-4 w-4 text-[var(--sunshine-blue)] dark:text-sky-300" aria-hidden="true" />
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border-2 border-foreground/10 bg-white px-4 py-3 font-display text-base text-foreground shadow-sm transition-colors focus:border-[var(--sunshine-blue)] focus:outline-none focus:ring-4 focus:ring-[var(--sunshine-blue)]/25 dark:bg-slate-950 dark:text-slate-100 dark:border-white/10 dark:focus:border-sky-400 dark:focus:ring-sky-400/25"
      >
        <option value="">Select an age group</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
