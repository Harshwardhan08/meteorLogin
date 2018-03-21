import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import bcrypt from 'bcrypt';
import SimpleSchema from 'simpl-schema';

export const Users = new Mongo.Collection('users');
const Future = Npm.require('fibers/future');
const Schemas = {};
Schemas.User = new SimpleSchema(
    {   name: { type: String,
            required :true},
        email: { type: String,
            unique: true,
            required :true},
        pass: { type: String,
            required :true}}
);
  
Users.attachSchema(Schemas.User);

Meteor.methods({
    'addUser'(name,email,pass) {
        console.log('------23-------', email, name, pass);
        const future =  new Future();
        bcrypt.hash(pass, 10)
        .then(function(res){
            Users.insert({
                name,
                email,
                pass : res},
                function(error,resp)
                { 
                    if(error) {
                        console.log("error213145");
                        future.throw(error);
                        
                    }
                        
                    else{
                        console.log("no---------error");
                        future.return(true);
                    }
                         
                }
            );
        });
    return future.wait();    
    },
    'login'(email,pass) {
        if(Users.find({email : email}).fetch) {
            let p = Users.findOne({email : email}).pass;
            if(bcrypt.compareSync(pass,p))
                return p;
            else
                return error;
        }
        else
            return error;        
    }
    
});