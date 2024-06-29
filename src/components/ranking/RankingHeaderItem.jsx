import "./css/rankingHeaderItem.css"

const RankingHeaderItem = ({ name, on, direction, onClick})=>{

    return (
        <div onClick={()=>{onClick(direction)}} className={"rankingHeaderItem " + (on ? "on" : "")}>{name}</div>
    )
}

export default RankingHeaderItem;