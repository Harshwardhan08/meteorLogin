import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';
import { Users } from './users.js';
 
if (Meteor.isServer) {
    describe('Users', () => {
        describe('methods', () => {
        // const id = Random.id();
        let userId;
    
            beforeEach(() => {
                // Users.remove({});
                console.log("Users in db : "+Users.find().count());
            });
    
            it('can delete created user', () => {
                // userId = Users.insert({
                //     name: 'harshwardhan',
                //     email: 'harshwardhan0812@gmail.com',
                //     pass: 'harshpass'
                // });
                   const  name = 'harshwardhan',
                    email= 'harshwardhan0812@gmail.com',
                    pass= 'harshpass';
                const addUser = Meteor.server.method_handlers['addUser'];
        
                // Run the method with `this` set to the fake invocation
                console.log(name, email, pass);
                // addUser.apply({name, email, pass});

                Meteor.call('addUser', name, email, pass, function(err, res){
                    if(err){
                        th.setState({showerr : "text"});
                }
                assert.equal(Users.find().count(), 1);
                console.log("Users in db : "+Users.find().count());
                });
                // Verify that the method does what we expected

            });
        });
    });
}