import styled from 'styled-components';
import { AvailableApplication } from '../../components/Volunteer/AvailableApplication';
import { VolunteerHeader } from '../../components/Volunteer/Header';
import { useEffect, useState } from 'react';
import { getVolunteer } from '../../apis/volunteers';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

enum THEME {
  'LIGHT' = 'LIGHT',
  'DARK' = 'DARK',
}

export const VolunteerApplication = () => {
  console.log('BASE_URL 확인용:', process.env.REACT_APP_BASE_URL);
  const location = useLocation();
  const initTheme = new URLSearchParams(location.search);
  const [userTheme] = useState<THEME>(
    initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
  );
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    getVolunteer()
      .then((response) => {
        setApplications(response?.volunteers || []);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.error('에러 메시지:', error.message);
          console.error('응답 데이터:', error.response?.data);
          console.error('상태 코드:', error.response?.status);
        } else {
          console.error('알 수 없는 에러:', error);
        }
      });
  }, []);

  const removeApplication = (volunteerId: string) => {
    setApplications((prevApplications) =>
      prevApplications.filter((volunteer) => volunteer.id !== volunteerId),
    );
  };

  return (
    <Wrapper>
      <VolunteerHeader />
      <ContentWrapper Theme={userTheme}>
        {applications.length > 0 ? (
          <ContentContainer>
            {applications.map((volunteer) => (
              <AvailableApplication
                key={volunteer.id}
                name={volunteer.name}
                content={volunteer.content}
                time={`${volunteer.score}점`}
                volunteerId={volunteer.id}
                onApply={() => removeApplication(volunteer.id)}
                status={volunteer.status}
              />
            ))}
          </ContentContainer>
        ) : (
          <TextWrapper>
            <Text Theme={userTheme}>새로운 봉사가 없습니다.</Text>
            <Explain Theme={userTheme}>
              봉사가 있으면 이곳에서 확인할 수 있어요.
            </Explain>
          </TextWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div<{ Theme: THEME }>`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ Theme }) =>
    Theme === THEME.LIGHT ? '#F2F2F7' : '#242424'};
`;

const ContentContainer = styled.div`
  margin-top: 119px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 7px;
  margin-top: 400px;
`;

export const Text = styled.p<{ Theme: THEME }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ Theme }) => (Theme === THEME.LIGHT ? 'black' : 'white')};
`;

export const Explain = styled.p<{ Theme: THEME }>`
  font-size: 13px;
  font-weight: 500;
  color: ${({ Theme }) => (Theme === THEME.LIGHT ? '#D0D5DD' : '#919297')};
`;
