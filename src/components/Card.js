import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  height: 44px;

  div {
    width: 50px;
    background: linear-gradient(
      -45deg,
      #f2f2f2,
      #f2f2f2 28.5px,
      #1698d9 0,
      #1698d9 32px,
      transparent 0
    );
  }
  p {
    width: 100%;
    background-color: #f2f2f2;
    border-top: 4px solid #1698d9;
    border-right: 4px solid #1698d9;
    border-top-right-radius: 12px;
    padding: 20px 0 0 12px;
    margin: 0;
  }
  :hover .MassHover {
    background: #2ea8e6;
  }
`;

const Main = styled.div`
  background-color: #f2f2f2;
  border-right: 4px solid #1698d9;
  border-bottom: 4px solid #1698d9;
  border-left: 4px solid #1698d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-left: 48px;
  padding-top: 5px;
  max-height: 437px;
  height: 100%;
  font-size: 14px;
  line-height: 16px;
  position: relative;
  background-image: url(/img/Photo.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
  }
  :hover .MassHover {
    background: #2ea8e6;
  }
`;

const PodTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 15px;
`;

const Mass = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 80px;
  right: 16px;
  bottom: 16px;
  background: #1698d9;
  border-radius: 50%;
`;

const Kg = styled.p`
  margin-top: 7px;
  font-size: 21px;
  line-height: 22px;
  color: #fff;
`;
const MassNumber = styled.p`
  margin-top: 20px;
  font-size: 42px;
  line-height: 22px;
  color: #fff;
`;

const Footer = styled.div`
  font-size: 13px;
  line-height: 15px;
  margin-top: 14px;
  text-align: center;
  color: #fff;
  a {
    color: #1698d9;
    text-decoration: none;
    border-bottom: 1px dashed #1698d9;
  }
  a:hover {
    color: #2ea8e6;
  }
`;

const CardContainer = styled.div`
  width: 320px;
  height: 480px;
  cursor: pointer;
`;

export default function Card(props) {
  let items = props.items;
  return (
    <>
      <CardContainer onClick={props.selected}>
        <Header>
          <div></div>
          <p>Сказочное заморское яство</p>
        </Header>

        <Main className="card__">
          <h2>Нямушка</h2>
          <PodTitle>c {items.flavor}</PodTitle>
          <p style={{ whiteSpace: "pre-line" }}>
            {items.portions} порций
            <br />
            {items.gift}
          </p>
          <Mass className="MassHover">
            <MassNumber>{items.mass}</MassNumber>
            <Kg>кг</Kg>
          </Mass>
        </Main>
      </CardContainer>
      <Footer>
        <span>
          Чего сидишь? Порадуй котэ,{" "}
          <a href="#" onClick={props.selected}>
            купить
          </a>
          .
        </span>
      </Footer>
    </>
  );
}
