import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'








 class Login extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    render(){


        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" onChange={this.handleChange} autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
    handleSubmit(e){
        e.preventDefault();

        


        if(localStorage.getItem(this.state.email)===this.state.password){
            localStorage.setItem('isLoggedIn',true);
            window.location.href = "/";        
        }
        else {
            alert('Invalid Credentials')
        }
        
    }

    handleChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
      }

}
export default Login;