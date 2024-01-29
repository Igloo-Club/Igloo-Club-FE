import { css } from '@emotion/react';
import { theme } from '../common/styles/theme';
import { ArrowLeft } from '../common/assets/svgs/index';
import SendNungilBtn from '../common/components/mainPageComs/SendBtn';

const Profile = () => {
  return (
    <div css={Container}>
      <div css={Top.Wrapper}>
        <ArrowLeft />
        <div css={Top.Title}>
          <span>안녕하세요!</span>
          <span>저는 라고 합니다</span>
        </div>
        <div css={Top.Detail}>
          <span css={Top.DetailPoint}>#</span>
          <p>에 재직 중인\n</p>
          <span css={Top.DetailPoint}>#</span>
          <span>남성이고 \n</span>
          <span css={Top.DetailPoint}>#</span>
          <span>얼굴은</span>
          <span css={Top.DetailPoint}>#</span>
          <span>키는</span>
          <span css={Top.DetailPoint}># cm</span>
          <span>성격 유형은 </span>
          <span css={Top.DetailPoint}>#</span>
        </div>
        <div css={Top.InfoBox}>
          <div css={Top.InfoTitle}>
            <span>저는요, 👋🏻</span>
          </div>
          <div css={Top.InfoSubtitle}>
            <span>소개소개소개소개소개</span>
          </div>
        </div>
      </div>
      <div css={Middle.Wrapper}>
        <div css={Middle.ExAttr}>
          <div css={Middle.ExAttrTitle}>
            <span>나의 외적인 매력은</span>
          </div>
          <div css={Middle.ExAttrList}>
            <span></span>
          </div>
        </div>
        <div css={Middle.InAttr}>
          <div css={Middle.InAttrTitle}>
            <span>나의 내적인 매력은</span>
          </div>
          <div css={Middle.InAttrList}>
            <span></span>
          </div>
        </div>
        <div css={Middle.Notice}>
          <div css={Middle.NoticeTitle}>
            <span>이건 알아두세요!</span>
          </div>
          <div css={Middle.NoticeList}>
            <span></span>
          </div>
        </div>
      </div>
      <div css={Bottom.Wrapper}>
        <div css={Bottom.SendBtn}>
          <SendNungilBtn />
        </div>
      </div>
    </div>
  );
};

export default Profile;

const Container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 3.6rem;
  overflow: auto;
  background-color: #e0cfcf;
`;

const Top = {
  Wrapper: css`
    display: flex;
    flex-direction: column;
    padding-left: 2.7rem;
  `,

  Title: css`
    display: flex;
    padding-top: 2.5rem;
    color: ${theme.colors.gray8};
    ${theme.fonts.title}

    white-space: pre-line;
  `,

  Detail: css`
    display: flex;
    flex-direction: column;
    padding-top: 10.9rem;
    margin-bottom: 3.2rem;
    color: ${theme.colors.gray9};
    ${theme.fonts.subtitle2m};

    white-space: pre-line;
  `,

  DetailPoint: css`
    color: ${theme.colors.primary};
  `,

  InfoBox: css`
    display: flex;
    flex-direction: column;
    width: 37rem;
    height: 13rem;
    padding-top: 2.2rem;
    padding-left: 2rem;
    background-color: ${theme.colors.gray0};
    border-radius: 10px;
  `,

  InfoTitle: css`
    display: flex;
    color: #000;
    ${theme.fonts.body1b};
  `,

  InfoSubtitle: css`
    display: flex;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${theme.colors.gray7};
  `,
};

const Middle = {
  Wrapper: css`
    display: flex;
    flex-direction: column;
    padding-left: 2.7rem;
    margin-bottom: 15rem;
  `,

  ExAttr: css`
    display: flex;
    margin-top: 3.8rem;
  `,

  ExAttrTitle: css`
    display: flex;
    color: ${theme.colors.gray8};
    ${theme.fonts.body1m};
  `,

  ExAttrList: css`
    display: flex;
    height: 3.7rem;
    color: ${theme.colors.black};
    ${theme.fonts.body2r};

    border-radius: 30px;
  `,

  InAttr: css`
    display: flex;
    margin-top: 3.8rem;
  `,

  InAttrTitle: css`
    display: flex;
    color: ${theme.colors.gray8};
    ${theme.fonts.body1m};
  `,

  InAttrList: css`
    display: flex;
    height: 3.7rem;
    color: ${theme.colors.black};
    ${theme.fonts.body2r};

    border-radius: 30px;
  `,

  Notice: css`
    display: flex;
    margin-top: 3.8rem;
  `,

  NoticeTitle: css`
    display: flex;
    color: ${theme.colors.gray8};
    ${theme.fonts.body1m};
  `,

  NoticeList: css`
    display: flex;
    height: 3.7rem;
    color: ${theme.colors.black};
    ${theme.fonts.body2r};

    border-radius: 30px;
  `,
};

const Bottom = {
  Wrapper: css`
    display: flex;
  `,

  SendBtn: css`
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.white};
  `,
};
