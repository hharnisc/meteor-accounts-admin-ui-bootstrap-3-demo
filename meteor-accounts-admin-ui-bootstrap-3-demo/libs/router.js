Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'home'
	});

	this.route('admin', {
		path:'/admin',
		template: 'accountsAdmin',
		onBeforeAction: function() {
			if (Meteor.loggingIn()) {
				this.render(this.loadingTemplate);
			} else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
				console.log('redirecting');
				this.redirect('/');
			} else {
				this.next();
			}
		}
	});
});