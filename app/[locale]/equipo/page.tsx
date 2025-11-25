import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentAreasPracticas from "./components/ContentTeam";
import Header from "../layouts/Header";
import { setRequestLocale, getTranslations } from "next-intl/server";

const AreasDePracticaPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("TeamPage");
  return (
    <>
      <Header />
      <BodyLayout
        title={t("title")}
        bannerImage="/images/banner_equipo.jpg"
        mainContent={<ContentAreasPracticas />}
      />
      <Footer />
    </>
  );
};

export default AreasDePracticaPage;
