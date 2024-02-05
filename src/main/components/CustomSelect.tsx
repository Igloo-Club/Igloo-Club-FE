import { useState } from 'react';
import { css } from '@emotion/react';
import { theme } from '../../common/styles/theme';
import { Arrow } from '../assets/svgs';

const CustomSelect = () => {
  const [selected, setSelected] = useState('광화문');
  const selectList = ['광화문', '판교'];
  const [showToggle, setShowToggle] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    setShowToggle(false);
  };

  const handleToggle = () => {
    setShowToggle((prev) => !prev);
  };

  return (
    <div css={Container}>
      <div css={SelectBox} onClick={handleToggle}>
        <span css={SelectValue}>{selected}</span>
        <Arrow />
      </div>
      {showToggle && (
        <div css={OptionBox}>
          {selectList.map((item) => (
            <div key={item} css={Option} onClick={() => handleSelect(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

const Container = css`
  display: flex;
  gap: 0.5rem;
`;

const SelectBox = css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  color: ${theme.colors.primary};
  ${theme.fonts.title};

  cursor: pointer;
`;

const SelectValue = css`
  color: ${theme.colors.primary};
  border-bottom: 2px solid ${theme.colors.primary};
`;

const OptionBox = css`
  position: absolute;
  left: 20;
  width: 9rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.3rem;
  margin-top: 4rem;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray2};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

const Option = css`
  padding: 0.5rem;
  ${theme.fonts.subtitle2b}

  color: ${theme.colors.gray6};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.gray0};
  }
`;
