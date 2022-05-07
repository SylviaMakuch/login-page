import React from 'react';
import styled from 'styled-components';
import CardComponent from './componets/Card';
import UserPage from './componets/UserPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import movingmountains from "./media/movingmountains.svg";
import { store } from './app/store';
import { Provider } from 'react-redux';

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
            <Route path='/user' element={<UserPage />} />
          </Routes>
        </Router>
      </PageContainter>
    </Provider>
  );
};

export default App;