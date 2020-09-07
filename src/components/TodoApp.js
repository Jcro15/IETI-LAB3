import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import AddIcon from '@material-ui/icons/Add';
import { withStyles} from '@material-ui/core/styles';
import { Fab, Modal } from '@material-ui/core';
import {NewTask} from './NewTask'
import { Redirect } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ModalFilter  from './ModalFilter';
import DialogContent from '@material-ui/core/DialogContent';





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
        this.state = {redirect:false, open:false,dateFilter:"",responsibleFilter:"",statusFilter:""};
        this.handleRedirect=this.handleRedirect.bind(this);
        this.handleModal=this.handleModal.bind(this);
        this.handleFilters=this.handleFilters.bind(this);
        
    }


    render() {
        const { classes } = this.props;
        if(this.state.redirect){
            return<Redirect to={'/newtask'} />
        }
        let items=this.filterList(this.props.items)
        return (
            <div className="App">
                <br/>
                <br/>
                <TodoList todoList={items}/>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleRedirect}>
                <AddIcon />
                </Fab> 
                <Fab color="primary" aria-label="Apply filters" className={classes.fab2} onClick={this.handleModal}>
                <SearchIcon />
                </Fab> 
                <Modal open={this.state.open}
                onClose={this.handleModal}
                >
                <DialogContent>
                <ModalFilter handleFilters={this.handleFilters}
                                 date={this.state.dateFilter}
                                 responsible={this.state.responsibleFilter}
                                  status={this.state.statusFilter}/>
                </DialogContent>
                </Modal>

            </div>
        );
    }

    
    handleRedirect() {
        this.setState({
            redirect: true
      });
    }
    handleModal(){
        this.setState(prevstate=>({
            open: !prevstate.open
        }))
    }
    handleFilters(date,responsible,status){
        this.setState({
            dateFilter:date,
            responsibleFilter:responsible,
            statusFilter:status,
            open:false
        });
    }
    filterList(list){
        let filteredList=list;
        if(this.state.statusFilter!=""){
            filteredList=filteredList.filter(todo=>
                todo.state===this.state.statusFilter
            )
        }
        if(this.state.responsibleFilter!=""){
            filteredList=filteredList.filter(todo=>
                todo.responsible.name===this.state.responsibleFilter)
        }
        if(this.state.dateFilter!=""){
            filteredList=filteredList.filter(todo=>
                todo.dueDate.format('YYYY-MM-DD')===this.state.dateFilter.format('YYYY-MM-DD'))
        }
        return filteredList
    }
    
    

}
export default withStyles(useStyles, { withTheme: true })(TodoApp);


