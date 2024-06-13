import "./css/banners.css"
import Banner from "./Banner";

const Banners = ()=>{
  return (
    <section className="banners">
      <div className="bannerContainer">
        <Banner gifFile={"/banner01.gif"}/>
        <Banner gifFile={"/banner02.gif"}/>
        <Banner gifFile={"/banner03.gif"}/>
        <Banner gifFile={"/banner02.gif"}/>
        <Banner gifFile={"/banner03.gif"}/>
      </div>
      <div className="bannerContainer">
        <Banner gifFile={"/banner02.gif"}/>
        <Banner gifFile={"/banner03.gif"}/>
        <Banner gifFile={"/banner02.gif"}/>
        <Banner gifFile={"/banner01.gif"}/>
        <Banner gifFile={"/banner02.gif"}/>
      </div>
    </section>
  )
}

export default Banners;