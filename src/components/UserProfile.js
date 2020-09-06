import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';import './App.css';
import Alert from '@material-ui/lab/Alert';



export class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'',email:'',password:'',passwordConfirm:'',redirect:false,error:''}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    render(){
        if(this.state.redirect){
            return<Redirect to={'/'} />
        } 
        return(
            <form onSubmit={this.handleSubmit} className="todo-form" >
                <h3>Update Profile</h3>
                <AccountCircleIcon style={{ fontSize: 90 }}color='primary' />
                {this.state.error.length>0?
                <Alert variant="outlined" severity="error">{this.state.error}</Alert>:
                <br/>}
                <TextField
                    id="name"
                    label="Name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}>
                </TextField>
                <br/>
                <TextField
                    id="email"
                    label="Email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}>
                </TextField>
                <br/>

                <TextField
                    id="password"
                    label="Password"
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    autoComplete="current-password">
                </TextField>
                <br/>
                <TextField
                    id="passwordConfirm"
                    label="Confirm Password"
                    name="passwordConfirm"
                    onChange={this.handleChange}
                    type="password"
                    autoComplete="current-password">
                </TextField>

                <br/>
                <br/>
                <Button type="submit"
                            variant="contained"
                            color="primary"
                            className="submit">
                    Save 
                </Button>
            </form>

            
        );
    }

    handleChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
      }
    handleSubmit(e){
        e.preventDefault();
        let success=false;
        if(this.state.email.length>0){
            let temp=localStorage.getItem(localStorage.getItem("email"));
            localStorage.removeItem(localStorage.getItem("email"))
            localStorage.setItem("email",this.state.email);
            localStorage.setItem(this.state.email,temp);
            success=true;
        }
        if(this.state.name.length>0){
            localStorage.setItem("name",this.state.name)
            success=true;
        }
        if(this.state.password.length>0 &&this.state.passwordConfirm.length>0){
            if(this.state.password===this.state.passwordConfirm){
                localStorage.setItem(localStorage.getItem("email"),this.state.password)
                success=true;
            }
        }
        if(success){
            this.setState({
                redirect:true
            })
        }
        else{
            this.setState({
                error:"Todos los campos están vacíos o las contraseñas no coinciden"
            })
        }

    }


}