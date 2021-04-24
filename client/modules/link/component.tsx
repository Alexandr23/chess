import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './style.scss';

interface PropsInterface {
  to: string;
  className?: string;
  children?: React.ReactNode;
}

export const Link = ({ to, className, children }: PropsInterface) => (
  <RouterLink className={['link', className].join(' ')} to={to}>
    {children}
  </RouterLink>
);
