import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentAreasPracticas from "./components/ContentAreasPracticas";
import Header from "../layouts/Header";

const AreasDePracticaPage = () => {
  return (
    <>
      <Header />
      <BodyLayout
        title="ÁREAS DE PRÁCTICA"
        bannerImage="/images/banner_areas.jpg"
        mainContent={<ContentAreasPracticas />}
      />
      <Footer />
    </>
  );
};

export default AreasDePracticaPage;
