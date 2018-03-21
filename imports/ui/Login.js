import React ,{ Component } from 'react';
import Input from './Input.js';

export default class Login extends Component{
    constructor(props)
    {
        super(props);
        this.state= {showerr :"hidden",error : "Invalid Credentials"};

    }
    handleLogin(e)
    {
        event.preventDefault();
        const th = this;  
        const email = th.email.state;
        const pass = th.pass.state;
        if(email.valid&&pass.valid) {
            Meteor.call('login',email.value,pass.value,function(error,resp){
                console.log(resp);
                if(error)
                    th.setState({showerr : "text"});
                else
                    /* th.props.history.push('/todo');*/console.log(resp);
            });
        }
        else
            th.setState({showerr : "text"});
    }
    render()
    {
        const {showerr} = this.state;
        const {error} = this.state;
        return (
            <div className="form">
                <h1 className="user__header">Login</h1>
                <Input type = "email" name = "email" placeholder = "Email" ref={(input) => this.email= input }/>
                <Input type = "password" name = "pass" placeholder = "Password" ref={(input) => this.pass= input }/>
                <div className = "row">
                    <div className="col-md-8">
                        <button type = "button" className="btn" onClick={this.handleLogin.bind (this)}>Login</button>
                        <input type = {showerr} className = "form-control" value = {error} disabled/>
                    </div>
                </div>
            </div>    
        )
    }
}