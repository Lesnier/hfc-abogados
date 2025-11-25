import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentAreasPracticas from "./components/ContentAudits";
import Header from "../layouts/Header";
import { getTranslations, setRequestLocale } from "next-intl/server";

const AreasDePracticaPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("AuditPage");
  return (
    <>
      <Header />
      <BodyLayout
        title={t("title")}
        bannerImage="/images/banner_auditoria.jpg"
        mainContent={<ContentAreasPracticas />}
      />
      <Footer />
    </>
  );
};

export default AreasDePracticaPage;
