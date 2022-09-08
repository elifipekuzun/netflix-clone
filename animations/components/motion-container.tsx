import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import Box, { BoxProps } from '@mui/material/Box';
import { varWrapBoth } from '../wrap';

interface MotionContainerProps extends BoxProps {
  initial?: boolean | string;
  open?: boolean;
}

export const MotionContainer: React.FC<
  PropsWithChildren<MotionContainerProps>
> = ({ children, open, initial }) => {
  return (
    <Box
      initial={initial}
      variants={varWrapBoth}
      component={motion.div}
      animate={open ? 'animate' : 'exit'}
    >
      {children}
    </Box>
  );
};
