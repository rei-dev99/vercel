"use client";

import { AppBar, Toolbar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Typography from '../atoms/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GetRandomColor from '../utility/getRandomColor';

const Header: React.FC = () => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    setColor(GetRandomColor());
  }, []);

  return (
    <AppBar position="static" style={{ backgroundColor: color }}>
      <Toolbar>
        <Typography flex={1}>Profile</Typography>
        <StarBorderIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;