"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { use, useState } from "react";

type SidebarLink = {
  name: string;
  email: string;
  image: string;
  content: string;
  position: string;
  id: string;
};

type MainContentProp = {
  title?: string;
  content?: string;
  email?: string;
  image?: string;
  position?: string;
};

// Define el contenido específico de la página

const MainContent = ({
  title,
  content,
  email,
  image,
  position,
}: MainContentProp) => (
  <div className="prose max-w-none">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
      <div className="">
        <img src={image} width="188" height="196"></img>
      </div>
      <div className="col-span-2">
        <div
          style={{
            background: "#1C2C39",
            padding: "15px 15px 15px 15px",
            borderBottom: "5px solid #E3BE58",
            borderImage: "linear-gradient(90deg,#E3BE58, #FFE8AA, #E3BE58) 1 ",
          }}
        >
          <h1 style={{ color: "#FFE8AA" }}>{title}</h1>
          <span id="member-email" style={{ color: "#bfccd6" }}>
            {email}
          </span>
          <span
            style={{ marginLeft: "5px", marginRight: "5px", color: "#5A809E" }}
          >
            |
          </span>
          <span
            id="member-tag"
            style={{
              fontSize: "14px",
              color: "#1C2C39",
              fontStyle: "italic",
              borderRadius: "25px",
              border: "1px solid #FFE8AA",
              padding: "1px 10px",
              background: "#FFE8AA",
            }}
          >
            {position}
          </span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  </div>
);

export default function ContentAreasPracticas() {
  const t = useTranslations("TeamPage");
  const areasDePracticaLinks: SidebarLink[] = [
    {
      id: "hernan-facundo-castro",
      name: t("temaMemberList.hernan.name"),
      email: t("temaMemberList.hernan.email"),
      image: "/images/castro.jpg",
      position: t("temaMemberList.hernan.position"),
      content: t("temaMemberList.hernan.description"),
    },
    {
      id: "pedro-francisco",
      name: t("temaMemberList.pedro.name"),
      email: t("temaMemberList.pedro.email"),
      image: "/images/avatar.png",
      position: t("temaMemberList.pedro.position"),
      content: t("temaMemberList.pedro.description"),
    },
    {
      id: "ramiro-galarza",
      name: t("temaMemberList.ramiro.name"),
      email: t("temaMemberList.ramiro.email"),
      image: "/images/avatar.png",
      position: t("temaMemberList.ramiro.position"),
      content: t("temaMemberList.ramiro.description"),
    },
    {
      id: "josefina-mattera",
      name: t("temaMemberList.josefina.name"),
      email: t("temaMemberList.josefina.email"),
      image: "/images/avatar.png",
      position: t("temaMemberList.josefina.position"),
      content: t("temaMemberList.josefina.description"),
    },
  ];
  const [content, setContent] = useState<SidebarLink | null>(
    areasDePracticaLinks[0]
  );
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
      <aside className="w-full lg:w-1/3">
        <nav>
          {areasDePracticaLinks &&
            areasDePracticaLinks.map((link) => (
              <Link
                key={link.id}
                href="#"
                className={`block px-3 py-2 text-[#4b4588] font-bold transition duration-150 ease-in-out border-b border-yellow-500 hover:bg-[#FFE8AA] hover:text-black ${
                  link.id === content?.id ? "bg-[#FFE8AA] text-black" : ""
                }`}
                onClick={(e) => handlerClick(link.id, e)}
              >
                {link.name}
              </Link>
            ))}
        </nav>
      </aside>

      {/* Columna del Contenido Central */}
      <section className="w-full lg:w-3/4">
        <MainContent
          title={content?.name}
          content={content?.content}
          email={content?.email}
          image={content?.image}
          position={content?.position}
        />
      </section>
    </div>
  );
}
