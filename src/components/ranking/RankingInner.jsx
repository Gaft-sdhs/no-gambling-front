import "./css/RankingInner.css";
import RankingInnerItem from "./RankingInnerItem";
import { LeaderBoardChange } from "./Ranking";
import { useState, useContext, useEffect } from "react";

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

const RankingLeaderBoard = () => {
  const [user, setUser] = useState({
    rank: 404,
    name: "나",
    money: parseInt(localStorage.getItem("userAssets")) || 1000000,
  });

  const [user1, setUser1] = useState({
    rank: 501,
    name: "나",
    money: 0,
  });

  const { leaderboard } = useContext(LeaderBoardChange);

  useEffect(() => {
    const updateMoney = () => {
      const updatedMoney = parseInt(localStorage.getItem("userAssets")) || user.money;
      setUser((prevUser) => ({ ...prevUser, money: updatedMoney }));
    };

    window.addEventListener("storage", updateMoney);

    return () => {
      window.removeEventListener("storage", updateMoney);
    };
  }, []);

  return (
    <div className="ranking-leaderBoard">
      <div className="leaderBoard-my">
        <RankingInnerItem type={"MY"} {...(leaderboard ? user : user1)} />
      </div>
      <div className="leaderBoard-all">
        {(leaderboard ? mockData : mockData1).map((item) => (
          <RankingInnerItem key={item.rank} type={"ALL"} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RankingLeaderBoard;
