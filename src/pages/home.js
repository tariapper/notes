import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { Component } from 'react'
import '../App.css'
// import NoteField from '../components/NoteField'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Draggable from 'react-draggable'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Welcome from '../components/Welcome'
import NoteField from '../components/NoteField'

class home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            notes: [],
        }
    }

    handleClear = (event) => {
        console.log(event);
        this.setState({
            text: '',
        })
    }

    handleNew = (event) => {
        //document.getElementById("test").innerHTML += '<br>yo';
        //note = 
        //this.setState(prevState=> ({notes: prevState.notes.concat([note])}))

        this.setState({
            notes: this.state.notes.concat(this.state.text),
            text: '',
        })
        console.log(this.state)
    }

    change = (event) => {
        this.setState({
            text: event.target.value,
        })
    }

    seeNotes = () => {

    }

    addNewNote = (text) => {
        this.setState({
            notes: this.state.notes.concat({
                text: text,
                date: new Date()
            })
        })
        console.log(this.state.notes);
        document.getElementById("display").innerHTML += '<br>'+ text;
    }


    render() {

        return (
            <div>
                <NoteField action={this.addNewNote} />
                <Grid container
                    style={{ paddingTop: '50px', textAlign: 'center', }}
                    justify='center'
                    direction='column'
                >
                    <Welcome />

                    <Grid item style={{ paddingTop: '50px' }}>
                        <ButtonGroup
                            color="primary"
                            aria-label="outlined primary button group"
                            style={{ paddingTop: '50px' }}
                        >
                            <Button onClick={this.handleClear}>Clear</Button>
                            <Button onClick={this.handleNew}>New note</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <div id= "display">
                   
                </div>
                

            </div>
        );
    }
}

export default home;
