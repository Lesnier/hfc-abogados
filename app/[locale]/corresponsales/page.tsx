import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentAreasPracticas from "./components/ContentCorrespondents";
import Header from "../layouts/Header";
import { getTranslations } from "next-intl/server";

const AreasDePracticaPage = async () => {
  const t = await getTranslations("CorrespondentsPage");
  return (
    <>
      <Header />
      <BodyLayout
        title={t("title")}
        bannerImage="/images/banner_alianzas.jpg"
        mainContent={<ContentAreasPracticas />}
      />
      <Footer />
    </>
  );
};

export default AreasDePracticaPage;
