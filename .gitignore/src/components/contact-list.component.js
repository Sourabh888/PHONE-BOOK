import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.contact_name}</td>
        <td>{props.todo.contact_number}</td>
        <td>{props.todo.contact_email}</td>
        <td>{props.todo.contact_Dob}</td>
        <td>{props.todo.contact_priority}</td>
        <td>{props.todo.contact_completed}</td>
        

        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>CONTACT LIST</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>NUMBER</th>
                            <th>EMAIL</th>
                            <th>DOB</th>
                            <th>PRIORITY</th>
                            <th>EDITED</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}