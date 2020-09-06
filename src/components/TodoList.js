import React from 'react';
import {Todo} from './Todo'
import List from '@material-ui/core/List';


export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} state={todo.state} dueDate={todo.dueDate} responsibleName={todo.responsible.name} responsibleEmail={todo.responsible.email}/>
            );
        });

        return (
            <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      ><List >
        {todoList}
    </List>


      </div>
            

        );


    }

}