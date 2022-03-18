import React from "react";
import { useState } from "react";

function Drink() {
  //main component
  let [addLists, setAddLists] = useState([]);

  return (
    <div>
      <h2>MENU</h2>
      <Drink1 setAddLists={setAddLists} />
      <Drink2 />
      <AddDrink addLists={addLists} />
    </div>
  );
}

function Drink1(props) {
  const drink1Menu = ["아메리카노", "바닐라 라떼", "카페 라떼", "카페모카"];
  const drink2Menu = ["초코 라떼", "말차 라떼"];
  const Categories = ["Coffee", "Latte", "Ade", "Tea"];

  return (
    <div className="drink-list">
      <h3>{Categories[0]}</h3>
      <Drink1Menu drink1Menu={drink1Menu} setAddLists={props.setAddLists} />
      <h3>{Categories[1]}</h3>
      <Drink1Menu drink1Menu={drink2Menu} setAddLists={props.setAddLists}/>
    </div>
  );
}

function Drink1Menu(props) {
  return (
    <div>
      {props.drink1Menu.map((menu) => (
        <div>
          {menu}
          <IceAndHot menu={menu} setAddLists={props.setAddLists}/>
        </div>
      ))}
    </div>
  );
}

function IceAndHot(props) {

  const onClick = (e) => {
    props.setAddLists((currentArray) => [...currentArray, props.menu + " " + e.target.innerText]);
  };

  return (
    <div>
      <button onClick={onClick}>ICE</button>
      <button onClick={onClick}>HOT</button>
    </div>
  );
}

function Drink2() {
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
  return (
    <div>
      <h3>{Categories[2]}</h3>
      <Drink2Menu drink3Menu={drink3Menu} />
      <h3>{Categories[3]}</h3>
      <Drink2Menu drink3Menu={drink4Menu} />
    </div>
  );
}

function Drink2Menu(props) {
  return (
    <div>
      {props.drink3Menu.map((menu) => (
        <button>{menu}</button>
      ))}
    </div>
  );
}

function AddDrink(props) {
  //iceandhot컴포넌트의 ice와 hot의 버튼을 클릭했을 때,
  //adddrink에 li에 그 btn의 innertext를 넣어줌
  

  return (
    <div>
      <ul>
        {props.addLists.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Drink;
