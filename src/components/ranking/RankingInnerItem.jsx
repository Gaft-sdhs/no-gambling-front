import "./css/rankingInnerItem.css"

const RankingInnerItem = ({ type, rank, name, money })=>{
    return (
        <div className={"rankingInnerItem " + type}>
            <div className="rank">{rank}</div>
            <div className="name">{name}</div>
            <div className="money">{money}</div>
        </div>
    )
}
export default RankingInnerItem;