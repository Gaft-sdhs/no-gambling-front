import "./css/rankingInnerItem.css"

const RankingInnerItem = ({ type, rank, name, money })=>{
    return (
        <div className={"rankingInnerItem-" + type}>
            {rank} {name} {money}
        </div>
    )
}
export default RankingInnerItem;