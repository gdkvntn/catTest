import styled from "styled-components";
import CardContainer from "./components/CardContainer";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  h1 {
    font-family: "Exo 2";
    font-size: 36px;
    line-height: 44px;
    font-weight: 200;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 1px 1px #000000;
    margin-bottom: 24px;
  }
`;

const CardsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 90px;
`;

let arr = [
  {
    flavor: "фуа-гра",
    portions: "10",
    gift: "мышь в подарок",
    mass: "0.5",
    сomposition: "Печень утки разварная с артишоками.",
    availability: true,
  },
  {
    flavor: "рыбой",
    portions: "40",
    gift: "2 мыши в подарок",
    mass: "2",
    сomposition: "Головы щучьи с чесноком да свежайшая сёмгушка",
    availability: true,
  },
  {
    flavor: "курой",
    portions: "100",
    gift: `5 мышей в подарок 
    заказчик доволен`,
    mass: "5",
    сomposition: "Филе из цыплят с трюфелями в бульоне.",
    availability: false,
  },
];

function App() {
  return (
    <Container>
      <h1>Ты сегодня покормил кота ?</h1>
      <CardsContainer>
        {arr.map((el, i) => {
          return (
            <li key={i}>
              <CardContainer items={el} />
            </li>
          );
        })}
      </CardsContainer>
    </Container>
  );
}

export default App;
