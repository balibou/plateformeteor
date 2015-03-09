Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			title: e.target.title.value,
			question: e.target.question.value
		};

		// post._id = Posts.insert(post);
		// Router.go('postPage', post);

		var errors = validatePost(post);
		if (errors.title || errors.question)
			return Session.set('postSubmitErrors', errors);

		Meteor.call('postInsert', post, function(error, result) {
			if (error)
				return throwError(error.reason);
			
			Router.go('postsList');
		});
	}
});

Template.postSubmit.created = function() {
	Session.set('postSubmitErrors', {});
}

Template.postSubmit.helpers({
	errorMessage: function(field) {
		return Session.get('postSubmitErrors')[field];
	},
	errorClass: function (field) {
		return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
	}
});