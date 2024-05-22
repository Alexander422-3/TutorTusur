import React, { useState } from 'react';
import styled from 'styled-components';
// import AllproductsCard from './ProductsCard';
import ProductList from './RequestProductsWithFilters';
import logo1 from './Logo.png';
import Auth from './Auth';
//import { useNavigate } from 'react-router-dom';
import ContactSection from './UnderPanel';

const Logo = styled.img`
  height: 70px;
  width: 100px;
  margin-left: 10px;
  margin-top: 10px;
`;
const InlineText1 = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px; 
  
`;
const PhoneNumber = styled.p`
  font-size: 16px;
  color: white;
  margin: 0px 0;
  margin-right: 10px;
`;

const ContactDetails = styled.p`
  font-size: 16px;
  color: white;
  margin: 0px 0;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1075px; /* Уменьшаем отступ справа */
  margin-top: 15px;
`;




const StyledButton = styled.button`
  font-size: 16px;
  padding: 8px 12px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px 10px;
  background-color: #36274C;
  position: fixed;
  top: 30px; /* Изменяем значение top, чтобы кнопка была ровно над SortMenuContainer */
  right: 185px;
  transform: translate(0, -50%);
`;


function BlueRectangle1() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleAuthModal = () => {
    setIsAuthOpen(!isAuthOpen);
  };

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <div style={{ width: '100%', height: '150px', backgroundColor: '#3C388D', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
        <InlineText1>
          <Logo src={logo1} alt="Логотип 1" />
          <ContactInfoContainer>
            <ContactDetails>Контактные данные:</ContactDetails>
            <PhoneNumber>+88525485476</PhoneNumber>
          </ContactInfoContainer>
          <StyledButton onClick={toggleAuthModal}>Регистрация/вход</StyledButton>
        </InlineText1>
      </div>
      {isAuthOpen && <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }}>
        <Auth onCloseModal={toggleAuthModal} />
      </div>}
    </div>
  );
}



export default class CatalogPage extends React.Component{
  render(){
    return(
      <div style={{ paddingTop: '150px' }}>
      <BlueRectangle1 />
      <ProductList/>
      <ContactSection/>
      </div>
    );
  }
}