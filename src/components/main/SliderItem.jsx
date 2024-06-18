import "./css/sliderItem.css"

const SliderItem = ({ sliderFile })=>{
  return (
    <div className="slider">
      <img src={sliderFile} alt="#slider" />
    </div>
  )
}

export default SliderItem;