import { useEffect, useState } from "react";
import styled from "styled-components"
import { getMyVolunteers } from "../../apis/volunteers";
import { getMyVolunteersResponse } from "../../apis/volunteers/response";
import { VolunteerStatus } from "../../apis/volunteers/response";
import { deleteApplicationVolunteer } from "../../apis/volunteers";

interface ApplicationHistoryProps {
    status: VolunteerStatus
    name: string;
    id: string;
}

export const ApplicationHistory = ({name, status, id}: ApplicationHistoryProps) => {
    const [histories, setHistories] = useState<any[]>([]);

    const handleDelete = async () => {
        try {
            await deleteApplicationVolunteer(id);
            setHistories(histories.filter(history => history.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMyVolunteers()
            .then((response: getMyVolunteersResponse) => {
                setHistories(response.volunteer_applications || []);
            })
            .catch((error) => {
                console.error('내 봉사 신청 내역을 가져오는 중 오류가 발생했습니다: ', error);
            });
    }, []);

    const getButtonLabel = () => {
        if (status === 'APPLYING') return '신청중';
        if (status === 'APPLIED') return '신청 완료';
    }

    return (
        <>
            <Wrapper>
                <Name>{name}</Name>
                <Button>{getButtonLabel()}</Button>
                {status === 'APPLYING' && (
                    <CancleButton onClick={handleDelete}>취소</CancleButton>
                )}
            </Wrapper>
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

const Button = styled.div`
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 12px;
    background-color: '#F1F1F1';
    color: '#000000';
    padding: 0 14px;
    background-color: #E4F3FF;
    color: #3C78EA;
`;

const CancleButton = styled.button`
    background-color: #F6F9FE;
    width: 49px;
    height: 30px;
    border-radius: 8px;
    margin-left: 6px;
    font-weight: 600;
    font-size: 12px;
`;

const Name = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin-right: auto;
`;
