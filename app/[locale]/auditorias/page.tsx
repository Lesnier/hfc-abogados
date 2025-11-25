import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentAreasPracticas from "./components/ContentAudits";
import Header from "../layouts/Header";
import { getTranslations } from "next-intl/server";

const AreasDePracticaPage = async () => {
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
