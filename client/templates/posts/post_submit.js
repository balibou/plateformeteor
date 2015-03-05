Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			title: e.target.title.value,
			question: e.target.question.value
		};

		post._id = Posts.insert(post);
		Router.go('postPage', post);
	}
});