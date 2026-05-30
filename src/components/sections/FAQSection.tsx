"use client";

import { useId } from "react";
import { Accordion } from "@base-ui/react/accordion";
import { motion } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQS: readonly FaqEntry[] = [
  {
    question: "What hours are you open?",
    answer:
      "We&rsquo;re open Monday through Friday from 8:00 AM to 6:00 PM. We&rsquo;re closed on major federal holidays.",
  },
  {
    question: "What are your teacher-to-child ratios?",
    answer:
      "We exceed New York State requirements: typically 1:4 for infants, 1:5 for young toddlers, 1:7 for older toddlers, and 1:9 for preschool. Small groups mean more cuddles, more conversation, and more individualized learning.",
  },
  {
    question: "Are meals and snacks included?",
    answer:
      "Yes &mdash; weekly tuition includes a hot breakfast, lunch, and two snacks. Menus are pediatrician-reviewed, kid-tested, and rotate every two weeks. We accommodate allergies and most dietary restrictions; please share specifics on your tour.<br/><br/><strong>Milk Policy:</strong> If your child prefers or requires a specific type of milk, please provide enough for the duration of their stay. Please note that New York State regulations require us to serve whole milk to children under 1 year of age, and 1% milk to children 2 and older, unless we have a doctor's note on file suggesting an alternative.",
  },
  {
    question: "Do you offer an After School program and transportation?",
    answer:
      "We offer a wonderful After School program! While we do not provide our own transportation, you can easily coordinate with your child's school to designate Sunshine's Learning Laboratory as their official school bus drop-off location.",
  },
  {
    question: "What is your sick policy?",
    answer:
      "Children must be fever-free (and free of any contagious symptoms) for at least 24 hours without medication before returning. We follow NYC DOH and NYS OCFS guidance and notify all families if there&rsquo;s an exposure in the program.",
  },
  {
    question: "How do you keep kids safe?",
    answer:
      "Our facility is keypad-secured with a check-in/out app, security cameras throughout common spaces, and 100% of staff are background-checked, fingerprinted, and CPR/First-Aid certified. We run monthly safety drills and post our NYS license on-site.",
  },
  {
    question: "Tell me about the curriculum.",
    answer:
      "We follow a Montessori-inspired, whole-child curriculum across our four pillars &mdash; Learn, Grow, Play, Share. Daily routines include literacy, early math and STEM lab, Spanish immersion, art studio, music & movement, and lots of outdoor and free-choice play.",
  },
  {
    question: "How do you support transitions for new families?",
    answer:
      "We schedule a free 90-minute play visit before your child&rsquo;s first day, share daily photos and notes via our parent app, and assign a primary caregiver so your child has a familiar face from day one. Most kids settle within a week.",
  },
  {
    question: "Do you accept vouchers or offer tuition assistance?",
    answer:
      "Yes &mdash; we accept ACS, HRA, and CCAP vouchers and offer sibling discounts and a need-based scholarship for qualifying families. Call (718) 404-6909 and we&rsquo;ll walk you through it.",
  },
];

/**
 * FAQ section using Base UI's accessible Accordion. Also emits a FAQPage
 * JSON-LD block so Google can render rich-result accordions in search.
 */
export function FAQSection() {
  const headingId = useId();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer.replace(/&[a-z]+;/g, (m) => {
          const map: Record<string, string> = {
            "&rsquo;": "\u2019",
            "&mdash;": "\u2014",
            "&ndash;": "\u2013",
            "&amp;": "&",
            "&quot;": "\"",
          };
          return map[m] ?? m;
        }),
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby={headingId}
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(91,192,248,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_60%)]" />

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--sunshine-blue)]/30 bg-white px-4 py-2 font-display text-xs font-extrabold uppercase tracking-widest text-[var(--sunshine-blue)] shadow-sm dark:border-sky-300/30 dark:bg-slate-900 dark:text-sky-300">
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            Parent FAQ
          </div>
          <h2
            id={headingId}
            className="mt-4 font-heading text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance dark:text-white"
          >
            All the questions you&rsquo;re{" "}
            <span className="wavy-underline">already wondering</span>.
          </h2>
          <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl text-pretty dark:text-slate-300">
            Quick answers about hours, ratios, meals, safety and more. Don&rsquo;t see
            yours? Call us at{" "}
            <a className="font-bold text-foreground underline dark:text-yellow-300" href="tel:+17184046909">
              (718) 404-6909
            </a>
            .
          </p>
        </div>

        <Accordion.Root className="mt-12 grid gap-3" defaultValue={[0]}>
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
            >
              <Accordion.Item
                value={index}
                className="overflow-hidden rounded-3xl border-2 border-foreground/10 bg-white shadow-sm transition-[box-shadow,border-color] data-[open]:border-[var(--sunshine-blue)]/40 data-[open]:shadow-xl dark:border-white/10 dark:bg-slate-900 dark:data-[open]:border-sky-300/40"
              >
                <Accordion.Header className="m-0">
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-lg font-extrabold text-foreground transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 sm:px-6 sm:text-xl dark:text-white dark:hover:bg-white/5">
                    <span>{faq.question}</span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-[var(--sunshine-blue)] transition-transform duration-300 group-data-[panel-open]:rotate-180 dark:text-sky-300"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="faq-panel">
                  <div className="px-5 pb-5 sm:px-6">
                    <p
                      className="font-display text-base leading-relaxed text-muted-foreground dark:text-slate-300"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border-2 border-foreground/10 bg-white p-6 text-center sm:flex-row sm:text-left dark:border-white/10 dark:bg-slate-900"
        >
          <div>
            <p className="font-heading text-xl font-extrabold text-foreground dark:text-white">
              Still have questions?
            </p>
            <p className="mt-1 font-display text-sm text-muted-foreground dark:text-slate-400">
              We love helping families figure things out — call or send a quick note.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+17184046909"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 bg-white px-5 py-3 font-display text-sm font-extrabold text-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 dark:border-white/15 dark:bg-slate-950 dark:text-slate-100"
            >
              Call (718) 404-6909
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-display text-sm font-extrabold text-primary-foreground shadow-[0_8px_0_-3px_rgba(255,138,43,0.6)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            >
              Ask a question
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
