import "./css/index.css"
import Ranking from "../components/ranking/Ranking";
import Sliders from "../components/main/Sliders";


const Index = ()=>{
  return (
    <main className="index">
      <section className="container">
        <Sliders />
        <Ranking />
      </section>
    </main>
  )
}
export default Index;