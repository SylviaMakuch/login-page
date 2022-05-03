import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: #fff;
`;

const Input = styled.input`
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color:#ffffffad;
  text-align: center;
`;

const Button = styled.button`
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: #fff;
  height: 45px;
  width: 85px;
  border: 0px solid;
  background-image: linear-gradient(120deg, blue, #00f0a0, blue);
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

export default function FormInput() {
  return (
    <Form>
      <Label>Username</Label>
      <Input type="text" placeholder="Username" />
      <Label>Password</Label>
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </Form>
  );
}