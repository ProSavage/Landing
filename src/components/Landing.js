import React from 'react';
import styled from 'styled-components';
import Icon from './Icon'
import linkedin from '../assets/social-icons/linkedin.png'
import github from '../assets/social-icons/github.png'
import spigotmc from '../assets/social-icons/spigotmc.png'
import instagram from '../assets/social-icons/instagram.png'
import prosavage from '../assets/61.namandaboss-fix1.png'


const LandingWrapper = styled.div`
  display: flex;
  margin-left: 10vw;
  margin-top: 10vh;
  justify-content: space-between;
  
  .right {
    margin-left: 100px;
    margin-top: -10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-text {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .text {
        display: flex;
        flex-direction: column;
        h1 {
            font-weight: 600;
            font-size: 50px;
            line-height: 75px;
            /* identical to box height */
            letter-spacing: 0.2em;
            margin: 0
        }
          
        p {
          margin: 5px 0;
        }
         
        .bio {
          margin-top: 80px;
          max-width: 450px;
        }
    }
    
    .icons {
      display: flex;
      flex-direction: column;
    }
    
  }  
  
  
`;


const Landing = () => {
    return (
        <LandingWrapper>
            <div className={'left-text'}>
                <div className={'text'}>
                    <h1>PROSAVAGE:</h1>
                    <p>Developer, Student, Keyboard Collector</p>
                    <p className={"bio"}>I am a 19 year old student based in Auburn University
                        with a diverse set of skills from Frontend/Systems
                        development to DevOps deployment.</p>
                </div>
                <div className={"icons"}>
                    <Icon image={linkedin} link={'https://www.linkedin.com/in/prosavage/'}/>
                    <Icon image={spigotmc} link={'https://www.spigotmc.org/members/prosavage.203132/'}/>
                    <Icon image={instagram} link={'https://www.instagram.com/thecommondenamanator/'}/>
                    <Icon image={github} link={'https://github.com/ProSavage'}/>
                </div>
            </div>
            <div className={'right'}>
                <img src={prosavage} width={700}/>
            </div>


        </LandingWrapper>
    )
};

export default Landing;