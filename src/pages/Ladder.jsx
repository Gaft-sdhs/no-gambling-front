import "./css/ladder.css";
import LadderGame from "../components/ladder/LadderGame";
import Ranking from "../components/ranking/Ranking";

const Ladder = () => {
  return (
    <main className="ladder">
      <section className="container">
        <LadderGame />
        <Ranking/>
      </section>
    </main>
  )
}

export default Ladder;