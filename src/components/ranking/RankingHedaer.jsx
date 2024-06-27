import "./css/rankingHeader.css";
import RankingHeaderItem from "./RankingHeaderItem";

const RankingHeader = () => {
  return (
    <div className="ranking-header">
      <RankingHeaderItem name="총 재산 순위"/>
      <RankingHeaderItem name="순수익 순위"/>
    </div>
  );
};

export default RankingHeader;
