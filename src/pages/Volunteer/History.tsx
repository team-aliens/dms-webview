import styled from "styled-components"
import { VolunteerHeader } from "../../components/Volunteer/Header";
import { ApplicationHistory } from "../../components/Volunteer/ApplicationHistory";
import { useState } from "react";

export const VolunteerHistory = () => {
    const [histories, setHistories] = useState<any[]>([]);

    return (
        <Wrapper>
            <VolunteerHeader />
            <ContentWrapper>
                {histories.length > 0 ? (
                    <ContentContainer>
                        {histories.map((index) => (
                            <ApplicationHistory status="success" key={index}/>
                        ))}
                    </ContentContainer>
                ) : (
                    <TextWrapper>
                        <p style={{fontSize: '16px', fontWeight: '600'}}>신청 내역이 없습니다.</p>
                        <p style={{color:'#D0D5DD', fontSize: '13px', fontWeight: '500'}}>신청 내역은 이곳에서 확인할 수 있어요.</p>
                    </TextWrapper>
                )}
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
`;

const ContentContainer = styled.div`
    margin-top: 119px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    margin-top: 400px;
`;