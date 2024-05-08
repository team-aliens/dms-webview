import styled from "styled-components"
import { Arrow } from "@team-aliens/design-system"
import { Text } from "@team-aliens/design-system"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { Picture } from "../components/picture"
import AndroidIcon from "../assets/android.svg"
import IosIcon from "../assets/ios.svg"
import { Button } from "@team-aliens/design-system"
import ClickedAndroidIcon from "../assets/clickedAndroid.svg";
import ClickedIosIcon from "../assets/clickedIos.svg";

enum THEME {
    'LIGHT' = 'LIGHT',
    'DARK' = 'DARK',
}

export const Bug = () => {
    const [isAndroidClicked, setIsAndroidClicked] = useState(false);
    const [isIosClicked, setIsIosClicked] = useState(false);
    const [bugDescription, setBugDescription] = useState("");

    const [, setPictureAdded] = useState(false);
    const location = useLocation();
    const initTheme = new URLSearchParams(location.search);

    const handleAndroidClick = () => {
        setIsAndroidClicked(true);
        setIsIosClicked(false);
    }
    const handleIosClick = () => {
        setIsIosClicked(true);
        setIsAndroidClicked(false);
    }

    const [userTheme] = useState<THEME>(
        initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
    );
    const handlePictureAdded = () => {
        setPictureAdded(true);
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBugDescription(e.target.value);
    }

    const isCompleteButtonDisabled = !(isAndroidClicked || isIosClicked) || !bugDescription;

    return (
        <Wrapper Theme={userTheme}>
            <ArrowWrapper>
                <Arrow direction="left" size={36}/>
            </ArrowWrapper>
            <Body>
                <TitleWrapper>
                    <Text size="titleL">버그 제보함</Text>
                    <Text
                        size="bodyS"
                        color={userTheme === THEME.LIGHT ? 'gray5' : 'gray1'}
                    >
                        DMS를 개선 하는데 도움이 돼요.
                    </Text>
                </TitleWrapper>
                <div>
                    <TextWrapper>
                        <Text 
                            size="bodyS"
                            color={userTheme === THEME.LIGHT ? 'gray5' : 'gray1'}
                        >
                            운영체제
                        </Text>
                    </TextWrapper>
                    <ButtonWrapper>
                        <AndroidButton onClick={handleAndroidClick} clicked={isAndroidClicked}>
                            <Icon src={isAndroidClicked ? ClickedAndroidIcon : AndroidIcon} alt="Android"/>
                            <ButtonText clicked={isAndroidClicked}>Android</ButtonText>
                        </AndroidButton>
                        <IosButton onClick={handleIosClick} clicked={isIosClicked}>
                            <Icon src={isIosClicked ? ClickedIosIcon : IosIcon} alt="Ios"/>
                            <ButtonText clicked={isIosClicked}>Ios</ButtonText>
                        </IosButton>
                    </ButtonWrapper>
                </div>
                <div>
                    <TextWrapper>
                        <Text
                            size="bodyS"
                            color={userTheme === THEME.LIGHT ? 'gray5' : 'gray1'}
                        >제보 내용</Text>
                    </TextWrapper>
                    <TextArea placeholder="버그 내용을 자세하게 알려주세요" value={bugDescription} onChange={handleDescriptionChange}></TextArea>
                </div>
                <Picture onPictureAdded={handlePictureAdded}/>
            </Body>
            <CompleteButtonWrapper>
                <CompleteButton color="primary" size="medium" disabled={isCompleteButtonDisabled}>
                    전부 작성했어요
                </CompleteButton> 
            </CompleteButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div<{Theme: THEME}>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    position: relative;
`;

const ArrowWrapper = styled.div`
    padding-left: 16px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: 100%;
`;

const TitleWrapper = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    padding: 16px 0px 16px 0px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`;

const AndroidButton = styled.div<{clicked: boolean}>`
    width: 50%;
    height: 124px;
    border-radius: 4px;
    border: 1px solid #DDDDDD;
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 34px;
    padding: 15px 12px 15px 12px;
    background-color: ${(props) => (props.clicked ? "#3D8AFF" : "white")};
`;

const IosButton = styled.div<{clicked: boolean}>`
    width: 50%;
    height: 124px;
    border-radius: 4px;
    border: 1px solid #DDDDDD;
    display: flex;
    flex-direction: column;
    padding: 15px 12px 15px 12px;
    gap: 34px;
    background-color: ${(props) => (props.clicked ? "#3D8AFF" : "white")};
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 176px;
    border: 1px solid black;
    padding: 16px;
    border-radius: 4px;
    border: 1px solid #DDDDDD;
    font-size: 14px;
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
`;

const ButtonText = styled(Text)<{clicked: boolean}>`
    color: ${(props) => (props.clicked ? "white" : "#000000")};
`;

const CompleteButtonWrapper = styled.div`
    display: flex;
    padding: 24px;
    width: 100%;
    margin-top: 91px;
`;

const CompleteButton = styled(Button)<{ disabled: boolean }>`
    color: #FFFFFF;
    background-color: ${(props) => (props.disabled ? "#9B9B9B" : "#3D8AFF")};
    &:hover {
        background-color: ${(props) => (props.disabled ? "#9B9B9B" : "#3D8AFF")};
    }
`;