import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import RegisterBtn from '../components/RegisterBtn';
import RegisterHeader from '../components/RegisterHeader';
import * as St from '../styles/registerStyles';
import { StBasicInput } from '../styles/registerInputStyles';
import { RegisterBasicInput } from '../components/RegisterInputs';
import styled from '@emotion/styled';
import onlyAbleNumber from '../../common/utils/onlyAbleNumber';
import { NavTypesProps } from '../types/navTypes';
import instance from '../../common/apis/axiosInstanse';

interface PhoneNumProps extends NavTypesProps {
  setPhoneNum: Dispatch<SetStateAction<string>>;
}

const 전화번호입력 = ({ onPrev, onNext, setPhoneNum }: PhoneNumProps) => {
  const [isActive, setIsActive] = useState(false);
  const [thisPhoneNum, thisSetPhoneNum] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (thisPhoneNum.length === 11) setIsActive(true);
    else setIsActive(false);
  }, [thisPhoneNum]);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await instance.post('api/member/phone/authentication', {
        phoneNumber: thisPhoneNum,
      });
      setPhoneNum(thisPhoneNum);
      onNext();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <RegisterHeader percent={20} onPrev={onPrev} />
      {isLoading ? (
        <>Loading,,</>
      ) : (
        <article css={St.articleStyles}>
          <section css={St.sectionStyles}>
            <TitleBox>
              <St.Title>간편한 알림 서비스를 제공하기 위해</St.Title>
              <St.Title>회원님의 전화번호가 필요해요</St.Title>
            </TitleBox>

            <RegisterBasicInput
              label="휴대폰 번호"
              explain="카카오톡 메세지를 통해 발송되는 인증번호를 확인하세요"
            >
              <StBasicInput
                type="text"
                placeholder="휴대폰 번호를 띄어쓰기 없이 입력해 주세요"
                value={thisPhoneNum}
                onChange={(e) =>
                  thisSetPhoneNum(onlyAbleNumber(e.target.value))
                }
              />
            </RegisterBasicInput>
          </section>
          <RegisterBtn
            isActive={isActive}
            content="다음으로"
            onClick={handleSubmit}
          />
        </article>
      )}
    </>
  );
};

export default 전화번호입력;

const TitleBox = styled(St.TitleBox)`
  margin-bottom: 5.4rem;
`;