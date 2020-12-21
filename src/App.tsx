import React, {useState} from 'react';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {CryptoTable, ConverterBlock} from "./components";
import useStyles from "./styles";


// let headers = new Headers();
// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')

function createData(name: string, calories: number, fat: number, carbs:number, protein:number) {
    return { name, calories, fat, carbs, protein };
}


function App() {
    const classes: any = useStyles();


    return (
        <Container className={classes.root} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <CryptoTable classes={classes} />
                </Grid>
                <Grid item xs={4}>
                    <ConverterBlock classes={classes} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
