"use client";
import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/contact/actions";

const initial: ContactState = { ok: false, message: "" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  return (
    <form action={action} className="form">
      <label>Name<input name="name" required minLength={2} maxLength={100} autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
      <label>Message<textarea name="message" required minLength={10} maxLength={3000} rows={6} /></label>
      <div className="hp" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <button className="btn btn-primary" disabled={pending}>{pending ? "Sending…" : "Send message"}</button>
      <p role="status" className={state.ok ? "ok" : "err"}>{state.message}</p>
    </form>
  );
}
