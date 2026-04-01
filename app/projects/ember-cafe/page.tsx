import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const overviewItems = [
  { label: "Client Type", value: "Café / local business" },
  {
    label: "Goal",
    value: "Create a warm, modern website to showcase menu, ambience, and location",
  },
  { label: "Role", value: "UI/UX Design, Frontend Development" },
  { label: "Timeline", value: "Concept Project" },
];

const features = [
  "Menu showcase layout",
  "Location and contact integration",
  "Warm, inviting UI",
  "Mobile-friendly browsing",
];

export const metadata: Metadata = {
  title: "Ember Café Case Study",
  description:
    "A premium case study for Ember Café, a modern café website concept by SoraSpace.",
};

export default function EmberCafeCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#001D34] text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-40px] top-16 h-56 w-56 rounded-full bg-white/10 blur-[120px] sm:right-10 sm:h-72 sm:w-72" />
          <div className="absolute left-[-60px] top-1/2 h-48 w-48 rounded-full bg-[#4da7ff]/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/72 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            Back to Home
          </Link>

          <div className="mt-10 max-w-4xl rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/45 sm:text-xs">
              Case Study
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-white/52 sm:text-[0.82rem]">
              Modern café website experience
            </p>
            <h1 className="mt-4 max-w-3xl text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-[4.3rem]">
              Ember Café
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
              A clean and modern website concept for a café, designed to showcase
              menu, ambience, and location while creating a warm and inviting
              digital experience.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {overviewItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-md sm:p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-md sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              Problem
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              Helping a local café feel as inviting online as it does in person.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
              Many café businesses rely on social platforms alone, which makes it
              harder to present the menu clearly, show the atmosphere of the
              space, and help visitors quickly find contact details or directions.
              The website solves that by giving the brand a warmer, more reliable
              digital home.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-md sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              Solution
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              A calm, modern experience built around clarity and warmth.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
              The design approach focuses on strong visual hierarchy, soft editorial
              spacing, and a mobile-friendly browsing flow. Menu content, ambience,
              and location cues are surfaced early so visitors can move from
              discovery to decision with less friction.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              Features
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl md:text-4xl">
              Designed to make discovery feel simple and inviting.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,40,65,0.72),rgba(8,40,65,0.48))] px-5 py-5 text-sm text-white/78 shadow-[0_12px_32px_rgba(0,0,0,0.1)] backdrop-blur-md sm:px-6 sm:py-6 sm:text-base"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              Visual Preview
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl md:text-4xl">
              A warm, minimal interface with a local-first feel.
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.95rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:mt-10 sm:p-5">
            <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#061a2c]">
              <Image
                src="/projects/cafe.png"
                alt="Preview of the Ember Café website concept"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover transition duration-500 hover:scale-[1.01]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-6 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              Contact
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-[2rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[2.45rem] md:text-[3rem]">
              Let&apos;s build something like this
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/66 sm:text-base sm:leading-8">
              A focused digital experience can make a local brand feel more distinctive, more credible, and easier to choose.
            </p>
            <div className="mt-8 flex justify-center sm:mt-10">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/90 bg-white px-6 py-3 text-sm font-semibold text-[#001D34] shadow-[0_20px_50px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f9fc] hover:shadow-[0_28px_60px_rgba(255,255,255,0.18)] sm:w-auto sm:px-8"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
