import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, CircularProgress } from '@material-ui/core'
import queryString from 'query-string'
import { searchMovie } from '../../redux/actions/search'
import { movieResults, isSearchLoading, movieResult as movieResultSelector } from '../../redux/selectors'
import MovieResults from '../../components/MovieResults'
import Dialog from "../../components/dialogDetails"


export default ({location}) => {

    const [dialogMode, setDialogMode] = useState(false);
    const [movieId, setMovieId] = useState(null);

    const handleDialogOpen = id => {
        setMovieId(id);
        setDialogMode(!dialogMode);
    }

    console.log(dialogMode);
    const dispatch = useDispatch();

    useEffect(() => {

        const { movieName } = queryString.parse(location.search);
        dispatch(searchMovie({movieName}));
        
    }, []);

    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));
    const movieResult = useSelector(state => movieResultSelector(state));

    const renderMovies = () => {
        if(movies && !dialogMode){
            return(movies.map((movie) => 
                <MovieResults 
                    key={movie.id} 
                    {...movie} 
                    handleDialogOpen={handleDialogOpen}
                    dialogMode={dialogMode}
                />      
            ))
        
        }else if(movies && dialogMode){
            return(
                <Dialog 
                    key={movieId}
                    handleDialogOpen={handleDialogOpen}
                    dialogMode={dialogMode}
                    movieId={movieId}
                />
                )
        }else if(isLoading){
            return <CircularProgress color="primary" size={100}/>
        }else {
            return <div/>
        }

    }

    return(
        <Fragment>
            <Container>
                {renderMovies()}
            </Container>
           
        </Fragment>
        
    )
}