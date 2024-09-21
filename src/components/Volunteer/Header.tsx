import styled from "styled-components";
import Arrow from "../../assets/arrow.svg";
import { Text } from "@team-aliens/design-system";
import { useNavigate, useLocation } from "react-router-dom";

interface NavBoxProps {
    active: boolean;
}
export const VolunteerHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Wrapper>
                <HeaderWrapper>
                    <ArrowIcon src={Arrow} style={{marginRight: 'auto'}}/>
                    <TextWrapper>
                        <Text size="titleS">봉사 신청</Text>
                    </TextWrapper>
                </HeaderWrapper>
                <NavWrapper>
                    <NavBox onClick={() => navigate('/volunteer/application')} active={location.pathname === "/volunteer/application"}>
                        <Text size="titleS">신청</Text>
                    </NavBox>
                    <NavBox onClick={() => navigate('/volunteer/history')} active={location.pathname === "/volunteer/history"}>
                        <Text size="titleS">내역</Text>
                    </NavBox>
                </NavWrapper>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #F2F2F7;
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
    border-bottom: 1px solid black;
    border-bottom: ${({ active }) => (active ? "2px solid black" : "none")};
`;