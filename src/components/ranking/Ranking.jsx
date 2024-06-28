import "./css/ranking.css";
import RankingHeader from "./RankingHedaer";
import RankingInner from "./RankingInner";
import { useState } from "react";

const Ranking = () => {
  const [leaderboard, setLeaderBoard] = useState(true);

  // true => totalMoney
  // false => pureMoney

  return (
    <div className="ranking">
      <RankingHeader />
      {leaderboard ? <RankingInner /> : <RankingInner />}
    </div>
  );
};
export default Ranking;
