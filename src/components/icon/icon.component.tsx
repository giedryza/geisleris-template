import React from 'react';

import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import { ReactComponent as Right } from '../../assets/icons/right.svg';

export enum IconCode {
  CHEVRON_LEFT,
  CHEVRON_RIGHT,
  RIGHT,
}

interface Props {
  icon: IconCode;
}

const Icon: React.FC<Props> = ({ icon }) => {
  switch (icon) {
    case IconCode.CHEVRON_LEFT:
      return <ChevronLeft />;
    case IconCode.CHEVRON_RIGHT:
      return <ChevronRight />;
    case IconCode.RIGHT:
      return <Right />;
    default:
      return null;
  }
};

export default Icon;
