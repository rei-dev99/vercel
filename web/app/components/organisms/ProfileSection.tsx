import React from 'react';
import { Grid, Paper, styled } from '@mui/material';
import Avatar from '../atoms/Avatar';
import BodyCard from '../molecules/BodyCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: "50px",
  marginBottom: "50px",
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProfileSection: React.FC = () => {
  return (
    <Grid container direction="column" alignItems="center" marginTop="100px">
      <Grid item xs={8}>
        <Avatar
          alt="profile_image"
          src="https://picsum.photos/150"
          width={200}
          height={200}
          boxShadow={5}
        />
      </Grid>
      <Grid item xs={8}>
        <Item>
          <BodyCard />
        </Item>
      </Grid>
    </Grid>
  );
};

export default ProfileSection;