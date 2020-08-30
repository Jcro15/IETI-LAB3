import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { InputLabel,Button, TextField } from '@material-ui/core';



export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', state:'', dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


    render() {

        return (
            <div className="App">

               
                <br/>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <InputLabel htmlFor="text" className="right-margin">
                        Text:
                    </InputLabel>

                    <TextField
                        id="text"
                        onChange={this.handleTextChange}
                        value={this.state.text}>
                    </TextField>

                    <br/>
                    <br/>
                    <InputLabel htmlFor="state" className="right-margin">
                        State:
                    </InputLabel>

                    <TextField
                        id="state"
                        onChange={this.handleStateChange}
                        value={this.state.state}>
                    </TextField>
                    <br/>
                    <br/>
                    <TextField
                        id="due-date"
                        label= "Due-Date"
                        type="date"
                        onChange={this.handleDateChange}
                        defaultValue={this.state.dueDate.format('YYYY-MM-DD')}
                        
                    
                    />

                
                
                    <br/>
                    <Button type="submit"
                                variant="contained"
                                color="primary"
                                className="submit">
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleStateChange(e) {
        this.setState({
            state: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            dueDate: moment(e.target.value,'YYYY-MM-DD')
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.state.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            state: this.state.state,
            dueDate: this.state.dueDate,
            responsible: {name: localStorage.getItem("name"), email:localStorage.getItem("email")}

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            state: '',
            dueDate: moment()
        }));
    }

}

