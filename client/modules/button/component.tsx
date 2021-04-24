import * as React from 'react';

import './style.scss';

interface PropsInterface {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  htmlType?: 'submit' | 'button' | 'reset';
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isSecondary?: boolean;
}

export const Button = ({
  id,
  className,
  children,
  onClick,
  htmlType,
  isFullWidth,
  isDisabled,
  isSecondary,
}: PropsInterface) => (
  <button
    className={[
      'button',
      isFullWidth ? 'button_full-width' : '',
      isDisabled ? 'button_disabled' : '',
      isSecondary ? 'button_secondary' : '',
      className,
    ].join(' ')}
    id={id}
    onClick={onClick}
    type={htmlType}
    disabled={isDisabled}
  >
    {children}
  </button>
);
