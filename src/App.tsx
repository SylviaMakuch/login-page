import React from 'react';
import styled from 'styled-components';
import CardComponent from './componets/Card';
import movingmountains from "./media/movingmountains.svg";

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
    <PageContainter>
      <CardComponent />
  
    </PageContainter>
  );
};

export default App;