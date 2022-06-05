import React from "react";
import AdeAndTeaMenu from "./AdeAndTeaMenu";
import styled from "styled-components";

function AdeAndTea({ categories }) {
  const adeMenu = [
    "복숭아 아이스티",
    "청포도 에이드",
    "레몬 에이드",
    "망고에이드",
    "샤인머스캣 에이드",
  ];
  const teaMenu = [
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

  return (
    <Div>
      <h3>{categories[2]}</h3>
      <AdeAndTeaMenu
        drink2Menu={adeMenu}
        isAde={true}
      />
      <h3>{categories[3]}</h3>
      <AdeAndTeaMenu
        drink2Menu={teaMenu}
        isAde={false}
      />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AdeAndTea;
