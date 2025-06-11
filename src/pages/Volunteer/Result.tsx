import styled from "styled-components"
import Success from "../../assets/check.svg";
import Fail from "../../assets/fail.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

enum THEME {
    'LIGHT' = 'LIGHT',
    'DARK' = 'DARK',
}

export const VolunteerResult: React.FC = () => {
    const { status } = useParams<{ status: 'success' | 'failure' }>();
    const [visible, setVisible] = useState(true);
    const imageSrc = status === 'success' ? Success : Fail;
    const message = status === 'success' ? '신청이 완료되었습니다.' : '신청에 문제가 생겼습니다.';
    const navigate = useNavigate();

    const location = useLocation();
    const initTheme = new URLSearchParams(location.search);
    const [userTheme] = useState<THEME>(
        initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible((prev) => !prev)
            navigate('/volunteer/application')
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    if (!visible) {
        return null;
    }

    return (
        <Wrapper Theme={userTheme}>
            <img src={imageSrc} alt={status === 'success' ? '성공' : '실패'} />
            <TextWrapper>
                <Text Theme={userTheme}>{message}</Text>
                {status === 'failure' && <ExplainText Theme={userTheme}>다시 한번 시도해주세요.</ExplainText>}
            </TextWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div<{Theme: THEME}>`
    width: 100vw;
    height: 100vh;
    background-color: ${({Theme}) => Theme === THEME.LIGHT ? '#F2F2F7' : '#242424'};
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

const Text = styled.p<{Theme: THEME}>`
    font-size: 18px;
    font-weight: 600;
    color: ${({Theme}) => Theme === THEME.LIGHT ? 'black' : 'white'};
`;

const ExplainText = styled.p<{Theme: THEME}>`
    font-size: 13px;
    font-weight: 500;
    color: ${({Theme}) => Theme === THEME.LIGHT ? 'black' : '#919297'};
`;