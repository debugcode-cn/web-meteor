import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import '../app/message';

import './main.html';

import {
	Messages,
	ChatMessage,
	CachedChatRoom,
	ChatRoom,
	Rooms,
} from '../app/models';

console.log('插入前浏览器缓存《〈《〈');
let result1 = ChatMessage.find({}).count();
console.log('result1', result1);
console.log('插入前浏览器缓存》〉》〉》');

console.log('插入浏览器缓存《〈《〈');
let result = ChatMessage.insert({
	_id: String(Date.now()),
	msg: 'client created',
});
console.log('result', result);
console.log('插入浏览器缓存》〉。》。〉');

Template.hello.onCreated(function helloOnCreated() {
	// counter starts at 0
	this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
	counter() {
		return Template.instance().counter.get();
	},
});

Template.hello.events({
	'click button'(event, instance) {
		Session.set('session_one', 'one_time_'+Date.now());
		// increment the counter when button is clicked
		instance.counter.set(instance.counter.get() + 1);
	},
});

Template.messages.helpers({
	messages() {
		return Messages.find({});
	},
});

Tracker.autorun(() => {
	let session_one = Session.get('session_one');
	console.log('session_one', session_one);
})