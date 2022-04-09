import React from "react";
import Drink2Menu from "./Drink2Menu";
import styled from "styled-components";

function Drink2({ setAddLists }) {
  const drink3Menu = [
    "복숭아 아이스티",
    "청포도 에이드",
    "레몬 에이드",
    "망고에이드",
    "샤인머스캣 에이드",
  ];
  const drink4Menu = [
    "팬넬",
    "그린엔젤",
    "클래식그린",
    "자스민",
    "마운틴허브",
    "루이보스 바닐라",
    "로즈힙",
    "얼그레이",
    "비베나",
    "다즐링",
    "캐모마일",
    "잉글리쉬 브렉퍼스트",
    "실버라임 블라썸",
    "레드베리",
    "페퍼민트",
    "원더드림",
    "스윗진저",
    "레몬스카이",
    "아쌈",
  ];
  const Categories = ["Coffee", "Latte", "Ade", "Tea"];

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Div>
      <h3>{Categories[2]}</h3>
      <Drink2Menu drink3Menu={drink3Menu} setAddLists={setAddLists} />
      <h3>{Categories[3]}</h3>
      <Drink2Menu drink3Menu={drink4Menu} setAddLists={setAddLists} />
    </Div>
  );
}

export default Drink2;
