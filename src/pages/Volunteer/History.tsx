import styled from "styled-components"
import { VolunteerHeader } from "../../components/Volunteer/Header";
import { ApplicationHistory } from "../../components/Volunteer/ApplicationHistory";

export const VolunteerHistory = () => {
    return (
        <Wrapper>
            <VolunteerHeader />
            <ContentWrapper>
                <ContentContainer>
                    <ApplicationHistory status="success" />
                    <ApplicationHistory status="failure" />
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

const ContentWrapper = styled.div`
    width: 100vw;
    height: 100vh;
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