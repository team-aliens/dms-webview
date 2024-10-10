import styled from "styled-components"
import { applicationVolunteer } from "../../apis/volunteers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VolunteerStatus } from "../../apis/volunteers/response";

interface AvailableApplicationProps {
    name: string;
    content: string;
    time: string;
    volunteerId: string;
    status: VolunteerStatus;
    onApply: () => void;
}

export const AvailableApplication = ({name, content, time, volunteerId, status, onApply}: AvailableApplicationProps) => {
    const [isApplying, setIsApplying] = useState(false);
    const navigate = useNavigate();

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
        <Wrapper>
            <TitleWrapper>
                <Name>{name}</Name>
                <Time>{time}</Time>
                <Content>{content}</Content>
            </TitleWrapper>
            <Button onClick={handleApply} disabled={status === 'APPLYING' || status === 'APPLIED'}>{getButtonLabel()}</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 94px;
    display: flex;
    padding: 16px;
    align-items: center;
    background-color: white;
    border-radius: 8px;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    gap: 5px;
`;

const Button = styled.button<{disabled: boolean}>`
    height: 30px;
    background-color: ${({disabled}) => (disabled ? '#E4F3FF' : '#F1F1F1')};
    color: ${({disabled}) => (disabled ? '#3C78EA' : '#000000')};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    font-size: 12px;
    font-weight: 500;
    padding: 0 14px;
`;

const Name = styled.p`
    font-size: 14px;
    font-weight: 600;
`;

const Time = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #3D8BFF;
`;

const Content = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: #98A2B3;
`;