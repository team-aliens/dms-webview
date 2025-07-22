import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {
  useGetMyVolunteers,
  useDeleteApplicationVolunteer,
} from '../../hooks/useVolunteerApi';
import { VolunteerStatus } from '../../apis/volunteers/response';
import React from 'react';

enum THEME {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface ApplicationHistoryProps {
  status: VolunteerStatus;
  name: string;
  volunteerId: string;
}

export const ApplicationHistory = ({
  name,
  status,
  volunteerId,
}: ApplicationHistoryProps) => {
  console.log(window.setAuthToken);
  const location = useLocation();
  const initTheme = new URLSearchParams(location.search);
  const [userTheme] = React.useState<THEME>(
    initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
  );

  const { data, refetch } = useGetMyVolunteers();

  const deleteMutation = useDeleteApplicationVolunteer();

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync(volunteerId);
      await refetch();
    } catch (error) {
      console.error('삭제 중 에러:', error);
    }
  };

  const getButtonLabel = () => {
    if (status === 'APPLYING') return '신청중';
    if (status === 'APPLIED') return '신청 완료';
    return '';
  };

  const application = data?.volunteer_applications?.find(
    (app) => app.volunteer_id === volunteerId,
  );
  if (!application) return null;

  return (
    <Wrapper Theme={userTheme}>
      <Name Theme={userTheme}>{name}</Name>
      <Button>{getButtonLabel()}</Button>
      {status === 'APPLYING' && (
        <CancleButton Theme={userTheme} onClick={handleDelete}>
          취소
        </CancleButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ Theme: THEME }>`
  width: 100%;
  height: 74px;
  display: flex;
  padding: 16px;
  align-items: center;
  background-color: ${({ Theme }) =>
    Theme === THEME.LIGHT ? 'white' : '#2C2C2E'};
  border-radius: 8px;
`;

const Button = styled.div`
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  background-color: #e4f3ff;
  color: #3c78ea;
  padding: 0 14px;
`;

const CancleButton = styled.button<{ Theme: THEME }>`
  background-color: ${({ Theme }) =>
    Theme === THEME.LIGHT ? '#F6F9FE' : 'black'};
  color: ${({ Theme }) => (Theme === THEME.LIGHT ? 'black' : 'white')};
  width: 49px;
  height: 30px;
  border-radius: 8px;
  margin-left: 6px;
  font-weight: 600;
  font-size: 12px;
`;

const Name = styled.p<{ Theme: THEME }>`
  font-size: 14px;
  font-weight: 600;
  margin-right: auto;
  color: ${({ Theme }) => (Theme === THEME.LIGHT ? 'black' : 'white')};
`;
