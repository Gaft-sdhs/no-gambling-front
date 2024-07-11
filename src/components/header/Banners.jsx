import "./css/banners.css";
import Banner from "./Banner";
import banner01 from "../../assets/banner01.gif";
import banner02 from "../../assets/banner02.gif";
import banner03 from "../../assets/banner03.gif";

const Banners = () => {
  return (
    <section className="banners">
      <div className="bannerContainer">
        <Banner gifFile={banner01} />
        <Banner gifFile={banner02} />
        <Banner gifFile={banner03} />
        <Banner gifFile={banner02} />
        <Banner gifFile={banner03} />
      </div>
      <div className="bannerContainer">
        <Banner gifFile={banner02} />
        <Banner gifFile={banner03} />
        <Banner gifFile={banner02} />
        <Banner gifFile={banner01} />
        <Banner gifFile={banner02} />
      </div>
    </section>
  );
};

export default Banners;
