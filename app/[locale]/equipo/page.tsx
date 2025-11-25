import Footer from "../layouts/Footer";
import BodyLayout from "../layouts/BodyLayout";
import ContentAreasPracticas from "./components/ContentTeam";
import Header from "../layouts/Header";

const AreasDePracticaPage = () => {
  return (
    <>
      <Header />
      <BodyLayout
        title="EQUIPO"
        bannerImage="/images/banner_equipo.jpg"
        mainContent={<ContentAreasPracticas />}
      />
      <Footer />
    </>
  );
};

export default AreasDePracticaPage;
