import React from 'react';
import { Typography as MUITypography, TypographyProps as MUITypographyProps } from '@mui/material';

const Typography: React.FC<MUITypographyProps> = (props) => {
  return <MUITypography {...props} />;
};

export default Typography;