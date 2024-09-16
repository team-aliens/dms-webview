import styled from "styled-components"

interface ButtonProps {
    status: 'success' | 'failure';
}

export const ApplicationHistory: React.FC<ButtonProps> = ({status}) => {
    return (
        <Wrapper>
            <TitleWrapper>
                <p style={{fontSize: '14px', fontWeight: '600'}}>봉사활동 이름</p>
                <p style={{fontSize: '13px', fontWeight: '500', color: '#98A2B3'}}>2024.09.16</p>
            </TitleWrapper>
            <Button status={status}>{status === 'success' ? '신청 완료' : '신청 실패'}</Button>
        </Wrapper>
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

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    gap: 5px;
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