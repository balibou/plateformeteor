Template.postsList.helpers({
	posts: function() {
		return Posts.find({}, {sort: {submitted: -1}});
	}
});

<<<<<<< HEAD
=======
 //onCreated

>>>>>>> c1e83bfc3104e5c9df0b75abf4b1ee80e96caf2a
 Template.postsList.onCreated(function(){
    if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
      if (err != null) {
        if (err.message = 'Verify email link expired [403]') {
          console.log('Sorry this verification link has expired.')
        }
      } else {
        console.log('Thank you! Your email address has been confirmed.')
<<<<<<< HEAD
     }
    });
  }
})
=======
      }
    });
  }
})
>>>>>>> c1e83bfc3104e5c9df0b75abf4b1ee80e96caf2a
