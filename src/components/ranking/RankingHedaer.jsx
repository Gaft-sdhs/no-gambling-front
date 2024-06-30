import "./css/rankingHeader.css";
import RankingHeaderItem from "./RankingHeaderItem";
import { LeaderBoardChange } from "./Ranking"
import { useContext } from "react";

const RankingHeader = () => {
  const {leaderboard, changeEvent} = useContext(LeaderBoardChange);
  
  return (
    <div className="ranking-header">
      <RankingHeaderItem name={"총 재산 순위"} on={leaderboard} direction={"left"} onClick={changeEvent}/>
      <RankingHeaderItem name={"순수익 순위"} on={!leaderboard} direction={"right"} onClick={changeEvent}/>
    </div>
  );
};

export default RankingHeader;
