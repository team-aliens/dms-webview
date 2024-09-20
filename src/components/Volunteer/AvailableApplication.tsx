import styled from "styled-components"

export const AvailableApplication = () => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Name>봉사활동 이름</Name>
                <Time>10시간</Time>
                <Content>봉사활동 내용</Content>
            </TitleWrapper>
            <Button>신청</Button>
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