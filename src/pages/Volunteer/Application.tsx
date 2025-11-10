import styled from 'styled-components';
import { AvailableApplication } from '../../components/Volunteer/AvailableApplication';
import { VolunteerHeader } from '../../components/Volunteer/Header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetVolunteer } from '../../hooks/useVolunteerApi';

enum THEME {
  'LIGHT' = 'LIGHT',
  'DARK' = 'DARK',
}

export const VolunteerApplication = () => {
  const location = useLocation();
  const initTheme = new URLSearchParams(location.search);
  const [userTheme] = useState<THEME>(
    initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
  );

  const { data, isLoading, isError, error } = useGetVolunteer();

  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    if (isLoading) return;
    if (isError) {
      console.error(
        '봉사 데이터 불러오기 실패함, ',
        'Status:',
        error.response?.status,
        'Message:',
        JSON.stringify(error.response?.data),
      );
      return;
    }
    if (data) {
      console.log('연동 성공! 데이터:', JSON.stringify(data, null, 2));
      setApplications(data.volunteers || []);
    }
  }, [data, isLoading, isError, error]);

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
    Theme === THEME.LIGHT ? '#FFFFFF' : '#242424'};
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
