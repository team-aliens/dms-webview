import styled from "styled-components"
import { Text } from '@team-aliens/design-system';
import Arrow from "../../assets/arrow.svg";
import { AvailableApplication } from "../../components/Volunteer/AvailableApplication";

export const VolunteerApplication = () => {
    return (
        <Wrapper>
            <Container>
                <HeaderWrapper>
                    <ArrowIcon src={Arrow} style={{marginRight: 'auto'}}/>
                    <TextWrapper>
                        <Text size="titleS">봉사 신청</Text>
                    </TextWrapper>
                </HeaderWrapper>
                <NavWrapper>
                    <NavBox>
                        <Text size="titleS">신청</Text>
                    </NavBox>
                    <NavBox>
                        <Text size="titleS">내역</Text>
                    </NavBox>
                </NavWrapper>
            </Container>
            <ContentWrapper>
                <ContentContainer>
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                    <AvailableApplication />
                </ContentContainer>
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
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

const NavBox = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid black;
`;

const ContentWrapper = styled.div`
    width: 100vw;
    background-color: #F2F2F7;
    margin-top: 94px;
`;

const ContentContainer = styled.div`
    margin-top: 24px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
`;