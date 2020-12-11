import React, { useEffect, useState } from 'react';
import './Choice.scss';

const Choice = ({ type, isInteractive, onClick }) => {
  const [iconSrc, setIconSrc] = useState('');
  const loadIcon = async () => {
    const { default: src } = await import(/* webpackMode: "lazy" */ `../assets/icon-${type}.svg`);
    setIconSrc(src);
  }

  useEffect(() => {
    loadIcon();
  })

  const ChoiceTag = isInteractive ? 'button' : 'div';

  return (
    <ChoiceTag
      className={`choice choice--${ChoiceTag} choice--${type}`}
      onClick={isInteractive ? onClick : undefined}
    >
      <img src={iconSrc} alt={`icon-${type}`} className={`icon icon-${type}`} />
    </ChoiceTag>
  )
}

export default Choice;
