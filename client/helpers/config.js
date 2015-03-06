accountsUIBootstrap3.setLanguage('fr');

Accounts.ui.config({
  requestPermissions: {},
  extraSignupFields: [{
      fieldName: 'username',
      fieldLabel: 'Username',
      inputType: 'text',
      visible: true,
      saveToProfile: true
  }]
});