import React from 'react';
import Icon, { IconCode } from '../icon/icon.component';

const Cta = () => (
  <button className="cta" type="button">
    <span className="cta__icon">
      <Icon icon={IconCode.RIGHT} />
    </span>
    Hello video
  </button>
);

export default Cta;
