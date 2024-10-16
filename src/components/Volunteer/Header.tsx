import styled from "styled-components";
import Arrow from "../../assets/arrow.svg";
import ArrowWhite from "../../assets/arrow-white.svg";
import { Text } from "@team-aliens/design-system";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

enum THEME {
    'LIGHT' = 'LIGHT',
    'DARK' = 'DARK',
}

interface NavBoxProps {
    active: boolean;
    Theme: THEME;
}
export const VolunteerHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const initTheme = new URLSearchParams(location.search);
    const [userTheme] = useState<THEME>(
      initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
    );

    return (
        <Wrapper Theme={userTheme}>
                <HeaderWrapper>
                    <ArrowIcon src={userTheme === THEME.LIGHT ? Arrow : ArrowWhite} style={{marginRight: 'auto'}}/>
                    <TextWrapper>
                        <Text 
                            size="titleS"
                            color={userTheme === THEME.LIGHT ? 'gray10' : 'gray1'}
                        >
                            봉사 신청
                        </Text>
                    </TextWrapper>
                </HeaderWrapper>
                <NavWrapper>
                    <NavBox Theme={userTheme} onClick={() => navigate('/volunteer/application')} active={location.pathname === "/volunteer/application"}>
                        <Text color={userTheme === THEME.LIGHT ? 'gray10' : 'gray1'} size="titleS">신청</Text>
                    </NavBox>
                    <NavBox Theme={userTheme} onClick={() => navigate('/volunteer/history')} active={location.pathname === "/volunteer/history"}>
                        <Text color={userTheme === THEME.LIGHT ? 'gray10' : 'gray1'} size="titleS">내역</Text>
                    </NavBox>
                </NavWrapper>
        </Wrapper>
    )
}


const Wrapper = styled.div<{Theme: THEME}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({Theme}) => Theme === THEME.LIGHT ? '#F2F2F7' : '#242424'};
    z-index: 1000;
`;

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
    align-items: center;
    position: relative;
`;

const ArrowIcon = styled.img`
    position: absolute;
    left: 16px;
    display: flex;
    align-items: center;
`;

const TextWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 38px;
`;

const NavBox = styled.div<NavBoxProps>`
    width: 50vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: ${({ active, Theme }) =>
    active
      ? Theme === THEME.LIGHT
        ? "2px solid black" 
        : "2px solid white"  
      : "1px solid" + (Theme === THEME.LIGHT ? "#D7DBDF" : "#696A6F")};  
`;