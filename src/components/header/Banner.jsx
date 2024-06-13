import "./css/banner.css"

const banner = ({ gifFile })=>{
  return (
    <div className="imgContainer" style={{backgroundImage:`url("${gifFile}")`}}>
      {/* <img src={gifFile} alt="#banner" /> */}
    </div>
  )
}

export default banner;