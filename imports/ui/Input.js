import React, { Component } from 'react';

export default class Input extends Component{
    constructor(props)
    {
        super(props);
        var pass='',conpass='';
        this.state = {value : props.value, valid : false, error : "Invalid Entry", showerr : "hidden"};
    }
    handleChange(event){
        let valid = false;
        let value,error = "Invalid Entry",showerr = "hidden";
        const { refs } = this;
        const { name, type } = this.props;
  
        if(type == 'email') {
            value = refs[name].value;
            valid = this.validateEmail(value);
            if(!valid)
            {
                error = "Invalid Email";
                showerr = "text";
            }

        }
        else if(type == 'name') {
            value = refs[name].value;
            valid = this.validateName(value);
            if(!valid)
            {
                error = "Invalid Name";
                showerr = "text";
            }
        }
        else if(name=='conpass')
        {
            conpass = refs[name].value;
            if(pass != conpass)
            {
                error = "Passwords don't match";
                showerr = "text";   
            }
            
        }
        else if(type == 'password'){
            pass = refs[name].value;
            value = pass;
            valid = this.validatePass(value);
            if(!valid)
            {
                error = "Minimum password length 4";
                showerr = "text";
            }
            else
            if(pass != conpass)
            {
                error = "Passwords don't match";
                showerr = "text";
            }
        }
        else if( !type || type == 'text' ) {
            value = refs[name].value;
            valid = true;
            error = "";
            showerr = "hidden";
        }
        
        this.setState({
            value,
            valid,
            error,
            showerr          
        });
    }
    
    validatePass = (email) =>{
        let match = /^[\w]{4,}$/;
        return match.test(email);
    }
    validateEmail = (email) =>{
        let match = /^[\w]+[@][a-zA-Z]+[.][a-zA-Z]{2,4}$/;
        return match.test(email);
    }
    validateName = (name) =>{
        let match = /^[A-Za-z][a-zA-Z. ]*$/;
        return match.test(name);
    }
    // focus()
    // {
    //     this.refs[this.props.name].focus();
    //     this.handleChange();
    //     return;
    // }

    render()
    {
        const {props,state} = this;
        const {name,placeholder} = props;
        let {type} = props;
        const {value,error,showerr} = state;
        const isAllowedTypes = ['name', 'email', 'password'];
        const isValidType = (isAllowedTypes.indexOf(type) > -1);
        type = isValidType ? type : 'text';
        return(
            <div className="row">
                <div className="col-md-8">
                    <input type = {type} name = {name} className = "form__input" ref = {name} id = {name} 
                    placeholder = {placeholder} defaultValue = {value} onChange = {this.handleChange.bind(this)} onBlur = {this.handleChange.bind(this)}/>
                </div>
                <div className="col-md-4">
                    <input type = {showerr} className = "form-control" value = {error} disabled/>
                </div>
            </div>
             
        );
    }
}