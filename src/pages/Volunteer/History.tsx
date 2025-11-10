import styled from 'styled-components';
import { VolunteerHeader } from '../../components/Volunteer/Header';
import { ApplicationHistory } from '../../components/Volunteer/ApplicationHistory';
import { useEffect, useState } from 'react';
import { Explain, Text } from './Application';
import { useLocation } from 'react-router-dom';
import { useGetMyVolunteers } from '../../hooks/useVolunteerApi';

enum THEME {
  'LIGHT' = 'LIGHT',
  'DARK' = 'DARK',
}

export const VolunteerHistory = () => {
  const [histories, setHistories] = useState<any[]>([]);
  const location = useLocation();
  const initTheme = new URLSearchParams(location.search);
  const [userTheme] = useState<THEME>(
    initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
  );

  const { data, isLoading, isError, error } = useGetMyVolunteers();

  useEffect(() => {
    if (isLoading) return;
    if (isError) {
      console.error(
        '봉사 데이터 불러오기 실패함, ',
        'Status:',
        error.response?.status,
        'Message:',
        error.response?.data,
      );
      return;
    }
    if (data) {
      console.log('연동 성공! 데이터:', data);
      setHistories(data.volunteer_applications || []);
    }
  }, [data, isLoading, isError, error]);

  return (
    <Wrapper>
      <VolunteerHeader />
      <ContentWrapper Theme={userTheme}>
        {histories.length > 0 ? (
          <ContentContainer>
            {histories.map((history) => (
              <ApplicationHistory
                key={history.id}
                name={history.name}
                status={history.status}
                volunteerId={history.volunteer_id}
              />
            ))}
          </ContentContainer>
        ) : (
          <TextWrapper>
            <Text Theme={userTheme}>신청 내역이 없습니다.</Text>
            <Explain Theme={userTheme}>
              신청 내역은 이곳에서 확인할 수 있어요.
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
