import "./css/rankingInnerItem.css";
import RankingInnerItem from "./RankingInnerItem";
import { LeaderBoardChange } from "./Ranking"
import { useState, useContext } from "react";

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

const mockData1 = [
  {
    rank: 1,
    name: "김X민",
    money: 21400000000,
  },
  {
    rank: 2,
    name: "조X빈",
    money: 11535000000,
  },
  {
    rank: 3,
    name: "김X빈",
    money: 9901560000,
  },
  {
    rank: 4,
    name: "황X하",
    money: 9609200000,
  },
  {
    rank: 5,
    name: "김X렐",
    money: 9103270000,
  },
];

let me = {
  rank: 404,
  name: "나",
  money: 1000000,
};

let me1 = {
  rank: 501,
  name: "나",
  money: 0,
};

const RankingLeaderBoard = () => {
  const [user, setUser] = useState(me);
  const [user1, setUser1] = useState(me1);

  const {leaderboard} = useContext(LeaderBoardChange);

  console.log(leaderboard);

  return (
    <div className="ranking-leaderBoard">
      <div className="leaderBoard-my">
        <RankingInnerItem type={"MY"} {...(leaderboard?user:user1)} />
      </div>
      <div className="leaderBoard-all">
        {(leaderboard?mockData:mockData1).map((item) => {
          return <RankingInnerItem key={item.rank} type={"ALL"} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RankingLeaderBoard;
