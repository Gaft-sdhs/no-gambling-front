import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ladder.css";
import LadderGame from "../components/ladder/LadderGame";
import Ranking from "../components/ranking/Ranking";
import Modal from "../components/ladder/Modal";

const Ladder = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
      navigate(-1); // 이전 화면으로 리디렉션
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigate]);

  return (
    <main className="ladder">
      {showModal && <Modal message="사다리 게임은 점검 중입니다. 3초후 자동으로 뒤로갑니다." />}
      <section className="container">
        <LadderGame />
        <Ranking />
      </section>
    </main>
  );
}

export default Ladder;
