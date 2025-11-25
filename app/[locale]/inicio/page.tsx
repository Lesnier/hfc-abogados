import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentStart from "./components/ContentStart";
import Header from "../layouts/Header";
import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function AreasDePracticaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");
  return (
    <>
      <Header />
      <BodyLayout
        title={t("title")}
        bannerImage="/images/banner_areas.jpg"
        mainContent={<ContentStart />}
      />
      <Footer />
    </>
  );
}
