import React, { useState } from 'react';
import './Rules.scss';
import AdvancedRules from './../../assets/image-rules-bonus.svg';
import { ReactComponent as IconClose } from './../../assets/icon-close.svg';

const Rules = () => {
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  return (
    <>
      <button
        className="rules-btn"
        onClick={() => setIsRulesModalOpen(true)}
      >
        Rules
      </button>
      <div
        id="rules-modal-container"
        className={isRulesModalOpen ? 'rules-modal--active' : ''}
      >
        <div className="rules-modal-wrapper">
          <div className="rules-modal">
            <header className="rules-modal__header">
              <h2 className="rules-modal__title">Rules</h2>
              <button
                className="rules-modal__close"
                onClick={() => setIsRulesModalOpen(false)}
              >
                <IconClose />
              </button>
            </header>
            <div className="rules-modal__content">
              <img
                src={AdvancedRules}
                alt="advanced game rules"
                className="rules-img--advanced"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rules;
