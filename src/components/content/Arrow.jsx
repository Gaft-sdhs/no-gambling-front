import "./css/arrow.css"
const Arrow = ({ id, styleValue })=>{
  return (
    <div id={id} className="arrow" style={styleValue}>
      <span className="top"></span>
      <span className="bottom"></span>
    </div>
  )
}

export default Arrow;