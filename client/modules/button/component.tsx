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
}

export const Button = ({
  id,
  className,
  children,
  onClick,
  htmlType,
  isFullWidth,
  isDisabled,
}: PropsInterface) => (
    <button
      className={[
        'button',
        isFullWidth ? 'button_full-width' : '',
        isDisabled ? 'button_disabled' : '',
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
