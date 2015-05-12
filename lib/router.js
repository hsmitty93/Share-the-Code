Router.configure({
	layoutTemplate: 'layout',
	lodingTemplate: 'loading',
	waiton: function() { return Meteor.subscribe('posts');}
});

Router.map(function() {
	this.route('postsList', {path: '/'});
	
	this.route('postSubmit', {
		path: '/submit'
	});
});