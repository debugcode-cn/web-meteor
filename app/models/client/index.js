import { Meteor } from 'meteor/meteor';
import _ from 'underscore';

import { Base } from './models/_Base';
import Avatars from './models/Avatars';
import { Roles } from './models/Roles';
import { Users as users } from './models/Users';
import { CachedChannelList } from './models/CachedChannelList';
import { CachedChatRoom } from './models/CachedChatRoom';
import { CachedChatSubscription } from './models/CachedChatSubscription';
import { CachedUserList } from './models/CachedUserList';
import { ChatRoom } from './models/ChatRoom';
import { ChatMessage } from './models/ChatMessage';
import { RoomRoles } from './models/RoomRoles';
import { UserAndRoom } from './models/UserAndRoom';
import { UserRoles } from './models/UserRoles';

const Users = _.extend({}, users, Meteor.users);
const Messages = _.extend({}, ChatMessage);
const Rooms = _.extend({}, ChatRoom);

export {
	Base,
	Avatars,
	Roles,
	Users,
	Messages,
	CachedChannelList,
	CachedChatRoom,
	CachedChatSubscription,
	CachedUserList,
	ChatRoom,
	RoomRoles,
	UserAndRoom,
	UserRoles,
	ChatMessage,
	Rooms,
};
