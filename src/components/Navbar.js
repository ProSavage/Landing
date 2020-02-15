import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.jpeg'


const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
  height: 100px;
  
  
  .children {
    display: flex;
  }
  
  .logo {
    margin-left: 100px;
    display: flex;
    justify-content: center;
    margin-top: 30px;

  }
  
  .links {
    margin-right: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;

   
    .link {
      margin: 40px 60px;
      color: #848282;
      font-size: 15px;
      font-weight: 500;
    }
    
  }

`;

const Navbar = () => {
    return (
        <NavContainer>
            <div className={'children logo'}>
                <img src={Logo} alt={'ProSavage'} height={50}/>
            </div>
            <div className={'children links'}>
                <a className={'link'} href={'https://github.com/ProSavage'}>Projects</a>
                <a className={'link'} href={'https://github.com/ProSavage'}>Github</a>
                <a className={'link'} href={'https://www.spigotmc.org/resources/authors/prosavage.203132/'}>Spigot</a>
                <a className={'link'} href={'https://illyria.io'}>SavageLabs</a>
            </div>
        </NavContainer>
    )
};

export default Navbar;