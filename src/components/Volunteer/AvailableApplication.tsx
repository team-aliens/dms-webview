import styled from "styled-components"
import { applicationVolunteer } from "../../apis/volunteers";
import { useEffect, useState } from "react";

interface AvailableApplicationProps {
    name: string;
    content: string;
    time: string;
    volunteerId: string;
}

export const AvailableApplication = ({name, content, time, volunteerId}: AvailableApplicationProps) => {
    const [isApplying, setIsApplying] = useState(false);

    const handleApply = () => {
        setIsApplying(true);
        applicationVolunteer(volunteerId)
        .then(() => {
            console.log('성공');
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <Wrapper>
            <TitleWrapper>
                <Name>{name}</Name>
                <Time>{time}</Time>
                <Content>{content}</Content>
            </TitleWrapper>
            <Button onClick={handleApply} disabled={isApplying}>신청</Button>
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

const Button = styled.button`
    width: 49px;
    height: 30px;
    background-color: #F1F1F1;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    font-size: 12px;
    font-weight: 500;
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