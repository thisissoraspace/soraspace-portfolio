"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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

const projects = [
  {
    title: "Ziro Juice",
    subtitle: "Local beverage brand website",
    description:
      "A premium landing page concept for a local juice brand with product storytelling, trust-building sections, and a clean mobile-first shopping flow.",
    tags: ["Branding", "Landing Page", "Mobile-first"],
    metrics: ["Modern hero section", "Product spotlight", "Simple CTA flow"],
  },
  {
    title: "Thrift Vault",
    subtitle: "Fashion thrift store UI",
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
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#001D34]/75 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <a href="#top" className="text-sm sm:text-base font-bold tracking-[0.35em]">
              SORA
            </a>

            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/80">
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
        className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[-40px] h-44 w-44 sm:right-12 sm:h-56 sm:w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute bottom-16 left-[-30px] h-36 w-36 sm:left-10 sm:h-48 sm:w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_30%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-6xl"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-white/55">
                SoraSpace Digital Studio
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-[0.18em] sm:text-6xl md:text-7xl lg:text-8xl">
                SORA
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                Websites that make small brands look premium. Clean design, strong presence, and a modern feel across mobile, tablet, and desktop.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#001D34] transition duration-300 hover:scale-[1.02]"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium transition duration-300 hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-4">
                <div className="rounded-[1.35rem] border border-white/10 bg-[#0a2a46] p-4 sm:rounded-[1.6rem] sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-white/45">Featured Style</p>
                      <h2 className="mt-1 text-lg font-bold sm:text-xl">Minimal. Dark. Premium.</h2>
                    </div>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/20 bg-white/10" />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="h-24 rounded-2xl bg-white/10 sm:h-28" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-28 rounded-2xl bg-white/10 sm:h-36" />
                      <div className="h-28 rounded-2xl border border-white/10 bg-white/5 sm:h-36" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 md:gap-10"
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

      <section id="services" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50">Services</p>
          <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6"
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

      <section id="projects" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50">Projects</p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Concept work with a client-ready feel.
          </h2>

          <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[#0a2a46] sm:h-64">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] opacity-90 transition duration-500 group-hover:scale-110" />

                  <div className="absolute inset-4 rounded-xl border border-white/10 bg-[#061a2c] p-3 transition duration-500 group-hover:translate-y-[-4px] group-hover:scale-[1.02]">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <div className="mb-3 h-6 w-20 rounded bg-white/10" />
                    <div className="mb-3 h-20 rounded bg-white/10 sm:h-24" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 rounded bg-white/10" />
                      <div className="h-16 rounded border border-white/10 bg-white/5" />
                    </div>
                    <div className="mt-3 h-10 rounded border border-white/10 bg-white/5" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#03111d] via-transparent to-transparent opacity-70" />

                  <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-[#0b314f]/80 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-md transition duration-300 group-hover:bg-white/10 group-hover:text-white">
                    Case Study
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#08243c]/85 p-4 backdrop-blur-md transition duration-300 group-hover:translate-y-[-2px] group-hover:border-white/20">
                    <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
                    <p className="mt-1 text-sm text-white/65">{project.subtitle}</p>
                  </div>
                </div>

                <div className="relative p-5 sm:p-6">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <p className="text-sm leading-7 text-white/72 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3">
                    {project.metrics.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-[#082841]/70 px-4 py-3 text-sm text-white/78 transition duration-300 group-hover:border-white/20 group-hover:bg-[#0b314f]/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">Status</p>
                      <p className="mt-1 text-sm text-white/75">Concept project for portfolio presentation</p>
                    </div>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition duration-300 hover:bg-white/10 group-hover:border-white/35 group-hover:bg-white/10"
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
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              Let’s build something that looks expensive.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Available for portfolio websites, business landing pages, and premium website concepts for modern brands.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:soraspace03@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#001D34]"
              >
                soraspace03@gmail.com
              </a>
              <a
                href="#"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium transition hover:bg-white/10"
              >
                Instagram / WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
