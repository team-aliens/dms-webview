import { useEffect, useState } from "react";
import styled from "styled-components"
import { getMyVolunteers } from "../../apis/volunteers";
import { getMyVolunteersResponse } from "../../apis/volunteers/response";
import { VolunteerStatus } from "../../apis/volunteers/response";
import { deleteApplicationVolunteer } from "../../apis/volunteers";
import { useLocation } from "react-router-dom";

enum THEME {
    'LIGHT' = 'LIGHT',
    'DARK' = 'DARK',
}

interface ApplicationHistoryProps {
    status: VolunteerStatus
    name: string;
    id: string;
}

export const ApplicationHistory = ({name, status, id}: ApplicationHistoryProps) => {
    const [histories, setHistories] = useState<any[]>([]);
    const location = useLocation();
    const initTheme = new URLSearchParams(location.search);
    const [userTheme] = useState<THEME>(
        initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
    )

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
            <Wrapper Theme={userTheme}>
                <Name Theme={userTheme}>{name}</Name>
                <Button>{getButtonLabel()}</Button>
                {status === 'APPLYING' && (
                    <CancleButton Theme={userTheme} onClick={handleDelete}>취소</CancleButton>
                )}
            </Wrapper>
        </>
    ) 
}

const Wrapper = styled.div<{Theme: THEME}>`
    width: 100%;
    height: 74px;
    display: flex;
    padding: 16px;
    align-items: center;
    background-color: ${({Theme}) => Theme === THEME.LIGHT ? 'white' : '2C2C2E'};
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
    padding: 0 14px;
    background-color: #E4F3FF;
    color: #3C78EA;
`;

const CancleButton = styled.button<{Theme: THEME}>`
    background-color: ${({Theme}) => Theme === THEME.LIGHT ? '#F6F9FE' : 'black'};
    color: ${({Theme}) => Theme === THEME.LIGHT ? 'black' : 'white'};
    width: 49px;
    height: 30px;
    border-radius: 8px;
    margin-left: 6px;
    font-weight: 600;
    font-size: 12px;
`;

const Name = styled.p<{Theme: THEME}>`
    font-size: 14px;
    font-weight: 600;
    margin-right: auto;
    color: ${({Theme}) => Theme === THEME.LIGHT ? 'black' : 'white'};
`;
