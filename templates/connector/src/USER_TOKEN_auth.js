var cc = DataStudioApp.createCommunityConnector();
var USERNAME_PROPERTY_PATH = 'dscc.username';
var TOKEN_PROPERTY_PATH = 'dscc.token';

// TODO - implement your credentials validation logic here.
function validateCredentials(username, token) {
  cc.newDebugError()
    .setText('Implement the validateCredentials() function in ./src/auth.js')
    .throwException();
}

// https://developers.google.com/datastudio/connector/auth#getauthtype
function getAuthType() {
  return cc
    .newAuthTypeResponse()
    .setAuthType(cc.AuthType.USER_TOKEN)
    .setHelpUrl('https://www.example.org/connector-auth-help')
    .build();
}

// https://developers.google.com/datastudio/connector/auth#isauthvalid
function isAuthValid() {
  var userProperties = PropertiesService.getUserProperties();
  var username = userProperties.getProperty(USERNAME_PROPERTY_PATH);
  var token = userProperties.getProperty(TOKEN_PROPERTY_PATH);
  return validateCredentials(username, token);
}

// https://developers.google.com/datastudio/connector/auth#setcredentials
function setCredentials(request) {
  var creds = request.userToken;
  var username = creds.username;
  var token = creds.token;

  var validCreds = validateCredentials(username, token);
  if (!validCreds) {
    return {
      errorCode: 'INVALID_CREDENTIALS',
    };
  }
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(USERNAME_PROPERTY_PATH, username);
  userProperties.setProperty(TOKEN_PROPERTY_PATH, token);
  return {
    errorCode: 'NONE',
  };
}

// https://developers.google.com/datastudio/connector/auth#resetauth
function resetAuth() {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty(USERNAME_PROPERTY_PATH);
  userProperties.deleteProperty(TOKEN_PROPERTY_PATH);
}
