import styled from 'styled-components';

export const Policy = () => {
  return (
    <_Wrapper>
      <_PolicyContent>
        당신은 회원가입 약관 동의하십니까? 당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까? 당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까? 당신은 회원가입 약관 동의하십니까?당신은 회원가입 약관
        동의하십니까?당신은 회원가입 약관 동의하십니까?당신은
      </_PolicyContent>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  width: 100%;
`;

const _PolicyContent = styled.strong`
  font-size: ${({ theme }) => theme.textFont.xs.size}px;
  font-weight: ${({ theme }) => theme.textFont.xs.weight};
  color: ${({ theme }) => theme.color.gray5};
`;
