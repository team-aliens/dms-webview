import styled from "styled-components"
import { AvailableApplication } from "../../components/Volunteer/AvailableApplication";
import { VolunteerHeader } from "../../components/Volunteer/Header";
import { useEffect, useState } from "react";
import { getVolunteer } from "../../apis/volunteers";

export const VolunteerApplication = () => {
    const [applications, setApplications] = useState<any[]>([]);

    useEffect(() => {
        getVolunteer()
        .then((response) => {
            setApplications(response?.volunteers || []);
        })
        .catch((error) => {
            console.error('봉사 데이터를 가져오는 중 오류가 발생했습니다: ', error);
        })
    }, []);

    return (
        <Wrapper>
            <VolunteerHeader />
            <ContentWrapper>
                {applications.length > 0 ? (
                    <ContentContainer>
                        {applications.map((volunteer) => (
                            <AvailableApplication key={volunteer.id} name={volunteer.name} content={volunteer.content} time={`${volunteer.score}시간`}/>
                        ))}
                    </ContentContainer>
                ) : (
                    <TextWrapper>
                        <Text>새로운 봉사가 없습니다.</Text>
                        <Explain>봉사가 있으면 이곳에서 확인할 수 있어요.</Explain>
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

export const Text = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const Explain = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #D0D5DD;
`;