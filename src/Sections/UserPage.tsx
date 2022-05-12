
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// const user = require("./../media/user.png");
import { useSelector } from "react-redux";
import { logout, selectUser } from "../redux/slices/user";
import { useDispatch } from "react-redux";
import bucket from "./../media/bucket.svg";

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

  &:hover {
    background-position: 75% 50%;
    transform: perspective(100px);
  }

  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
`;

const H1 = styled.h1`
  font-family: "Eczar", serif;
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
`;

export default function UserPage() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (e: any) => {
    e.preventDefault();
    setIsLoggedOut(true);
   dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Card>
      <H1>Welcome!</H1>
      <H1>{user.name}</H1>
      <img src={bucket} alt="bucket" />
      <Button type="submit" onClick={handleLogout}> Logout </Button>
    </Card>
  );
}
