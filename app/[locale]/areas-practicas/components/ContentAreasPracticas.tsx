"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

type SidebarLink = {
  name: string;
  href: string;
  content: string;
  id: string;
};

type MainContentProp = {
  title?: string;
  content?: string;
};

const MainContent = ({ title, content }: MainContentProp) => (
  <div className="prose max-w-none">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p>{content}</p>
  </div>
);

export default function ContentAreasPracticas() {
  const t = useTranslations("PracticeAreasPage");

  const areasDePracticaLinksData: SidebarLink[] = [
    {
      id: "derecho-laboral",
      name: t("areasList.derechoLaboral.title"),
      href: "/derecho-laboral",
      content: t("areasList.derechoLaboral.description"),
    },
    {
      id: "concursos-y-quiebras",
      name: t("areasList.concursosYQuiebras.title"),
      href: "/concursos-y-quiebras",
      content: t("areasList.concursosYQuiebras.description"),
    },
    {
      id: "reestructuraciones",
      name: t("areasList.reestructuracionesDeDeudas.title"),
      href: "/reestructuraciones",
      content: t("areasList.reestructuracionesDeDeudas.description"),
    },
    {
      id: "marcas-patentes",
      name: t("areasList.marcasPatentes.title"),
      href: "/marcas-patentes",
      content: t("areasList.marcasPatentes.description"),
    },
    {
      id: "derecho-administrativo",
      name: t("areasList.derechoAdministrativo.title"),
      href: "/derecho-administrativo",
      content: t("areasList.derechoAdministrativo.description"),
    },
    {
      id: "agronegocios",
      name: t("areasList.agronegocios.title"),
      href: "/agronegocios",
      content: t("areasList.agronegocios.description"),
    },
    {
      id: "comercio-internacional",
      name: t("areasList.comercioInternacional.title"),
      href: "/comercio-internacional",
      content: t("areasList.comercioInternacional.description"),
    },
    {
      id: "litigios",
      name: t("areasList.litigios.title"),
      href: "/litigios",
      content: t("areasList.litigios.description"),
    },
    {
      id: "family-offices",
      name: t("areasList.familyOffices.title"),
      href: "/family-offices",
      content: t("areasList.familyOffices.description"),
    },
    {
      id: "real-state",
      name: t("areasList.realState.title"),
      href: "/real-state",
      content: t("areasList.realState.description"),
    },
    {
      id: "auditorias-compliance-rse",
      name: t("areasList.auditoriasDeComplianceYRse.title"),
      href: "/auditorias-compliance-rse",
      content: t("areasList.auditoriasDeComplianceYRse.description"),
    },
    {
      id: "derecho-entretenimiento-deporte",
      name: t("areasList.derechoDelEntretenimientoYDelDeporte.title"),
      href: "/derecho-entretenimiento-deporte",
      content: t("areasList.derechoDelEntretenimientoYDelDeporte.description"),
    },
  ];

  const [content, setContent] = useState<SidebarLink | null>(
    areasDePracticaLinksData[0]
  );
  type ClickHandler = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;

  const handlerClick: ClickHandler = (id, event) => {
    event.preventDefault();
    const selectedLink = areasDePracticaLinksData.find(
      (link) => link.id === id
    );
    setContent(selectedLink || null);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Columna de la Barra Lateral (Sidebar) */}
      <aside className="w-full lg:w-1/3">
        <nav>
          {areasDePracticaLinksData &&
            areasDePracticaLinksData.map((link) => (
              <Link
                key={link.id}
                href="#"
                className={`block px-3 py-2 text-[#4b4588] font-bold transition duration-150 ease-in-out border-b border-yellow-500 hover:bg-[#FFE8AA] hover:text-black ${
                  link.id === content?.id ? "bg-[#FFE8AA] text-black" : ""
                }`}
                onClick={(e) => handlerClick(link.id, e)}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
        </nav>
      </aside>

      {/* Columna del Contenido Central */}
      <section className="w-full lg:w-3/4">
        <MainContent title={content?.name} content={content?.content} />
      </section>
    </div>
  );
}
