// Ladder 페이지 컴포넌트

import React from "react";
import "./css/ladder.css";
import LadderGame from "../components/ladder/LadderGame";
import Ranking from "../components/ranking/Ranking";

// Ladder 컴포넌트: 사다리 게임과 랭킹 컴포넌트를 렌더링
const Ladder = () => {
    return (
        <main className="ladder">
            <section className="container">
                <LadderGame />
                <Ranking />
            </section>
        </main>
    );
}

export default Ladder;