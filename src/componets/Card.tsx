import React from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
const user = require("./../media/user.png");


const Card = styled.div`
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
  height: 500px;
  width: 500px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color:rgb(180 203 235 / 0%);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.125);
  transition: 0.2s ease-in-out;
  box-shadow: 20px 20px 60px #1b353b, -20px -20px 60px #13262b91;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 4rem;
  width: 3rem;
  height: 3rem;
`;

const H1 = styled.h1`
  font-family: "Eczar", serif;
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
`;

export default function CardComponent() {
    return (
        <Card>
            <Image src={user} />
            <H1> Login </H1>
            <FormInput />
        </Card>
    );
}
