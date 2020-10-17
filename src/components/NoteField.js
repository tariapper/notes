import React, { Component } from 'react'
import Fragment from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Draggable from 'react-draggable'
import Button from '@material-ui/core/Button'

export class NoteField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    
    changed = (event) => {
        this.setState({
            text: event.target.value,
        });
    }

    submit = () => {
        this.props.action(this.state.text);
        this.setState({
            text: '',
        })
    }


    render() {
        return (
            // <Grid item>
            //     <Grid item style={{ paddingTop: '50px' }}>
            <Draggable
                handle='#handle'
                //bounds={{ top: -300, left: -700, right: 700, bottom: 300 }}
                bounds="body"
                
            >
                <Paper
                    style={{
                        padding: '2px',
                        width: '400px',
                        height: '400px',
                       // margin: '0 auto',
                    }}
                    elevation={10}
                >
                    <div id='handle' style={{
                        backgroundColor: 'green',
                        height: '20px'
                    }}></div>
                    <TextField
                        // style={{ paddingLeft: "10px" }}
                        value={this.state.text}
                        multiline
                        fullWidth
                        rows={19}
                        InputProps={{ disableUnderline: true }}
                        placeholder="type something..."
                        onChange={this.changed}
                    //style={{ padding: '10px' }}
                    />
                    <Button onClick={this.submit}>Add Note</Button>
                </Paper>
            </Draggable>
            //     </Grid>
            // </Grid>
        )
    }
}



export default NoteField
