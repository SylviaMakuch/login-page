import React from 'react';
import styled from 'styled-components';
import CardComponent from './Sections/Card';
import UserPage from './Sections/UserPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import movingmountains from "./media/movingmountains.svg";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Login from './Sections/Login';
import SignUp from './Sections/SignUp';

const PageContainter = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url(${movingmountains});
    background-size: cover;
`;

function App() {
  return (
    <Provider store={store}>
      <PageContainter>
        <Router>
          <Routes>
            <Route path="/" element={<CardComponent />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<UserPage />} />
          </Routes>
        </Router>
      </PageContainter>
    </Provider>
  );
};

export default App;