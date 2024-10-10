import styled from "styled-components"
import { applicationVolunteer } from "../../apis/volunteers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VolunteerStatus } from "../../apis/volunteers/response";
import { useLocation } from "react-router-dom";

enum THEME {
    'LIGHT' = 'LIGHT',
    'DARK' = 'DARK',
}

interface AvailableApplicationProps {
    name: string;
    content: string;
    time: string;
    volunteerId: string;
    status: VolunteerStatus;
    onApply: () => void;
}

export const AvailableApplication = ({name, time, volunteerId, status, onApply}: AvailableApplicationProps) => {
    const [isApplying, setIsApplying] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const initTheme = new URLSearchParams(location.search);
    const [userTheme] = useState<THEME>(
        initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
    )

    const handleApply = async () => {
        setIsApplying(true);
        try {
            await applicationVolunteer(volunteerId);
            onApply();
            navigate('/volunteer/success');
        } catch (error) {
            console.error(error);
            navigate('/volunteer/failure');
        }
    }

    const getButtonLabel = () => {
        if (status === 'APPLYING') return '신청중';
        if (status === 'APPLIED') return '신청 완료';
        return '신청';
    }

    return (
        <Wrapper Theme={userTheme}>
            <TitleWrapper>
                <Name Theme={userTheme}>{name}</Name>
                <Time>{time}</Time>
            </TitleWrapper>
            <Button Theme={userTheme} onClick={handleApply} disabled={status === 'APPLYING' || status === 'APPLIED'}>{getButtonLabel()}</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div<{Theme: THEME}>`
    width: 100%;
    height: 74px;
    display: flex;
    padding: 16px;
    align-items: center;
    background-color: ${({Theme}) => Theme === THEME.LIGHT ? 'white' : '#2C2C2E'};
    border-radius: 8px;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    gap: 5px;
`;

const Button = styled.button<{disabled: boolean; Theme: THEME}>`
    height: 30px;
    background-color: ${({ disabled, Theme }) =>
        disabled
            ? Theme === THEME.LIGHT 
                ? '#E4F3FF'  
                : '#E4F3FF' 
            : Theme === THEME.LIGHT 
                ? '#F1F1F1' 
                : 'black'}; 

    color: ${({ disabled, Theme }) =>
        disabled
            ? Theme === THEME.LIGHT 
                ? '#3C78EA' 
                : '#3C78EA' 
            : Theme === THEME.LIGHT 
                ? 'black' 
                : 'white'};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    font-size: 12px;
    font-weight: 500;
    padding: 0 14px;
`;

const Name = styled.p<{Theme: THEME}>`
    font-size: 14px;
    font-weight: 600;
    color: ${({Theme}) => Theme === THEME.LIGHT ? 'black' : 'white'};
`;

const Time = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #3D8BFF;
`;