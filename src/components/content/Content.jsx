import "./css/content.css"
import Slider from "./Sliders";
import Ranking from "./Ranking";

const Content = ()=>{
  return (
    <main className="index">
      <section className="container">
        <Slider />
        <Ranking />
      </section>
    </main>
  )
}
export default Content;