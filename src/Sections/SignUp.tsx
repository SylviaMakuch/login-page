import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { usePostRegisterMutation } from "../Api/register";
import { login } from "../redux/slices/user";
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
  margin-bottom: 0.2rem;
  &:hover {
    background-position: 75% 50%;
    transform: perspective(100px);
  }

  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
`;

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

const Button2 = styled.button`
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
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function SignUpForm() {
  const [formData, setFormData] = useState(initialState);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [postRegister, {
    // isLoading: isRegisterLoading,
    // isSuccess: isRegisterSuccess
  }] = usePostRegisterMutation();


  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validatePassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setIsPasswordCorrect(false);
    } else {
      setIsPasswordCorrect(true);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    validatePassword(formData.password, formData.confirmPassword);
    if (isPasswordCorrect) {
      dispatch(login({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        loggedIn: false,
      }));
      postRegister({
        email: formData.email,
        name: formData.name,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      }).then(() => {

        navigate("/user");
      });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <Card>
      <Image src={user} />
      <H1>Register</H1>
      <Form onSubmit={handleSubmit}>
        <Label>First Name</Label>
        <Input name="name" type="text" placeholder="name" onChange={handleChange} />
        <Label>Email/ Username</Label>
        <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <Label>Password</Label>
        <Input type="password" placeholder="Password" name="password" onChange={handleChange} />
        <Label>Comfirm Password</Label>
        <Input type="password" placeholder="Password" name="confirmPassword" onChange={handleChange} />
        <Button2 type="submit">SignUp</Button2>
      </Form>
      <Link to="/login">
      <Button>Login</Button>
      </Link>
    </Card>
  );
}
