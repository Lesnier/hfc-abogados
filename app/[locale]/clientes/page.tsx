import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentAreasPracticas from "./components/ContentClients";
import Header from "../layouts/Header";
import { getTranslations, setRequestLocale } from "next-intl/server";

const AreasDePracticaPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ClientsPage");
  return (
    <>
      <Header />
      <BodyLayout
        title={t("title")}
        bannerImage="/images/banner_clientes.jpg"
        mainContent={<ContentAreasPracticas />}
      />
      <Footer />
    </>
  );
};

export default AreasDePracticaPage;
