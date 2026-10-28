"use client";

import { FormEvent, useEffect, useState } from "react";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const inputClass =
  "w-full rounded border border-line bg-bg px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/60 transition-colors focus:border-accent";

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setErrorMessage("");
    }
  }, [open]);

  if (!open) return null;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your request right now.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#141a16]/55 backdrop-blur-[2px]"
        aria-label="Close quote form"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[0_24px_60px_rgba(20,26,22,0.18)] sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="label">Request a Quote</p>
            <h2
              id="quote-modal-title"
              className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Let’s get started
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            aria-label="Close"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
        </div>

        {status === "success" ? (
          <div className="space-y-5 py-2 text-center">
            <p className="font-display text-2xl font-bold text-ink">Thank you!</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              Your quote request was sent successfully. Our studio will get back
              to you soon.
            </p>
            <button type="button" onClick={onClose} className="btn btn-accent w-full">
              Close
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Name
              </span>
              <input
                required
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Your full name"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Email ID
              </span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="you@example.com"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Phone Number
              </span>
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="Your phone number"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Tell us about your project or requirements"
                className={`${inputClass} resize-y`}
              />
            </label>

            {status === "error" ? (
              <p className="text-sm text-warm">{errorMessage}</p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-accent w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
