import React, { useMemo } from 'react';
import { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export const CustomFormHelperText: React.FC<{
  message: string;
  id: string;
  className: string;
}> = ({ message, id, className }) => {
  const { focused } = useFormControl() || {};
  const helperText = useMemo(() => {
    if (focused) {
      return message;
    }
    return '';
  }, [focused]);

  return (
    <div className={className}>
      <FormHelperText id={id}>{helperText}</FormHelperText>
    </div>
  );
};
