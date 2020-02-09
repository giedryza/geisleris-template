import React, { useState } from 'react';
import Icon, { IconCode } from '../icon/icon.component';

const Slider = () => {
  const [slide, setSlide] = useState(1);
  const totalSlides = 5;

  const onIncrement = () => {
    const nextSlide = slide >= totalSlides ? 1 : slide + 1;
    setSlide(nextSlide);
  };

  const onDecrement = () => {
    const prevSlide = slide <= 1 ? totalSlides : slide - 1;
    setSlide(prevSlide);
  };

  return (
    <div className="slider">
      <div className="slider__left">
        <div className="slider__counter">
          {slide} / {totalSlides}
        </div>
        <div
          className="slider__line"
          style={{ transform: `translateX(${(slide - 1) * 100}%)` }}
        />
      </div>
      <div className="slider__right">
        <button className="slider__chevron" onClick={onDecrement} type="button">
          <Icon icon={IconCode.CHEVRON_LEFT} />
        </button>
        <button className="slider__chevron" onClick={onIncrement} type="button">
          <Icon icon={IconCode.CHEVRON_RIGHT} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
