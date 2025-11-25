import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentAreasPracticas from "./components/ContentContact";
import Header from "../layouts/Header";
import { getTranslations, setRequestLocale } from "next-intl/server";

const AreasDePracticaPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");
  return (
    <>
      <Header />
      <BodyLayout
        title={t("title")}
        bannerImage="/images/banner_areas.jpg"
        mainContent={<ContentAreasPracticas />}
      />
      <Footer />
    </>
  );
};

export default AreasDePracticaPage;
