import React, { Fragment } from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core'
import styles from './styles'



const movieResult = ({title, release_date, vote_average, original_language, poster_path, id, handleDialogOpen, handleMovieData}) => {


    const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    const classes = styles();

    const handleSeeMoreClick = e => {   
        handleDialogOpen(id);
    }

    return(
        <Fragment>
            <Card className={classes.cardContainer}>
                <Grid container>
                    <Grid item>
                        <img src= {urlImg} alt={title} className={classes.poster}/>
                    </Grid>
                    <Grid item className={classes.titlesContainer}>
                        <Typography variant="h5">{title}</Typography>
                        <Typography>Date: {release_date}</Typography>
                        <Typography>Vote: {vote_average}</Typography>
                        <Typography>Original Language: {original_language}</Typography>
                        <Button 
                            onClick={handleSeeMoreClick} 
                            color="primary" 
                            variant="contained"
                            >
                                Ver más
                        </Button>
                    </Grid>
                </Grid>
            </Card>
            
         </Fragment>
        
    )
}

export default movieResult;