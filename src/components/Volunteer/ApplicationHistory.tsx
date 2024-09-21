import { useEffect, useState } from "react";
import styled from "styled-components"
import { getMyVolunteers } from "../../apis/volunteers";
import { getMyVolunteersResponse } from "../../apis/volunteers/response";

interface ButtonProps {
    status: 'success' | 'failure';
}

export const ApplicationHistory: React.FC<ButtonProps> = ({status}) => {
    const [histories, setHistories] = useState<any[]>([]);

    useEffect(() => {
        getMyVolunteers()
            .then((response: getMyVolunteersResponse) => {
                setHistories(response.volunteer_applications || []);
            })
            .catch((error) => {
                console.error('내 봉사 신청 내역을 가져오는 중 오류가 발생했습니다: ', error);
            });
    }, []);

    return (
        <>
            {histories.map((history) => (
                <Wrapper key={history.id}>
                    <Name>{history.name}</Name>
                    <Button status={history.approved ? 'success' : 'failure'}>{history.approved ? '신청 완료' : '신청 실패'}</Button>
                </Wrapper>
            ))}
        </>
    ) 
}

const Wrapper = styled.div`
    width: 100%;
    height: 74px;
    display: flex;
    padding: 16px;
    align-items: center;
    background-color: white;
    border-radius: 8px;
`;

const Button = styled.div<ButtonProps>`
    width: 73px;
    height: 30px;
    border-radius: 8px;
    background-color: ${({ status }) => (status === 'success' ? '#E4F3FF' : '#F5E6EA')};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ status }) => (status === 'success' ? '#3C78EA' : '#7A0017')};
    font-weight: 600;
    font-size: 12px;
`;

const Name = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin-right: auto;
`;
