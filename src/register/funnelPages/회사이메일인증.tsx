import { useState } from 'react';
import RegisterBtn from '../components/RegisterBtn';
import RegisterHeader from '../components/RegisterHeader';
import * as St from '../styles/registerStyles';
import styled from '@emotion/styled';
import { NavTypesProps } from '../types/navTypes';
import useRegisterTimer from '../hooks/useRegisterTimer';

const 회사이메일인증 = ({ onPrev, onNext }: NavTypesProps) => {
  const [isActive] = useState(true);
  // const [authentication, setAuthentication] = useState<number[]>([]);

  const handleSubmit = () => {
    //서버통신
    onNext();
  };

  return (
    <>
      <RegisterHeader percent={40} onPrev={onPrev} />
      <article css={St.articleStyles}>
        <section css={St.sectionStyles}>
          <TitleBox>
            <St.Title>인증번호를 보냈어요</St.Title>
            <St.Title>아래에 해당 번호를 입력해 주세요</St.Title>
          </TitleBox>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3.5rem',
            }}
          >
            <div>인증번호 입력창</div>
            <StTimer>{useRegisterTimer(300)}</StTimer>
          </div>
          <StExplain>
            <p>- 메일로 전송된 인증번호 여섯 자리를 모두 입력해 주세요.</p>
            <p>- 메일이 보이지 않는다면 스펨 메일함을 확인해 보세요.</p>
            <p>- 유효 시간이 지났을 경우 인증 절차를 다시 진행해 주세요.</p>
          </StExplain>
        </section>
        <RegisterBtn
          isActive={isActive}
          content="다음으로"
          onClick={handleSubmit}
        />
      </article>
    </>
  );
};

export default 회사이메일인증;

const TitleBox = styled(St.TitleBox)`
  margin-bottom: 9.1rem;
`;

const StTimer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 3.1rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.alpha10_primary};
  border-radius: 5px;

  ${({ theme }) => theme.fonts.subtitle3};
`;

const StExplain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 6.4rem;
  color: ${({ theme }) => theme.colors.gray6};

  ${({ theme }) => theme.fonts.body3};
`;
