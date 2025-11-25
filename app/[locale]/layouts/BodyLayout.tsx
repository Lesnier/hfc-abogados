// Este es un componente macro que contendrá la estructura principal de la página.

import type { ReactNode } from "react";
import Link from "next/link";

type BodyLayoutProps = {
  title?: string;
  bannerImage?: string;
  mainContent?: ReactNode;
};

const BodyLayout = ({ title, bannerImage, mainContent }: BodyLayoutProps) => {
  return (
    <main className="w-full">
      {/* Sección de Banner y Título */}
      <section
        className="relative h-64 bg-cover bg-left"
        style={{
          backgroundImage: `url(${
            bannerImage || "/images/default-banner.jpg"
          })`, // Usa una imagen por defecto o la proporcionada
        }}
      >
        {/* Capa de Oscurecimiento/Superposición */}
        {/* <div className="absolute inset-0 bg-gray-900 opacity-50"></div> */}

        {/* Etiqueta flotante inferior (como 'Institucional' o 'ÁREAS DE PRÁCTICA') */}
        <div
          className="absolute bottom-15 left-0 bg-[#1c2c39]/80 text-white px-8 py-3 md:w-120 text-end md:text-3xl font-regular tracking-wider"
          style={{
            borderBottom: "5px solid #E3BE58",
            borderImage: "linear-gradient(90deg, #E3BE58, #FFE8AA, #E3BE58) 1",
          }}
        >
          {title || "Etiqueta Flotante"}
        </div>
      </section>

      {/* Contenido Principal: Sidebar + Contenido Central */}
      <div className="container mx-auto px-2 py-8">{mainContent}</div>
    </main>
  );
};

export default BodyLayout;
