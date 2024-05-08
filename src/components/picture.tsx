import styled from "styled-components"
import { Text } from "@team-aliens/design-system";
import { useState } from "react";
import { useRef } from "react";

interface PictureBoxProps {
    onPictureAdded: () => void;
}

export const Picture: React.FC<PictureBoxProps> = ({onPictureAdded}) => {
    const [, setPictureAdded] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const fileHandler = () => {
        if (ref.current) {
            ref.current!.click();
        }
    };

    const handlePictureAdded = () => {
        setPictureAdded(true);
        onPictureAdded();
    }

    return (
        <PictureComponent onClick={fileHandler}>
            <Text size='bodyM' color="primary"> 사진 올리기 </Text>
            <Text size="bodyS" color="gray5">최대 5장</Text>
            <input 
                type="file"
                style={{display: 'none'}}
                ref={ref}
                onChange={handlePictureAdded}
            />
        </PictureComponent>
    )
}

const PictureComponent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 73px;
    border-radius: 4px;
    border: 1px solid #DDDDDD;
`;