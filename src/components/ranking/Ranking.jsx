import "./css/ranking.css"
import RankingHeader from "./RankingHedaer";
import RankingLeaderBoard from "./RankingLeaderBoard";

const Ranking = ()=>{
  return (
    <div className="ranking">
      <RankingHeader />
      <RankingLeaderBoard />
    </div>
  )
}
export default Ranking;