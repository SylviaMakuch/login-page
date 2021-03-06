import React from "react";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import { Link } from "react-router-dom";
const user = require("./../media/user.png");

const Card = styled.div`
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
  height: 400px;
  width: 400px;
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
  margin: 1rem;
  width: 3rem;
  height: 3rem;
`;

const Button = styled.button`
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: #fff;
  height: 25px;
  width: 85px;
  border: 0px solid;
  background-image: linear-gradient(271deg, #ff00d4, #9800f0,#ff00d4,#9800f0);
  background-size: 500% 400%;
  border-radius: 50px;
  transition: 0.6s all;
  margin: 1em;
  &:hover {
    background-position: 75% 50%;
    transform: perspective(100px);
  }

  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
`;

const Button2 = styled.button`
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: #fff;
  height: 25px;
  width: 85px;
  border: 0px solid;
  background-image: linear-gradient(271deg, blue, #00f0a0, blue,#00f0a0);
  background-size: 500% 400%;
  border-radius: 50px;
  transition: 0.6s all;
  margin: 1em;
  &:hover {
    background-position: 75% 50%;
    transform: perspective(100px);
  }

  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
`;

export default function CardComponent() {

  return (
    <Card>
      <Image src={user} />
      <Link to="/login">
        <Button>Login</Button></Link>
      <Link to="/signup">
        <Button2>Register</Button2>
      </Link>
    </Card>
  );
}
