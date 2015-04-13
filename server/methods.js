
Accounts.onCreateUser(function(options, user) {
  if (options.profile)
     Meteor.setTimeout(function() {
       Accounts.sendVerificationEmail(user._id);
      },1000);
  return user;
});
Accounts.emailTemplates.from = 'plateformeteor <no-reply@plateformeteor.eu>';
Accounts.emailTemplates.siteName = 'plateformeteor';
Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'You are almost an plateformeteor  member';
  };
  /*Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'Click en el link para completar tu registro : ' + url;
  };
});*/
Accounts.emailTemplates.verifyEmail.html = function (user, url) {
    return    '<div style="background: #404d5b; max-width: 600px; color: #FFF; text-align: center; height: 80px; line-height: 80px; margin: 0 auto; display: block;"><h1 style="font-size: 2em; margin: .67em 0; text-align: center; margin: 0 auto;">Click on the Green button below to complete the Registration proccess</h1></div><div style="background: #e5e5e5; max-width: 600px; padding-top: 20px; padding-bottom: 20px; text-align: center;   margin: 0 auto;"><a href="'+url+'" style="border: 0 none; border-radius: 2px 2px 2px 2px; color: #FFFFFF; cursor: pointer; display: inline-block; font-family: Arial,sans-serif; font-size: 12px; font-weight: bold; line-height: 20px; margin-bottom: 0; margin-top: 10px; padding: 7px 10px; text-transform: none; transition: all 0.5s ease 0s; -moz-transition: all 0.5s ease 0s; -webkit-transition: all 0.5s ease 0s; width: 120px; max-width: 180px; text-align: center;background: #00c462; color: #FFF;">Click to Verify Account</a></div>';
};   