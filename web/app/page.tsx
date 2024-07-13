"use client";

import React from 'react';

import ProfileSection from './components/organisms/ProfileSection';
import BackgroundImage from './components/atoms/BackgroundImage';

const HomePage: React.FC = () => {
  return (
    <>
      <ProfileSection />
      <BackgroundImage src="https://picsum.photos/2000" />
    </>
  );
};

export default HomePage;