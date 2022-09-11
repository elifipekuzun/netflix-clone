import React, { PropsWithChildren } from 'react';
import Button from '@mui/material/Button';

export const PlayButton: React.FC<
  PropsWithChildren<{
    title: string;
    bgColor: string;
    className?: string;
    onClick: () => void;
  }>
> = ({ children, title, bgColor, className, onClick }) => {
  return (
    <div className={className}>
      <Button
        onClick={onClick}
        variant={'contained'}
        sx={{
          ':hover': { opacity: '0.9', background: bgColor },
          display: 'flex',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          bgcolor: bgColor,
          alignItems: 'center',
          color: '#141414',
          my: 1,
        }}
      >
        {children}
        {title}
      </Button>
    </div>
  );
};
