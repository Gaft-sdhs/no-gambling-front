import "./css/ranking.css";
import RankingHeader from "./RankingHedaer";
import RankingInner from "./RankingInner";
import { useState, createContext } from "react";

export const LeaderBoardChange = createContext();

const Ranking = () => {
  const [leaderboard, setLeaderBoard] = useState(true);

  // true => totalMoney
  // false => pureMoney

  const changeEvent = (dicrection)=>{
    if(dicrection === "left")
      setLeaderBoard(true);
    else
      setLeaderBoard(false);
  };

  return (
    <div className="ranking">
      <LeaderBoardChange.Provider value={{leaderboard, changeEvent}}>
        <RankingHeader />
        <RankingInner leaderboard={leaderboard}/>
      </LeaderBoardChange.Provider>
    </div>
  );

};

export default Ranking;
