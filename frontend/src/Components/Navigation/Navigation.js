import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import img from '../../img/img.png'; // Imported image
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
    const [showDashboardText, setShowDashboardText] = useState(true);

    // Show the welcome message by default when the component mounts
    useEffect(() => {
        if (active === '') {
            setActive('Dashboard');
        }
    }, []);

    const handleMenuClick = (item) => {
        setActive(item.id);
        if (item.title === 'Dashboard') {
            setShowDashboardText(true);
        } else {
            setShowDashboardText(false);
        }
    };

    return (
        <NavContainer>
            <NavStyled>
                <div className="user-con">
                    <img src={avatar} alt="User Avatar" />
                    <div className="text">
                        <h2>HI BUDDY</h2>
                        <p>Your Money</p>
                    </div>
                </div>
                <ul className="menu-items">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handleMenuClick(item)}
                            className={active === item.id ? 'active' : ''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
                <div className="bottom-nav">
                    <li>
                        {signout} Sign Out
                    </li>
                </div>
            </NavStyled>

            {/* Right-side content for the Expense Tracker message */}
            <ContentStyled>
                {showDashboardText && (
                    <TextAndImage>
                        <TextContainer>
                            <AnimatedText>
                               <h1> Welcome </h1>
                                <br />
                            </AnimatedText>
                        </TextContainer>
                        <img src={img} alt="Expense Tracker" />
                    </TextAndImage>
                )}
            </ContentStyled>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    display: flex;
    height: 100%;
`;

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    
    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }

        h2 {
            color: rgba(34, 34, 96, 1);
        }

        p {
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;

            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;

        i {
            color: rgba(34, 34, 96, 1) !important;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
        .h1 { 
        background: linear-gradient(90deg, #FCF6F9 0%, #FFFFFF 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        }
}
`;

const ContentStyled = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align content to the left */
    background: transparent; /* Transparent background */
    padding: 2rem;
`;

const TextAndImage = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem; /* Space between text and image */
    
    img {
        width: 500px; /* Increase the size of the image */
        height: auto;
        border-radius: 10px;
        box-shadow: none; /* Remove shadow for transparency */
    }
`;

const TextContainer = styled.div`
    background: transparent; /* Ensure background is transparent */
    padding: 0; /* Remove any extra padding */
`;

const AnimatedText = styled.h1`
    font-size: 4rem;
    color: black; /* Thick black color for the text */
    transition: color 0.3s ease-in-out;
`;

export default Navigation;
