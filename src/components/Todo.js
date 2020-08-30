import React from 'react';
import { ListItem, Card ,Typography,CardContent} from '@material-ui/core';


export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem alignItems="flex-start" >
                <Card style={{ minWidth: 275}}>
                    <CardContent>
                         <Typography variant="h5" component="h2">
                         {this.props.text}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {this.props.state + " - "+ this.props.dueDate.format('DD-MM-YYYY')}
                        </Typography>
                        <Typography variant="h5" component="h2">
                         {this.props.responsibleName}
                        </Typography>

   
                    </CardContent>
                </Card>
            </ListItem>
       
        );
    }

}