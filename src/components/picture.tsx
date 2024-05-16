import styled from "styled-components";
import { Text } from "@team-aliens/design-system";
import { useState } from "react";
import { useRef } from "react";
import { uploadFile } from "../apis/files";
import pictureImg from "../assets/picture.svg";

interface PictureBoxProps {
    onPictureAdded: (url: string) => void;
}

export const Picture = ({ onPictureAdded }: PictureBoxProps) => {
    const [pictures, setPictures] = useState<string[]>([]);
    const ref = useRef<HTMLInputElement>(null);

    const fileHandler = async () => {
        if (ref.current) {
            ref.current.click();
        }
    };

    const handlePictureAdded = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const images = Array.from(files).slice(0, 5 - pictures.length);
            const urls: string[] = [];
            for (const image of images) {
                try {
                    const formData = new FormData();
                    formData.append('file', image);
                    const url = await uploadFile(formData);
                    urls.push(url);
                    onPictureAdded(url);
                } catch (error) {
                    console.error("파일 업로드 에러: ", error);
                }
            }
            setPictures([...pictures, ...urls]);
        }
    };

    return (
        <>
            {pictures.length === 0 && (
                <PictureComponent onClick={fileHandler}>
                    <Text size="bodyM" color="primary">사진 올리기</Text>
                    <Text size="bodyS" color="gray5">최대 5장</Text>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        ref={ref}
                        onChange={handlePictureAdded}
                        multiple
                    />
                </PictureComponent>
            )}
            {pictures.length > 0 && (
                <PicturePreviewWrapper>
                    {pictures.map((picture, index) => (
                        <PicturePreview key={index}>
                            <img src={picture} alt={`Selected ${index}`} />
                        </PicturePreview>
                    ))}
                    {pictures.length < 5 && (
                        <AddButtonWrapper onClick={fileHandler}>
                            <AddButtonImg src={pictureImg} alt="사진"/>
                            <input
                                type="file"
                                style={{display: 'none'}}
                                ref={ref}
                                onChange={handlePictureAdded}
                                multiple 
                            />
                        </AddButtonWrapper>
                    )}
                </PicturePreviewWrapper>
            )}
        </>
    );
};

const PictureComponent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 73px;
    border-radius: 4px;
    border: 1px solid #dddddd;
`;

const PicturePreviewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
    overflow-x: auto;
    padding-bottom: 10px;
`;

const PicturePreview = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
    min-width: fit-content;
    > img {
        width: 73px;
        height: 73px;
        object-fit: cover;
        border-radius: 4px;
    }
`;

const AddButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 73px;
    height: 73px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    min-width: 73px;
`;

const AddButtonImg = styled.img`
    width: 15.17px;
    height: 11.17px;
`;
