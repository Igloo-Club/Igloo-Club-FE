import { css } from '@emotion/react';
import ArrowLeftNav from '../../common/components/ArrowLeftNav';
import DetailProfile from '../../common/pages/detailprofile';
import SendNungilBtn from '../components/SendBtn';
import { useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const navigate = useNavigate();

  const ClickArrowLeft = () => {
    navigate('/mainPage');
  };

  return (
    <div css={Container}>
      <button onClick={ClickArrowLeft}>
        <ArrowLeftNav />
      </button>
      <DetailProfile />
      <div css={SendBtn}>
        <SendNungilBtn />
      </div>
    </div>
  );
};

export default DetailPage;

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const SendBtn = css`
  position: fixed;
  bottom: 0;
`;