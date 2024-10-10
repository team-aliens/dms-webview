import styled from "styled-components"
import { VolunteerHeader } from "../../components/Volunteer/Header";
import { ApplicationHistory } from "../../components/Volunteer/ApplicationHistory";
import { useEffect, useState } from "react";
import { Explain, Text } from "./Application";
import { getMyVolunteers } from "../../apis/volunteers";

export const VolunteerHistory = () => {
    const [histories, setHistories] = useState<any[]>([]);

    useEffect(() => {
        getMyVolunteers()
        .then(response => {
            setHistories(response.volunteer_applications || []);
        })
        .catch(error => {
            console.error('봉사 신청 내역을 가져오는 중 오류가 발생했습니다:' , error);
        })
    }, [])

    return (
        <Wrapper>
            <VolunteerHeader />
            <ContentWrapper>
                {histories.length > 0 ? (
                    <ContentContainer>
                        {histories.map((history) => (
                            <ApplicationHistory 
                                key={history.id}
                                name={history.name}
                                status={history.status}
                                id={history.id}
                            />
                        ))}
                    </ContentContainer>
                ) : (
                    <TextWrapper>
                        <Text>신청 내역이 없습니다.</Text>
                        <Explain>신청 내역은 이곳에서 확인할 수 있어요.</Explain>
                    </TextWrapper>
                )}
            </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const ContentWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
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