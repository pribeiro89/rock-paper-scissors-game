import React, { useEffect, useState } from 'react';
import './ChoiceBtn.scss';

const ChoiceBtn = ({ type }) => {
  const [iconSrc, setIconSrc] = useState('');
  const loadIcon = async () => {
    const { default: src } = await import(/* webpackMode: "lazy" */ `../assets/icon-${type}.svg`);
    setIconSrc(src);
  }

  useEffect(() => {
    loadIcon();
  })

  return (
    <button class={`choice-btn choice-btn--${type}`}>
      <img src={iconSrc} alt={`icon-${type}`} className={`icon-${type}`} />
    </button>
  )
}

export default ChoiceBtn
