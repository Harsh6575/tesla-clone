import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {
              rightBtnText &&
              <RightButton>
                {rightBtnText}
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizontal
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1{
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
background-color:rgba(23,26,32);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border: 3px solid transparent;
border-radius: 4px;
opacity: 0.85;
cursor: pointer;
margin: 8px;
backdrop-filter: blur(8px);
font-size: 14px;
font-weight: 600;
padding: 4px 24px;
`;

const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
display: flex;
flex-direction: column;
`;