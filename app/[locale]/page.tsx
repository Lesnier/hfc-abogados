import { setRequestLocale } from "next-intl/server";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HeaderHome from "./layouts/HeaderHome";

export default async function Homeasync({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeaderHome />
      <Footer />
    </>
  );
}
