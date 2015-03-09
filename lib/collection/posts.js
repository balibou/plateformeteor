Posts = new Mongo.Collection('posts');

Posts.allow({
	update: function(userId, post) { return ownsDocument(userId, post); },
	remove: function(userId, post) { return ownsDocument(userId, post); },
});


Posts.deny({
	update: function(userId, post, fieldNames) {
		return (_.without(fieldNames, 'title', 'question').length > 0);
	}
});

Posts.deny({
  update: function(userId, post, fieldNames, modifier) {
    var errors = validatePost(modifier.$set);
    return errors.title || errors.question;
  }
});

validatePost = function (post) {
	var errors = {};
	
	if (!post.title)
		errors.title = "Il manque un titre !";
	
	if (!post.question)
		errors.question = "Il manque du contenu !";
	
	return errors;
}

Meteor.methods({
	postInsert: function(postAttributes) {
		check(Meteor.userId(), String);
		check(postAttributes, {
			title: String,
			question: String
		});

		// if (Meteor.isServer) {
		// 	postAttributes.title += "(server)";
		// 	Meteor._sleepForMs(5000);
		// } else {
		// 	postAttributes.title += "(client)";
		// }

		//Inutile
		// var postWithSameLink = Posts.findOne({url: postAttributes.url});
		// if (postWithSameLink) {
		// 	return {
		// 		postExists: true,
		// 		_id: postWithSameLink._id
		// 	}
		// }

		var errors = validatePost(postAttributes);
		if (errors.title || errors.question)
			throw new Meteor.Error('Erreur', "Insérez un titre et une question");

		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date(),
			commentsCount: 0
		});

		var postId = Posts.insert(post);
		
		return {
			_id: postId
		};
	}
});