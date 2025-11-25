import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Footer: React.FC = async () => {
  const t = await getTranslations("FooterComponet");

  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="w-full mt-10">
      {/* Sección Principal del Footer (Donde está la dirección y contacto) */}
      <div className="bg-gray-50 py-8 border-t border-gray-300">
        <div className="container mx-auto px-4 text-center">
          {/* Información de Contacto y Dirección */}
          <div className="text-gray-700 mb-4 text-sm">
            <p className="font-semibold">{t("line1")}</p>
            <p className="font-semibold mt-1">Buenos Aires - Argentina</p>
          </div>

          {/* Otros Enlaces o Información (si la hubiera) */}
          {/* <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <Link href="/politica-de-privacidad" className="hover:text-yellow-500">Política de Privacidad</Link>
            <Link href="/aviso-legal" className="hover:text-yellow-500">Aviso Legal</Link>
          </div> */}
        </div>
      </div>

      {/* Barra de Copyright (Barra amarilla en la imagen) */}
      <div
        style={{
          background: "linear-gradient(90deg, #E3BE58, #BD9A3B, #E3BE58)",
        }}
      >
        <div className="container mx-auto px-4 py-1 flex flex-col sm:flex-row justify-center items-center text-xs text-white font-semibold">
          <p>COPYRIGHT 2005 - {currentYear} - WWW.HFC-AYCABOGADOS.COM.AR</p>
          {/* Puedes añadir más información o enlaces aquí si es necesario */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
