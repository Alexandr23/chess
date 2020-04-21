import * as React from 'react';

import './style.scss';

interface PropsInterface {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  htmlType?: 'text' | 'password';
}

export const Input = ({
  id,
  name,
  className,
  placeholder,
  value,
  onChange,
  htmlType,
}: PropsInterface) => (
    <input
      className={[
        'input',
        className,
      ].join(' ')}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={htmlType || 'text'}
    />
  );
