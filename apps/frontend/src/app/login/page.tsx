"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/authService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      router.push("/admin");
    } catch (err) {
      setError("Identifiants invalides. Veuillez réessayer.");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F7F7F7]">
      <div className="mb-8 flex flex-col items-center">
        {/* Logo institutionnel stylisé */}
        <div className="w-16 h-16 rounded-full bg-[#A8CFA8] flex items-center justify-center mb-2 shadow-md">
          <span className="text-3xl font-bold text-[#333]">DL</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-[#333] mb-1 tracking-tight">Préfecture de DJOUE-LEFINI</h1>
        <p className="text-[#666] text-sm md:text-base mb-2">Portail citoyen – Connexion sécurisée</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-sm flex flex-col gap-4 border border-[#D1D1D1]">
        <label className="text-[#333] font-medium" htmlFor="email">Adresse e-mail</label>
        <input
          id="email"
          type="email"
          placeholder="prenom.nom@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border border-[#D1D1D1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A8CFA8]"
          required
        />
        <label className="text-[#333] font-medium" htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 border border-[#D1D1D1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A8CFA8]"
          required
        />
        {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}
        <button type="submit" className="w-full py-2 px-4 rounded-2xl bg-[#A8CFA8] text-[#333] font-semibold shadow-sm hover:bg-[#F3E5AB] transition">Se connecter</button>
        <div className="flex flex-col items-center mt-2 text-xs text-[#666]">
          <a href="#" className="hover:underline">Mot de passe oublié ?</a>
          <a href="#" className="hover:underline mt-1">Besoin d’aide ? FAQ</a>
        </div>
      </form>
      <footer className="mt-8 text-xs text-[#999] text-center">
        <p>© Tous droits réservés – Préfecture de DJOUE-LEFINI</p>
      </footer>
    </main>
  );
} 