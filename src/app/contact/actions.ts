"use server";

export type ContactState = { ok: boolean; message: string };

const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: real people leave this hidden field empty.
  if (String(form.get("website") ?? "") !== "") return { ok: true, message: "Thanks, your message was sent." };

  const name = String(form.get("name") ?? "").trim();
  const from = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (name.length < 2 || name.length > 100) return { ok: false, message: "Enter your name (2–100 characters)." };
  if (!email.test(from) || from.length > 200) return { ok: false, message: "Enter a valid email address." };
  if (message.length < 10 || message.length > 3000) return { ok: false, message: "Write a message of 10–3000 characters." };

  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (!hook) return { ok: false, message: "The contact form isn't connected yet. Please try again later." };

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email: from, message, at: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error("bad status");
    return { ok: true, message: "Thanks, your message was sent." };
  } catch {
    return { ok: false, message: "We couldn't send your message. Please try again." };
  }
}
