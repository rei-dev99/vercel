import React from 'react';
import { Avatar as MUIAvatar } from '@mui/material';

interface AvatarProps {
  alt: string;
  src: string;
  width: number;
  height: number;
  boxShadow: number;
}

const Avatar: React.FC<AvatarProps> = ({ alt, src, width, height, boxShadow }) => {
  return (
    <MUIAvatar
      alt={alt}
      src={src}
      sx={{ width, height, boxShadow }}
    />
  );
};

export default Avatar;