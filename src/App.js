import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import TodoApp from './components/TodoApp';
import {BrowserRouter as Router, Link, Route,Switch,withRouter} from 'react-router-dom'

import logo from './components/logo.svg';
import Login from './components/Login'
import DrawerLeft from './components/DrawerLeft'
import {NewTask} from './components/NewTask'
import { UserProfile } from './components/UserProfile';






const items=[]


export class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        if(localStorage.getItem("email")===null){
            localStorage.setItem("email","sancarbar@gmail")
            localStorage.setItem("name","Santiago Carrillo")
            localStorage.setItem("sancarbar@gmail","password")
            localStorage.setItem("isLoggedIn",false)
        }
    }
    
  

    

    render() {
        return (
            <Router>
            <div className="App">
                    <Switch>
                    <Route exact path="/" component={()=>{
                        return localStorage.getItem("isLoggedIn")==="true"?<DrawerLeft main={<TodoApp items={items}/>}/>:<Login/>
                    }}/>


                    <Route path="/todo" component={()=>{
                        return localStorage.getItem("isLoggedIn")==="true"?<DrawerLeft main={<TodoApp items={items}/>}/>:<Login/>
                    }}/>


                    <Route path="/newtask" component={()=>{
                        return localStorage.getItem("isLoggedIn")==="true"?<DrawerLeft main={<NewTask handleSubmit={this.handleSubmit}/>}/>:<Login/>
                    }}/>

                    <Route path="/userprofile" component={()=>{
                        return localStorage.getItem("isLoggedIn")==="true"?<UserProfile />:<Login/>
                    }}/>
                    </Switch>
                
            </div>
        </Router>
        );
        }
        handleSubmit(item) {
            items.push(item);
        }       

}