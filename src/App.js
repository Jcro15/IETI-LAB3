import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {TodoApp} from './components/TodoApp';
import {BrowserRouter as Router, Link, Route,Switch,withRouter} from 'react-router-dom'

import logo from './components/logo.svg';
import Login from './components/Login'
import DrawerLeft from './components/DrawerLeft'




const LoginView = () => (
    localStorage.getItem("isLoggedIn")==="true"?<DrawerLeft main={<TodoApp/>}/>:<Login/>
);

const TodoAppView = () => (
    localStorage.getItem("isLoggedIn")==="true"?<TodoApp/>:<Login/>
);


export class App extends Component {
    constructor(props) {
        super(props);
        localStorage.setItem("user","password")
        localStorage.setItem("email","sancarbar@gmail")
        localStorage.setItem("name","Santiago Carrillo")
    }
    
  

    

    render() {
        if(localStorage.getItem("isLoggedIn")===undefined){
            localStorage.setItem("isLoggedIn",false)
        }
        return (
            <Router>
            <div className="App">

               
            
                    <Switch>
                    <Route exact path="/" component={LoginView}/>
                    <Route path="/todo" component={TodoAppView}/>
                    </Switch>
                
            </div>
        </Router>
        );
        }

}