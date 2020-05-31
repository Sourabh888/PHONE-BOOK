import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeContactDescription = this.onChangeContactDescription.bind(this);
        this.onChangeContactResponsible = this.onChangeContactResponsible.bind(this);
        this.onChangeContactEmail=this.onChangeContactEmail.bind(this);
        this.onChangeContactDob=this.onChangeContactDob.bind(this);
        this.onChangeContactPriority = this.onChangeContactPriority.bind(this);
        this.onChangeContactCompleted=this.onChangeContactCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contact_name: '',
            contact_number: '',
            contact_email:'',
            contact_Dob:'',
            contact_priority: '',
            contact_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    contact_name: response.data.contact_name,
                    contact_number: response.data.contact_number,
                    contact_email: response.data.contact_email,
                    contact_Dob:response.data.contact_Dob,
                    contact_priority:response.data.contact_priority,
                    contact_completed: response.data.contact_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeContactDescription(e) {
        this.setState({
            contact_name: e.target.value
        });
    }

    onChangeContactResponsible(e) {
        this.setState({
            contact_number: e.target.value
        });
    }

    onChangeContactEmail(e) {
        this.setState({
            contact_email: e.target.value
        });
    }

    onChangeContactDob(e) {
        this.setState({
            contact_Dob: e.target.value
        });
    }
    onChangeContactPriority(e) {
        this.setState({
            contact_priority: e.target.value
        });
    }

    onChangeContactCompleted(e) {
        this.setState({
            contact_completed: !this.state.contact_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            contact_name: this.state.contact_name,
            contact_number: this.state.contact_number,
            contact_email: this.state.contact_email,
            contact_Dob:this.state.contact_Dob,
            contact_priority:this.state.contact_priority,
            contact_completed: this.state.contact_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>NAME: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.contact_name}
                                onChange={this.onChangeContactDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>NUMBER: </label>
                        <input 
                                type="number" 
                                className="form-control"
                                value={this.state.contact_number}
                                onChange={this.onChangeContactResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <label>EMAIL: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.contact_email}
                                onChange={this.onChangeContactEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>DOB: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.contact_Dob}
                                onChange={this.onChangeContactDob}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.contact_priority==='Low'} 
                                    onChange={this.onChangeContactPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.contact_priority==='Medium'} 
                                    onChange={this.onChangeContactPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.contact_priority==='High'} 
                                    onChange={this.onChangeContactPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeContactCompleted}
                                checked={this.state.contact_completed}
                                value={this.state.contact_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            EDITED
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="UPDATE CONTACT" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}