"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { getToken, logout } from "@/app/authService";

type JwtPayload = { role?: string; exp?: number };

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/login");
      return;
    }
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.role !== "admin" && decoded.role !== "editor") {
        logout();
        router.replace("/login");
        return;
      }
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        logout();
        router.replace("/login");
        return;
      }
      setAuthorized(true);
    } catch {
      logout();
      router.replace("/login");
    }
  }, [router]);

  if (!authorized) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-96 text-center">
        <h1 className="text-2xl font-semibold mb-6">Espace Admin</h1>
        <p className="mb-4">Bienvenue, vous êtes authentifié avec un rôle admin ou editor.</p>
        <button onClick={() => { logout(); router.push("/login"); }} className="py-2 px-4 rounded-2xl bg-[#E8A3A3] text-[#333] font-semibold shadow-sm hover:bg-[#A8CFA8] transition">Se déconnecter</button>
      </div>
    </div>
  );
} 