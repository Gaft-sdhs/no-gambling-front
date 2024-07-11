import "./css/RankingInner.css";
import RankingInnerItem from "./RankingInnerItem";
import { LeaderBoardChange } from "./Ranking";
import { useState, useContext, useEffect } from "react";

const mockData = [
  { rank: 1, name: "김X민", money: 23510000000 },
  { rank: 2, name: "조X빈", money: 13570000000 },
  { rank: 3, name: "황X하", money: 10140760000 },
  { rank: 4, name: "김X빈", money: 10009200000 },
  { rank: 5, name: "김X렐", money: 9603270000 },
];

const mockData1 = [
  { rank: 1, name: "김X민", money: 21400000000 },
  { rank: 2, name: "조X빈", money: 11535000000 },
  { rank: 3, name: "김X빈", money: 9901560000 },
  { rank: 4, name: "황X하", money: 9609200000 },
  { rank: 5, name: "김X렐", money: 9103270000 },
];

const formatMoney = (amount) => {
  return amount.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
};

const RankingLeaderBoard = () => {
  const [user, setUser] = useState({ rank: 404, name: "나", money: 0 });
  const [user1, setUser1] = useState({ rank: 501, name: "나", money: 0 });

  const { leaderboard } = useContext(LeaderBoardChange);

  useEffect(() => {
    if (!localStorage.getItem("userAssets")) {
      localStorage.setItem("userAssets", 1000000);
    }

    const updateMoney = () => {
      const userAssets = parseInt(localStorage.getItem("userAssets")) || 0;
      const totalAssets = parseInt(localStorage.getItem("totalAssets")) || 0;
      const netProfit = totalAssets - userAssets;

      setUser({ rank: 404, name: "나", money: userAssets });
      setUser1({ rank: 501, name: "나", money: netProfit });
    };

    updateMoney(); // 초기 로드 시 업데이트

    const interval = setInterval(updateMoney, 1000); // 1초마다 업데이트

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="ranking-leaderBoard">
      <div className="leaderBoard-my">
        <RankingInnerItem
          type={"MY"}
          {...(leaderboard ? user : user1)}
          money={formatMoney(leaderboard ? user.money : user1.money)}
        />
      </div>
      <div className="leaderBoard-all">
        {(leaderboard ? mockData : mockData1).map((item) => (
          <RankingInnerItem
            key={item.rank}
            type={"ALL"}
            {...item}
            money={formatMoney(item.money)}
          />
        ))}
      </div>
    </div>
  );
};

export default RankingLeaderBoard;