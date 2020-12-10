import React, { useEffect, useState } from 'react';
import './ChoiceBtn.scss';

const ChoiceBtn = ({ type, onClick }) => {
  const [iconSrc, setIconSrc] = useState('');
  const loadIcon = async () => {
    const { default: src } = await import(/* webpackMode: "lazy" */ `../assets/icon-${type}.svg`);
    setIconSrc(src);
  }

  useEffect(() => {
    loadIcon();
  })

  return (
    <button className={`choice-btn choice-btn--${type}`} onClick={onClick}>
      <img src={iconSrc} alt={`icon-${type}`} className={`icon-${type}`} />
    </button>
  )
}

export default ChoiceBtn
