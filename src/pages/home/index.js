import React, { useState } from 'react'
import {Container, Typography, Grid, Card, TextField, Button} from '@material-ui/core'
import { MovieIcon } from '../../icons'

import Styles from './style'

export default ({history}) => {
    const [searchText, setSearchText] = useState("");

    const classes = Styles();

    const handleSerchTextChange = e => {
        setSearchText(e.target.value);
    }

    const handleClickClean = e => {
        setSearchText("")
    }

    const handleClickSearchText = e => {
        history.push(`/results?movieName=${searchText}`)
    }

    return <Container className={classes.container}>
        <Card className={classes.cardContainer}>
            <Grid container className={classes.titleGridContainer}>
                <Grid>
                    <Typography className={classes.title}>
                        Bienvenido!
                    </Typography>
                </Grid>
                <Grid>
                    <MovieIcon className={classes.movieIcon} />
                </Grid>
            </Grid>
            <TextField 
                className={classes.textFieldSearch}
                value={searchText}
                placeholder="buscar..."
                onChange={handleSerchTextChange}
            />
            <Grid className={classes.buttonContainer}>
                <Button variant="contained" onClick={handleClickClean}>Limpiar</Button>
                <Button  className={classes.searchButton} variant="contained" onClick={handleClickSearchText} color="primary" size="large">Buscar</Button>
            </Grid>
        </Card>
        
    </Container>
}