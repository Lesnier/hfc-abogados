"use client";

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

//Define Clients
const clients = [
  "ALHSTROM LOUVEIRA LTD.",
  "BRASSERIE PETANQUE - PROVENCIAL S.A.",
  "CANON ARGENTINA S.A.",
  "CANON U.S.A., Inc.",
  "CORTE A CONTENIDOS S.R.L.",
  "CNP-TECNOLOGIA E SERVICOS DE INFORMATICA S.A",
  "DIAGNOSTICO Y SERVICIOS - LOS TEQUES S.A.",
  "DIREX SOLUCIONES INTEGRALES .",
  "EG CONSULTORÍA FORESTAL S.R.L.",
  "ESTABLECIMIENTO LA AZUCENA S.A.",
  "FARMACITY S.A.",
  "FINNING ARGENTINA S.A.",
  "FINNING SOLUCIONES MINERAS S.A.",
  "FINNING URUGUAY S.A.",
  "FORTALEIN S.L.",
  "FUN.D.A.CO.",
  "HALLIBURTON ARGENTINA S.A.",
  "INTERNATIONAL AUTOMOTIVE COMPONENTS GROUP INC.",
  "LA NUEVA BOCA PROPIEDADES S.A.",
  "LEADERSHIP FREIGHT DE ARGENTINA S.A.",
  "MADERSOL S.A. (POLACRIN)",
  "MANPOWER (COTECSUD SASE. BENEFITS S.A. SALESPOWER S.A.)",
  "MAQ´S S.A. - MAQUINAS PARA LA INDUSTRIA PLASTICA",
  "MUTUAL DE EMPLEADOS MUNICIPALES DE SAN ISIDRO",
  "NEWCOM BRASIL LTda.",
  "O.S.P.A.D.E.P.",
  "PERMALI DO BRASIL INDUSTRIA E COMERCIO LTDA.",
  "PLASCAR PARTICIPAÇÕES INDUSTRIAIS S.A.",
  "PRIMEROS PINOS S.A.",
  "QUIASMA S.R.L. - IT CONSULTING",
  "REGIONAL CARGO S.A.",
  "RIO FOYEL S.A.",
  "RMO CONSULTORES - Construcciones Civiles",
  "ROSARIO PROJECT S.A.",
  "ROVELLA CARRANZA S.A.",
  "SPECIAL GROUP SA (PROMESSE)",
  "SULFOQUIMICA S.A. ARGENTINA",
  "TALGO S.L.",
  "TECNASIG S.R.L.",
  "TECNOLOGÍA FORESTAL S.A.",
  "TECNOPEL S.A.",
  "TGLT S.A.",
  "TELARES DEL SUR S.R.L.",
  "UPSTREAM SUPPLY CHAIN SOLUTIONS L.L.C.",
];

// Define el contenido específico de la página
const areasDePracticaLinks: SidebarLink[] = [];

const MainContent = ({ title, content }: MainContentProp) => (
  <div className="prose max-w-none">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {clients.map((client, index) => (
        <p className="text-sm border-b border-gray-200" key={index}>
          {client}
        </p>
      ))}
    </div>
  </div>
);

export default function ContentAreasPracticas() {
  const [content, setContent] = useState<SidebarLink | null>(null);
  type ClickHandler = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;

  const handlerClick: ClickHandler = (id, event) => {
    event.preventDefault();
    const selectedLink = areasDePracticaLinks.find((link) => link.id === id);
    setContent(selectedLink || null);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Columna de la Barra Lateral (Sidebar) */}

      {/* Columna del Contenido Central */}
      <section className="w-full ">
        <MainContent title={content?.name} content={content?.content} />
      </section>
    </div>
  );
}
