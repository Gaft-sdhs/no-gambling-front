import "./css/index.css";
import Sliders from "../components/main/Sliders";
import Ranking from "../components/ranking/Ranking";

const Index = () => {
  return (
    <main className="index">
      <section className="container">
        <Sliders />
        <Ranking />
      </section>
    </main>
  );
};
export default Index;
