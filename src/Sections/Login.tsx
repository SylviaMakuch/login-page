import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  border-radius: 20px;
  background-color:#ffffffad;
  text-align: center;
`;

const Button = styled.button`
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: #fff;
  height: 20px;
  width: 85px;
  border: 0px solid;
  background-image: linear-gradient(271deg, blue, #00f0a0, blue,#00f0a0);
  background-size: 500% 400%;
  border-radius: 50px;
  transition: 0.6s all;
  padding: 10px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

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
  margin: 0px;
`;

const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <H1>Login</H1>
      <Form onSubmit={handleSubmit}>
        <Label>Email/ Username</Label>
        <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <Label>Password</Label>
        <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
