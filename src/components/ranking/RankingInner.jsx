import "./css/rankingInner.css";
import RankingInnerItem from "./RankingInnerItem";
import { useState } from "react";

const mockData = [
  {
    rank: 1,
    name: "김X민",
    money: 23510000000,
  },
  {
    rank: 2,
    name: "조X빈",
    money: 13570000000,
  },
  {
    rank: 3,
    name: "황X하",
    money: 10140760000,
  },
  {
    rank: 4,
    name: "김X빈",
    money: 10009200000,
  },
  {
    rank: 5,
    name: "김X렐",
    money: 9603270000,
  },
];

let me = {
  rank:404,
  name:"나",
  money: 1000000,
}

const RankingLeaderBoard = () => {
  const [ user, setUser ] = useState(me);

  return (
    <div className="ranking-leaderBoard">
      <div className="leaderBoard-my">
        <RankingInnerItem type={"MY"} {...user}/>
      </div>
      <div className="leaderBoard-all">
        {mockData.map((item) => {
          return <RankingInnerItem key={item.rank} type={"ALL"} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RankingLeaderBoard;
