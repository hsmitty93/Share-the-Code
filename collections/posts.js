Posts = new Meteor.Collection('posts');
Categories = new Mongo.Collection('categories');

Posts.allow({
	insert: function(userId, doc) {
		//only allow posting of you are logged in 
		return !! userId;
	}
});