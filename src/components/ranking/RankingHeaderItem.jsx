// 랭킹 헤더 아이템 컴포넌트

import "./css/rankingHeaderItem.css";

// RankingHeaderItem 컴포넌트: 클릭 가능한 랭킹 헤더 아이템을 렌더링
const RankingHeaderItem = ({ name, on, direction, onClick }) => {
    return (
        <div onClick={() => onClick(direction)} className={"rankingHeaderItem " + (on ? "on" : "")}>
            {name}
        </div>
    );
};

export default RankingHeaderItem;