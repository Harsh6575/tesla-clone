import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href='/'>
        <img src='/images/logo.svg' alt='tesla logo' />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <p>
            <a key={index} href='/'>{car}</a>
          </p>
        ))}
      </Menu>
      <RightMenu>
        <a href='/'>
          Shop
        </a>
        <a href='/'>
          Account
        </a>
        <CustomMenu onClick={() => {
          setBurgerStatus(true)
        }}>
          Menu
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CloseClose onClick={() => {
            setBurgerStatus(false)
          }} />
        </CloseWrapper>
        <li><a href='/'>Existing Inventory</a></li>
        <li><a href='/'>Used Inventory</a></li>
        <li><a href='/'>Trade-in</a></li>
        <li><a href='/'>Test Drive</a></li>
        <li><a href='/'>Insurance</a></li>
        <li><a href='/'>Cybertruck</a></li>
        <li><a href='/'>Roadaster</a></li>
        <li><a href='/'>Semi</a></li>
        <li><a href='/'>Charging</a></li>
        <li><a href='/'>Powerwall</a></li>
        <li><a href='/'>Commercial Energy</a></li>
        <li><a href='/'>Utilities</a></li>
        <li><a href='/'>Find Us</a></li>
        <li><a href='/'>Support</a></li>
        <li><a href='/'>Invester Relations</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
min-height:60px;
position:fixed;
top:0;
left:0;
right:0;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
z-index:1;
`;

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

p{
  font-weight:600;
  padding:0 10px;
  flex-wrap:nowrap;
}

@media (max-width:1000px){
  display:none;
}

`;

const RightMenu = styled.div`
display:flex;
a{
  font-weight:600;
  margin-right:10px;
  flex-wrap:nowrap;
}`;

const CustomMenu = styled(RightMenu)`
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  margin-right:10px;
  flex-wrap:nowrap;
  cursor:pointer;
`;

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
overflow-y:scroll;

transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 250ms ease-in-out;

li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);

  a{
    font-weight:600;
  }
}
`;

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`;

const CloseClose = styled(CloseIcon)`
cursor:pointer;
`;