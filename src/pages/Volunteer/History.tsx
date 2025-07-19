import styled from 'styled-components';
import { VolunteerHeader } from '../../components/Volunteer/Header';
import { ApplicationHistory } from '../../components/Volunteer/ApplicationHistory';
import { useEffect, useState } from 'react';
import { Explain, Text } from './Application';
import { getMyVolunteers } from '../../apis/volunteers';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

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

  useEffect(() => {
    getMyVolunteers()
      .then((response) => {
        setHistories(response.volunteer_applications || []);
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
