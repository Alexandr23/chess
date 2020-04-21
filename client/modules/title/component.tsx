import * as React from 'react';

import './style.scss';

export enum TitleTypeEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
}

interface PropsInterface {
  className?: string;
  children?: React.ReactNode;
  type?: TitleTypeEnum;
}

export const Title = ({
  className,
  children,
  type = TitleTypeEnum.h1,
}: PropsInterface) => {
  const Component = type;

  return (
    <Component
      className={[
        'title',
        `title_${type}`,
        className,
      ].join(' ')}
    >
      {children}
    </Component>
  );
};
