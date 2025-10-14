import styled from 'styled-components';
import { Text } from '@team-aliens/design-system';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

enum THEME {
  'LIGHT' = 'LIGHT',
  'DARK' = 'DARK',
}

interface NavBoxProps {
  active: boolean;
  Theme: THEME;
}
export const VolunteerHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initTheme = new URLSearchParams(location.search);
  const [userTheme] = useState<THEME>(
    initTheme.get('theme') === 'dark' ? THEME.DARK : THEME.LIGHT,
  );

  return (
    <Wrapper Theme={userTheme}>
      <NavWrapper>
        <NavBox
          Theme={userTheme}
          onClick={() => navigate('/volunteer/application')}
          active={location.pathname === '/volunteer/application'}
        >
          <Text
            color={userTheme === THEME.LIGHT ? 'gray10' : 'gray1'}
            size="titleS"
          >
            신청
          </Text>
        </NavBox>
        <NavBox
          Theme={userTheme}
          onClick={() => navigate('/volunteer/history')}
          active={location.pathname === '/volunteer/history'}
        >
          <Text
            color={userTheme === THEME.LIGHT ? 'gray10' : 'gray1'}
            size="titleS"
          >
            내역
          </Text>
        </NavBox>
      </NavWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ Theme: THEME }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ Theme }) =>
    Theme === THEME.LIGHT ? '#FFFFFF' : '#242424'};
  z-index: 1000;
`;

const NavWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 50px;
`;

const NavBox = styled.div<NavBoxProps>`
  width: 50vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-bottom: ${({ active, Theme }) =>
    active
      ? Theme === THEME.LIGHT
        ? '2px solid black'
        : '2px solid white'
      : '1px solid' + (Theme === THEME.LIGHT ? '#D7DBDF' : '#696A6F')};
`;
