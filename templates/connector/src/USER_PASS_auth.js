var cc = DataStudioApp.createCommunityConnector();
var USERNAME_PROPERTY_PATH = 'dscc.username';
var PASSWORD_PROPERTY_PATH = 'dscc.password';

// TODO - implement your credentials validation logic here.
function validateCredentials(username, password) {
  cc.newDebugError()
      .setText('Implement the validateCredentials() function in ./src/auth.js')
      .throwException();
}

// https://developers.google.com/datastudio/connector/auth#getauthtype
function getAuthType() {
  return cc.newAuthTypeResponse()
      .setAuthType(cc.AuthType.USER_PASS)
      .setHelpUrl('https://www.example.org/connector-auth-help')
      .build();
}

// https://developers.google.com/datastudio/connector/auth#isauthvalid
function isAuthValid() {
  var userProperties = PropertiesService.getUserProperties();
  var userName = userProperties.getProperty(USERNAME_PROPERTY_PATH);
  var password = userProperties.getProperty(PASSWORD_PROPERTY_PATH);
  return validateCredentials(userName, password);
}

// https://developers.google.com/datastudio/connector/auth#setcredentials
function setCredentials(request) {
  var creds = request.userPass;
  var username = creds.username;
  var password = creds.password;

  var validCreds = validateCredentials(username, password);
  if (!validCreds) {
    return {
      errorCode: 'INVALID_CREDENTIALS'
    };
  }
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(USERNAME_PROPERTY_PATH, username);
  userProperties.setProperty(PASSWORD_PROPERTY_PATH, password);
  return {
    errorCode: 'NONE'
  };
}

// https://developers.google.com/datastudio/connector/auth#resetauth
function resetAuth() {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty(USERNAME_PROPERTY_PATH);
  userProperties.deleteProperty(PASSWORD_PROPERTY_PATH);
}
