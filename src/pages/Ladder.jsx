import "./css/ladder.css";
import LadderGame from "../components/ladder/LadderGame";

const Ladder = () => {
  return (
    <main className="ladder">
      <section className="container">
        <LadderGame />
      </section>
    </main>
  )
}

export default Ladder;