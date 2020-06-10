import React, {useEffect} from 'react';
import { Button, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import { movieResult } from '../../redux/selectors'
import { searchMovieById } from '../../redux/actions/search'
import { CircularProgress } from '@material-ui/core'
import Styles from './styles'

export default ({ handleDialogOpen, dialogMode, movieId}) => {

  const classes = Styles();

  const dispatch = useDispatch();

  useEffect(() => {

          dispatch(searchMovieById({ movieId }));
   
  }, []);

  const movieResults = useSelector(state => movieResult(state));
  console.log(movieId);

    if(movieResults){

      const urlImg = `https://image.tmdb.org/t/p/w500/${movieResults.poster_path}`;

      return (
          <div>
            <Dialog 
              className={classes.dialog}
              open={dialogMode}
              onClose={handleDialogOpen}
            >
              <DialogTitle>{movieResults.title}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <Grid container className={classes.titleGridContainer}>
                    <Grid item xs={6}>
                      <img className={classes.img} src={urlImg} alt={movieResults.title}/>
                    </Grid>
                    <Grid item xs={6}>
                      <strong>Reseña: </strong>{movieResults.overview}
                    </Grid> 
                  </Grid> 
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogOpen} color="primary" autoFocus>
                  Cerrar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        )
    }else{
      return <CircularProgress color="primary" size={100}/>
    }
    
}