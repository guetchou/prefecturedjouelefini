import Image from 'next/image';
import Link from 'next/link';

export default function UnderConstruction() {
  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen p-6 text-gray-800"
      style={{
        backgroundImage: "url('images/riviere-nambouli.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Armoirie du Congo en haut */}
        <div className="mb-8">
          <Image
            src="/images/armoirie_congo.png"
            alt="Armoirie de la République du Congo"
            width={180}
            height={180}
          />
        </div>

        {/* Titre et message */}
        <h1 className="text-4xl font-semibold mb-4 text-green-200 drop-shadow-lg">Préfecture de DJOUE-LEFINI</h1>
        <h2 className="text-2xl font-medium mb-6 text-yellow-200 drop-shadow-lg">Site en construction</h2>
        <p className="text-center max-w-xl mb-6 text-white drop-shadow">
          Le nouveau site de la Préfecture de DJOUE-LEFINI est en cours de développement. Nous préparons une plateforme moderne,
          dynamique et institutionnelle pour mieux vous servir.
        </p>

        {/* Bouton contact */}
        <Link href="/contact" passHref legacyBehavior>
          <a className="bg-red-200 hover:bg-red-300 text-red-800 font-medium py-2 px-6 rounded-2xl shadow-sm transition">
            Nous contacter
          </a>
        </Link>
      </div>
    </main>
  );
}
