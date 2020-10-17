import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export class Welcome extends Component {
    render() {
        return (
            <Grid item>
                <Grid item
                style={{ padding: '0px' }}
            >
                <Typography
                    style={{
                        fontSize: '50px',
                        fontFamily: 'Arial',
                    }}
                >
                    Welcome to Notes.
                </Typography>
                </Grid>
                <Grid item
                    style={{ paddingTop: '0px' }}
                >
                    <Typography
                        style={{
                            fontSize: '30px',
                            fontFamily: 'Arial',
                        }}
                    >
                        whats up dud
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}
export default Welcome
