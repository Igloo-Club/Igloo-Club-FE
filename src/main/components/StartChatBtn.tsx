import { css } from '@emotion/react';
// import instance from '../../common/apis/axiosInstanse';
import { theme } from '../../common/styles/theme';
import { Chat } from '../assets/svgs/index';

const StartChatBtn = () => {
  //   const location = useLocation();
  //   const { state } = location;

  //   const handleClickBtn = async () => {
  //     try {
  //       await instance.post('/api/nungil/send?', null, {
  //         params: {
  //           nungilId: state.nungilId,
  //         },
  //       });
  //       console.log('눈길 보내기 완료');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div css={Container}>
      <button type="button" css={SendBtn}>
        <Chat />
        지금 대화를 시작해보세요
      </button>
    </div>
  );
};

export default StartChatBtn;

const Container = css`
  width: 100%;
  height: 9rem;
  padding: 1.7rem 2.3rem;
  background: ${theme.colors.white};
  border-top: 1px solid #e3e3e3;
`;

const SendBtn = css`
  display: flex;
  flex-direction: row;
  gap: 0.9rem;
  align-items: center;
  justify-content: center;
  width: 38rem;
  height: 5.5rem;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${theme.colors.white};
  text-align: center;
  background-color: ${theme.colors.primary};
  border-radius: 10px;
`;
