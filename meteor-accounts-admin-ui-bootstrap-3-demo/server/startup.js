makeid = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

Meteor.startup(function() {
	// create an admin user if they don't already exist
	if (Meteor.users.find({username: 'admin'}).count() < 1) {
		Accounts.createUser({
			'username': 'admin',
			'email': 'admin@test.com',
			'password': 'admin'
		});
		Roles.addUsersToRoles(Meteor.users.find({username: 'admin'}).fetch(), ['admin']);
	}
	
	// add a bunch of users
	if (Meteor.users.find().count() < 10) {
		for (var i = 1000 - 1; i >= 0; i--) {
			var email = makeid() + '@test.com';
			var profileOptions = {
				'username': email,
				'email': email,
				'password': 'password'
			};
			Accounts.createUser(profileOptions);
		}
	}
});
