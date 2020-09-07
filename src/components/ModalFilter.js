import React from 'react';
import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';
import './App.css';
import { withStyles} from '@material-ui/core/styles';
import moment from "moment";





  const useStyles =theme => ({
    paper: {
        margin:'auto',
        position:'fixed',
        top:0,
        bottom:0,
        left:0,
        right:0,
        width: 300,
        height: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }
    
})


 class ModalFilter extends React.Component{

    constructor(props){
        super(props)
        this.state={date:props.date,responsible:props.responsible,status:props.status }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);


    }

    render() { 
        const { classes } = this.props;
        return (      
            
            <div className={classes.paper}>
                <form  onSubmit={this.handleSubmit}>
                <h3>TASK FILTERS</h3>

                <TextField
                    id="responsible"
                    label="Responsible"
                    name="responsible"
                    onChange={this.handleChange}
                    value={this.state.responsible}>
                </TextField>
                <br/>
                <FormControl>
                <InputLabel htmlFor="label-state">
                    Status:
                </InputLabel>

                <Select
                    native
                    value={this.state.status}
                    name="status"
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'status',
                        id: 'label-state',
                    }}
                    >
                    <option aria-label="None" value="" />    
                    <option value={"Activo"}>Activo</option>
                    <option value={"Pendiente"}>Pendiente</option>
                    <option value={"Terminado"}>Terminado</option>
                </Select>


                </FormControl>
                <br/>
                <br/>

                <InputLabel htmlFor="due-date">
                    Due-date:
                </InputLabel>
                <TextField
                    id="due-date"
                    type="date"
                    onChange={this.handleDateChange}
                    defaultValue={this.state.date!=""?this.state.date.format('YYYY-MM-DD'):""}
                />
                <br/>
                <br/>


                <Button type="submit"
                            variant="contained"
                            color="primary"
                            className="submit">
                    Add 
                </Button>
                <br/>
                <br/>
                <Button variant="contained"
                            color="primary"
                            className="submit"
                            onClick={()=>{this.props.handleFilters("","","")}}>
                                Clear All
                </Button>
            </form>
            </div>         
            
        )
    }
    handleChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
      }
      handleDateChange(e) {
        this.setState({
            date: moment(e.target.value,'YYYY-MM-DD')
        });
    }
    handleSubmit(e){
        this.props.handleFilters(this.state.date,this.state.responsible,this.state.status)
    }

}
export default withStyles(useStyles, { withTheme: true })(ModalFilter);
