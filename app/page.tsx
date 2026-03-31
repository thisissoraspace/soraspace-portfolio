"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Code2,
  LayoutTemplate,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Portfolio Websites",
    text: "Clean and modern portfolio sites for personal brands, creators, and professionals.",
  },
  {
    title: "Business Landing Pages",
    text: "Focused landing pages for small businesses, local services, and product-based brands.",
  },
  {
    title: "E-commerce Design",
    text: "Premium storefront concepts that make online brands feel more polished and trustworthy.",
  },
];

const heroServices = [
  {
    icon: LayoutTemplate,
    title: "Website Design",
    text: "Thoughtful layouts, premium visual direction, and clear hierarchy tailored to your brand.",
  },
  {
    icon: Code2,
    title: "Website Development",
    text: "Responsive builds that feel polished, load cleanly, and work smoothly across devices.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Websites",
    text: "Professional websites designed to help small businesses look established and trustworthy online.",
  },
];

const projects = [
  {
    title: "Ziro Juice",
    subtitle: "Local beverage brand website",
    summary: "A premium beverage concept centered on freshness, product story, and conversion clarity.",
    description:
      "A premium landing page concept for a local juice brand with product storytelling, trust-building sections, and a clean mobile-first shopping flow.",
    tags: ["Branding", "Landing Page", "Mobile-first"],
    metrics: ["Modern hero section", "Product spotlight", "Simple CTA flow"],
  },
  {
    title: "Thrift Vault",
    subtitle: "Fashion thrift store UI",
    summary: "A visual-first storefront concept designed to make a thrift brand feel sharper and more collectible.",
    description:
      "A storefront concept designed to make a small clothing brand feel polished online with collection cards, featured drops, and a visual-first shopping layout.",
    tags: ["E-commerce", "UI Design", "Visual Layout"],
    metrics: ["Drop-style sections", "Category browsing", "Premium product feel"],
  },
];

export default function SoraSpacePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#001D34] text-white overflow-x-hidden">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#001D34]/75 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <a href="#top" className="text-sm font-bold tracking-[0.28em] sm:text-base sm:tracking-[0.35em]">
              SORA
            </a>

            <div className="hidden items-center gap-5 text-sm text-white/80 md:flex lg:gap-8">
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <div className="flex flex-col text-sm text-white/85">
                  {[
                    ["About", "#about"],
                    ["Services", "#services"],
                    ["Projects", "#projects"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-3 py-3 hover:bg-white/10 transition"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section
        id="top"
        className="relative flex min-h-screen items-center justify-center px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pt-32 lg:px-8"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-56px] top-16 h-52 w-52 rounded-full bg-white/12 blur-[120px] sm:right-10 sm:h-72 sm:w-72" />
          <div className="absolute bottom-12 left-[-44px] h-44 w-44 rounded-full bg-[#4da7ff]/10 blur-[110px] sm:left-8 sm:h-64 sm:w-64" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-6xl"
        >
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.96fr)] lg:gap-20">
            <div className="text-center lg:text-left">
              <div className="inline-flex max-w-full rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.26em] text-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-4 sm:text-[11px] sm:tracking-[0.32em]">
                SoraSpace Digital Studio
              </div>
              <p className="mt-8 text-[10px] uppercase tracking-[0.34em] text-white/45 sm:mt-9 sm:text-xs sm:tracking-[0.4em]">
                Built with intent.
              </p>
              <h1 className="mx-auto mt-3 max-w-3xl text-[2.75rem] font-semibold leading-[0.92] tracking-[-0.06em] sm:mt-4 sm:text-[3.6rem] md:text-[4.1rem] lg:mx-0 lg:max-w-2xl lg:text-[5.15rem]">
                Dark, minimal websites with a premium point of view.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/68 sm:mt-7 sm:text-base sm:leading-8 lg:mx-0 lg:max-w-lg lg:text-[1.02rem]">
                Crafted for brands that need clarity, restraint, and stronger visual trust across mobile, tablet, and desktop.
              </p>

              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-11 sm:flex-row sm:flex-wrap lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/90 bg-white px-6 py-3 text-center text-sm font-semibold text-[#001D34] shadow-[0_18px_45px_rgba(255,255,255,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f9fc] sm:w-auto sm:px-7"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-center text-sm font-medium text-white/88 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] sm:w-auto sm:px-7"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 text-left sm:mt-12 sm:grid-cols-3 sm:gap-4">
                {[
                  ["Minimal", "Clear hierarchy, restrained detail, and cleaner spacing"],
                  ["Responsive", "Balanced layouts that scale without losing presence"],
                  ["Premium", "Dark surfaces and sharper contrast that feel intentional"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-white/68">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-md md:max-w-xl lg:max-w-none">
              <div className="rounded-[1.7rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-4">
                <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,#0b2d4a_0%,#071e31_100%)] p-4 sm:rounded-[1.6rem] sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/40">Featured Style</p>
                      <h2 className="mt-2 text-lg font-semibold sm:text-[1.35rem]">Built with intent.</h2>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] sm:h-12 sm:w-12">
                      <div className="h-3 w-3 rounded-full bg-white/80" />
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-[#061726]/80 p-4 sm:mt-8 sm:rounded-[1.4rem] sm:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">Hero Preview</p>
                        <p className="mt-2 text-sm text-white/72">Polished hierarchy with a darker, more deliberate tone.</p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/50">
                        Studio
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4">
                        <div className="h-2 w-16 rounded-full bg-white/15" />
                        <div className="mt-4 h-16 rounded-[1rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] sm:h-20" />
                        <div className="mt-4 flex gap-3">
                          <div className="h-10 flex-1 rounded-full bg-white/85" />
                          <div className="h-10 w-24 rounded-full border border-white/10 bg-white/[0.05]" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.05] p-4">
                          <div className="h-3 w-14 rounded-full bg-white/15" />
                          <div className="mt-4 h-24 rounded-[1rem] bg-white/[0.08] sm:h-28" />
                        </div>
                        <div className="rounded-[1.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4">
                          <div className="h-3 w-12 rounded-full bg-white/15" />
                          <div className="mt-4 h-24 rounded-[1rem] border border-white/10 bg-[#0b314f] sm:h-28" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50">Services</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              Services
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {heroServices.map((item) => {
              const Icon = item.icon;

              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28 }}
                className="group flex h-full flex-col rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(0,0,0,0.22)] sm:rounded-[1.65rem] sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/38 transition duration-300 group-hover:border-white/20 group-hover:text-white/55">
                    Service
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/65 transition duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:text-white">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-white sm:text-[1.45rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-7 text-white/66 sm:max-w-none sm:text-base sm:leading-8">
                  {item.text}
                </p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10"
        >
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50">About</p>
            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Building SoraSpace into a modern digital studio.
            </h2>
          </div>
          <p className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8 lg:text-lg">
            I build clean, modern websites for local businesses, product-based brands, and personal portfolios. My focus is simple: make the site look premium, feel smooth on every screen size, and present the brand with clarity.
          </p>
        </motion.div>
      </section>

      <section id="services-overview" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50">Services</p>
          <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:rounded-[1.5rem] sm:p-6"
              >
                <h3 className="text-lg font-semibold sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50">Projects</p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Concept work with a client-ready feel.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
            Select concept work focused on stronger hierarchy, cleaner product framing, and a more premium first impression.
          </p>

          <div className="mt-10 grid gap-6 sm:mt-12 lg:gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:rounded-[1.85rem]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-white/8 blur-3xl" />
                </div>

                <div className="relative border-b border-white/10 p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,#0a2a46_0%,#071c2d_100%)] p-4 sm:rounded-[1.45rem] sm:p-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] opacity-90 transition duration-500 group-hover:scale-105" />
                    <div className="relative flex items-center justify-between">
                      <div className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/55 backdrop-blur-md">
                        Case Study
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      </div>
                    </div>

                    <div className="relative mt-8 rounded-[1.15rem] border border-white/10 bg-[#061a2c]/90 p-3 sm:p-4 transition duration-500 group-hover:-translate-y-1">
                      <div className="h-3 w-16 rounded-full bg-white/15" />
                      <div className="mt-4 h-24 rounded-[1rem] bg-white/[0.08] sm:h-28" />
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="h-16 rounded-[0.9rem] bg-white/[0.08]" />
                        <div className="h-16 rounded-[0.9rem] border border-white/10 bg-white/[0.04]" />
                      </div>
                      <div className="mt-3 h-10 rounded-full border border-white/10 bg-white/[0.05]" />
                    </div>

                    <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-md">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/42">
                          {project.subtitle}
                        </p>
                        <h3 className="mt-3 text-[1.7rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[2rem]">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/68 sm:text-[0.95rem] sm:leading-7">
                          {project.summary}
                        </p>
                      </div>
                      <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/45 sm:block">
                        Featured
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-5 sm:p-6">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-white/38">
                      Overview
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5">
                    <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/38">
                      Focus
                    </div>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/66 transition duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-3">
                    {project.metrics.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.15rem] border border-white/10 bg-[#082841]/55 px-4 py-3 text-sm text-white/76 transition duration-300 group-hover:border-white/20 group-hover:bg-[#0b314f]/72"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">Status</p>
                      <p className="mt-1 text-sm text-white/75">Concept project for portfolio presentation</p>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/18 bg-white/[0.03] px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.08] group-hover:border-white/28 sm:w-auto"
                    >
                      Build Similar
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              Let’s build something that looks expensive.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Available for portfolio websites, business landing pages, and premium website concepts for modern brands.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:soraspace03@email.com"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#001D34]"
              >
                soraspace03@email.com
              </a>
              <a
                href="https://instagram.com/soraspace__"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium transition hover:bg-white/10"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF8F0] px-4 py-16 text-[#1A1A1A] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#d96f1f] sm:text-xs">Featured Concept</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Ziro Juice
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              A modern juice brand website focused on freshness, local sourcing, and clean UI design. Designed to attract customers and increase online orders.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-8 md:mt-12 md:grid-cols-2 md:gap-10 lg:gap-14">
            <div className="order-2 md:order-1">
              <div className="mb-6 flex flex-wrap gap-2.5 sm:gap-3">
                {["UI/UX", "E-commerce", "Mobile First", "Local Brand"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-100 px-4 py-1.5 text-sm text-orange-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 text-sm text-gray-700 sm:text-base">
                <li>Clean product-focused layout</li>
                <li>Mobile-first responsive design</li>
                <li>Fast checkout experience</li>
                <li>Strong visual branding</li>
              </ul>

              <a
                href="#contact"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-orange-400 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 sm:mt-8 sm:w-auto"
              >
                View Case Study
              </a>
            </div>

            <div className="order-1 md:order-2">
              <div className="rounded-[1.75rem] bg-white p-4 shadow-[0_18px_50px_rgba(17,24,39,0.12)] sm:p-5">
                <div className="rounded-[1.3rem] border border-[#f3dfcc] bg-[#fffaf5] p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ffb37b]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ffd0a7]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ffe5cf]" />
                    </div>
                    <div className="rounded-full bg-[#fff1e5] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#d96f1f]">
                      Mobile First
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.2rem] bg-[linear-gradient(180deg,#fff4e7_0%,#ffe7cf_100%)] p-4 sm:p-5">
                    <div className="h-3 w-20 rounded-full bg-[#f4c79c]" />
                    <div className="mt-4 h-28 rounded-[1rem] bg-white/75 sm:h-32" />
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-[1rem] bg-white/80" />
                      <div className="h-20 rounded-[1rem] border border-[#f1cfac] bg-[#fff8f1]" />
                    </div>
                    <div className="mt-4 h-11 rounded-full bg-[#ff8d2d]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
