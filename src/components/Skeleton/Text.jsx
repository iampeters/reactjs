import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( {
  root: {
    width: '100%',
  },
} );

export default function Animations() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton style={{ height: '30px' }}/>
      <Skeleton animation={false} style={{ height: '40px' }} />
      <Skeleton animation="wave" style={{height: '100px'}} />
      <Skeleton animation="wave" style={{height: '400px'}} />
    </div>
  );
}
