import { Meteor } from 'meteor/meteor';
import { Messages, Rooms, } from '../app/models';

import '../app/message.js';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('<<<<<<<<<<')
  let result = Messages.find({}).fetch();
  console.log(result)
  console.log('>>>>>>>>>>')
});


Meteor.publish('my_publish_1', function(){
  
})