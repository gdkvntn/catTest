import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import CardActive from "./CardActive";
import CardUnavailable from "./CardUnavailable";

const Container = styled.div`
  max-width: 320px;
`;
export default function CardContainer(props) {
  const [select, setSelect] = useState(true);

  const selected = () => {
    setSelect(!select);
  };

  return (
    <Container>
      {props.items.availability ? (
        select ? (
          <Card items={props.items} selected={selected} select={select} />
        ) : (
          <CardActive items={props.items} select={select} selected={selected} />
        )
      ) : (
        <CardUnavailable items={props.items} />
      )}
    </Container>
  );
}
