import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

messageGlobal = new Mongo.Collection('message-global');

if (Meteor.isServer) {
	Meteor.publish('message-global', () => {
		return messageGlobal.find();
	});
} else {
	Meteor.subscribe('message-global');
}
