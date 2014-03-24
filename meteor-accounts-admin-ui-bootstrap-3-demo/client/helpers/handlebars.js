Handlebars.registerHelper('isAdminUser', function() {
	return Roles.userIsInRole(Meteor.user(), ['admin']);
});