import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import AddIcon from '@material-ui/icons/Add';
import { withStyles} from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import {NewTask} from './NewTask'
import { Redirect } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';




const useStyles =theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      fab2: {
        position: 'fixed',
        bottom: theme.spacing(10),
        right: theme.spacing(2),
      }
})


 class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {redirect:false};
        this.handleRedirect=this.handleRedirect.bind(this);
        
    }


    render() {
        const { classes } = this.props;
        if(this.state.redirect){
            return<Redirect to={'/newtask'} />
        }
        return (
            <div className="App">
{                console.log(this.props.items)}                
                <br/>
                <br/>
                <TodoList todoList={this.props.items}/>
                <Fab color="primary" aria-label="add" className={classes.fab} onClick={this.handleRedirect}>
                <AddIcon />
                </Fab> 
                <Fab color="primary" aria-label="add" className={classes.fab2} onClick={this.handleRedirect}>
                <SearchIcon />
                </Fab> 

            </div>
        );
    }

    
    handleRedirect() {
        this.setState({
            redirect: true
      });
    }
    
    

}
export default withStyles(useStyles, { withTheme: true })(TodoApp);


