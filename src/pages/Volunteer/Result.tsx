import styled from "styled-components"
import Success from "../../assets/check.svg";
import Fail from "../../assets/fail.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const VolunteerResult: React.FC = () => {
    const { status } = useParams<{ status: 'success' | 'failure' }>();
    const [visible, setVisible] = useState(true);
    const imageSrc = status === 'success' ? Success : Fail;
    const message = status === 'success' ? '신청이 완료되었습니다.' : '신청에 문제가 생겼습니다.';
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            navigate('/volunteer/application')
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    if (!visible) {
        return null;
    }

    return (
        <Wrapper>
            <img src={imageSrc} alt={status === 'success' ? '성공' : '실패'} />
            <TextWrapper>
                <Text>{message}</Text>
                {status === 'failure' && <ExplainText>다시 한번 시도해주세요.</ExplainText>}
            </TextWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F2F2F7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 600;
`;

const ExplainText = styled.p`
    font-size: 13px;
    font-weight: 500;
`;