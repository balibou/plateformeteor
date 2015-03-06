Template.postEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentPostId = this._id;
		
		var postProperties = {
			title: e.target.title.value,
			question: e.target.question.value
		}

		Posts.update(currentPostId, {$set: postProperties}, function(error) {
			if (error) {
				alert(error.reason);
			} else {
				Router.go('postPage', {_id: currentPostId});
			}
		});
	},
	
	'click .delete': function(e) {
		e.preventDefault();
	
		if (confirm("Voulez-vous supprimer cette question ?")) {
			var currentPostId = this._id;
			Posts.remove(currentPostId);
			Router.go('postsList');
		}
	}
});