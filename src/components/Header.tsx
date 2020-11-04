import React from 'react'
import { Grid } from '@material-ui/core';

const Header = () => {
    return (
        <div>
            <Grid item xs = {12}> 
            <h1> Expense Tracker - A PWA </h1>
            </Grid>
        </div>
    )
}

export default Header
