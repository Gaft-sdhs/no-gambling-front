// 랭킹 항목을 렌더링하는 컴포넌트

import "./css/rankingInnerItem.css";

// RankingInnerItem 컴포넌트: 랭킹 리스트의 개별 항목을 표시
const RankingInnerItem = ({ type, rank, name, money }) => {
    return (
        <div className={"rankingInnerItem " + type}>
            <div className="rank">{rank}</div>
            <div className="name">{name}</div>
            <div className="money">{money}</div>
        </div>
    );
};

export default RankingInnerItem;