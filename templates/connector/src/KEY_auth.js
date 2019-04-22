var cc = DataStudioApp.createCommunityConnector();
var AUTH_PROPERTY_PATH = 'dscc.key';

// TODO - implement your credentials validation logic here.
function validateCredentials(key) {
  cc.newDebugError()
      .setText('Implement the validateCredentials() function in ./src/auth.js')
      .throwException();
}

// https://developers.google.com/datastudio/connector/auth#getauthtype
function getAuthType() {
  return cc
    .newAuthTypeResponse()
    .setAuthType(cc.AuthType.KEY)
    .setHelpUrl('https://www.example.org/connector-auth-help')
    .build();
}

// https://developers.google.com/datastudio/connector/auth#isauthvalid
function isAuthValid() {
  var userProperties = PropertiesService.getUserProperties();
  var key = userProperties.getProperty(AUTH_PROPERTY_PATH);
  return validateCredentials(key);
}

// https://developers.google.com/datastudio/connector/auth#setcredentials
function setCredentials(request) {
  var key = request.key;

  var validKey = validateCredentials(key);
  if (!validKey) {
    return {
      errorCode: 'INVALID_CREDENTIALS',
    };
  }
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(AUTH_PROPERTY_PATH, key);
  return {
    errorCode: 'NONE',
  };
}

// https://developers.google.com/datastudio/connector/auth#resetauth
function resetAuth() {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty(AUTH_PROPERTY_PATH);
}
