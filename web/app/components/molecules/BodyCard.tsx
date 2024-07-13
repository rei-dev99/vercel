import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '../atoms/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    margin: 24,
  }
});

const BodyCard: React.FC = () => {
  const classes = useStyles();

  const goToExternalSite = (): void => {
    window.location.href = 'https://tacklemaster.net/';
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          name
        </Typography>
        <Typography variant="h5" component="h2">
          怡田　嶺哉
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          comment
        </Typography>
        <Typography variant="h5" component="h2">
          Runteq54期生<br />
          React覚えたいね〜
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Created application
        </Typography>
        <Typography variant="h5" component="h2">
          <button onClick={goToExternalSite}>タックルマスター</button>
        </Typography>
        <Typography variant="h5" component="h2">
          <a href="https://insect-log.onrender.com" target="_blank" rel="noopener noreferrer">
            インセクトログ
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BodyCard;