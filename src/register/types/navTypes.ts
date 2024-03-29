import { Registertypes } from './registerTypes';

export interface NavTypesProps {
  onPrev: () => void;
  onNext: () => void;
  handleRegisterValue?: (data: Registertypes) => void;
  percent: number;
}

export interface ExtendedNavTypesProps extends NavTypesProps {
  registerValues: Registertypes;
}
