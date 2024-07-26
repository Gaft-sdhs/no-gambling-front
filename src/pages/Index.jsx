import "./css/index.css";
import Sliders from "../components/main/Sliders";
import Ranking from "../components/ranking/Ranking";
import Header from "../components/header/Header";

const Index = () => {
  return (
    <>
      <Header />
      <main className="index">
        <section className="container">
          <Sliders />
          <Ranking />
        </section>
      </main>
    </>
  );
};

export default Index;
