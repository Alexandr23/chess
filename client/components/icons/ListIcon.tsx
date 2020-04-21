import * as React from 'react';

interface IProps {
  className: string;
}

export const ListIcon = ({ className }: IProps) => (
  <svg viewBox="0 0 512 512" className={className}>
    <path d="M492,236H144.262c-11.046,0-20,8.954-20,20s8.954,20,20,20H492c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z" />
    <path d="M492,86H144.262c-11.046,0-20,8.954-20,20s8.954,20,20,20H492c11.046,0,20-8.954,20-20S503.046,86,492,86z" />
    <path d="M492,386H144.262c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H492c11.046,0,20-8.954,20-20 C512,394.954,503.046,386,492,386z" />
    <circle cx="27" cy="106" r="27" />
    <circle cx="27" cy="256" r="27" />
    <circle cx="27" cy="406" r="27" />
  </svg>
);
