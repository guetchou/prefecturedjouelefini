"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    channel: "email",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Ici, tu pourrais envoyer le formulaire à une API ou un service email
    setSent(true);
    setError("");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F7F7F7] p-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-lg border border-[#D1D1D1]">
        <h1 className="text-2xl font-semibold mb-2 text-[#333] text-center">Contacter la Préfecture</h1>
        <p className="text-center text-[#666] mb-6">Pour toute question, suggestion ou démarche, utilisez ce formulaire. Nous vous répondrons par le canal de votre choix.</p>
        {sent ? (
          <div className="text-green-700 text-center font-medium py-8">
            Merci, votre message a bien été envoyé.<br />Nous vous répondrons dans les meilleurs délais.
            <div className="mt-4">
              <Link href="/" className="text-blue-700 underline">Retour à l'accueil</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="name" className="font-medium text-[#333]">Nom complet</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="p-2 border border-[#D1D1D1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A8CFA8]"
              value={form.name}
              onChange={handleChange}
            />
            <label htmlFor="email" className="font-medium text-[#333]">Adresse e-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="p-2 border border-[#D1D1D1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A8CFA8]"
              value={form.email}
              onChange={handleChange}
            />
            <label htmlFor="phone" className="font-medium text-[#333]">Téléphone (optionnel)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="p-2 border border-[#D1D1D1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A8CFA8]"
              value={form.phone}
              onChange={handleChange}
            />
            <label htmlFor="channel" className="font-medium text-[#333]">Préférence de contact</label>
            <select
              id="channel"
              name="channel"
              className="p-2 border border-[#D1D1D1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A8CFA8]"
              value={form.channel}
              onChange={handleChange}
            >
              <option value="email">E-mail</option>
              <option value="téléphone">Téléphone</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="sms">SMS</option>
            </select>
            <label htmlFor="message" className="font-medium text-[#333]">Votre message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="p-2 border border-[#D1D1D1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A8CFA8]"
              value={form.message}
              onChange={handleChange}
            />
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button type="submit" className="w-full py-2 px-4 rounded-2xl bg-[#A8CFA8] text-[#333] font-semibold shadow-sm hover:bg-[#F3E5AB] transition">Envoyer</button>
          </form>
        )}
        <div className="mt-8 text-xs text-[#999] text-center">
          <p>© Tous droits réservés – Préfecture de DJOUE-LEFINI</p>
        </div>
      </div>
    </main>
  );
} 