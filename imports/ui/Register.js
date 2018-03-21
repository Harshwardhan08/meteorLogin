import React,{ Component } from 'react';
import Input from './Input.js';
import ReactDOM from 'react-dom';

export default class Register extends Component{
    constructor(props) {
        super(props);
        this.state= {showerr :"hidden",error : "Invalid Credentials"};

    }
    handleSubmit(e) {
        event.preventDefault();
        const th = this;
        const name = this.name.state;
        const email = this.email.state;
        const pass = this.pass.state;
        const conpass = this.conpass.state;
        
        if(name.valid&&email.valid&&pass.valid) {    
            Meteor.call('addUser', name.value,email.value,pass.value,function(err, res){
                if(err)
                    th.setState({showerr : "text"});
                else
                {
                    th.props.history.push('/login');
                }
            });
        }
        else
            this.setState({showerr : "text"});
      }
    render() {
        const {showerr} = this.state;
        const {error} = this.state;
        return (
            <div className="form">
                <h1 className="user__header">Register</h1>
                <Input type = "name" name = "name" placeholder = "Name" ref = {(input) => this.name= input } />
                <Input type = "email" name = "email" placeholder = "Email" ref = {(input) => this.email= input }/>
                <Input type = "password" name = "pass" placeholder = "Password" ref = {(input) => this.pass= input }/>
                <Input type = "password" name = "conpass" placeholder = "Confirm Password"  ref = {(input) => this.conpass = input }/>
                <div className = "row">
                    <div className="col-md-8">
                        <button type = "button" className="btn" onClick={this.handleSubmit.bind (this)}>Register</button>
                        <input type = {showerr} className = "form-control" value = {error} disabled/>
                    </div>
                </div>
            </div>    
        )
    }
}

