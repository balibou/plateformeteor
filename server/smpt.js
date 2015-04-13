/*
*
* Benjamin You should add this file into the .gitignore to avoid publish this information
*
*/

Meteor.startup(function () {
  smtp = {
    username: 'benjamin.email@gmail.com',   // eg: server@gentlenode.com
    password: 'benjamin.password',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
