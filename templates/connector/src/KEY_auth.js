var cc = DataStudioApp.createCommunityConnector();
var AUTH_PROPERTY_PATH = 'dscc.key';

// TODO - implement your validateKey logic here.
function validateKey(key) {
  cc.newDebugError()
    .setText('Implement an actual auth check in ./src/auth.js')
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
  return validateKey(key);
}

// https://developers.google.com/datastudio/connector/auth#setcredentials
function setCredentials(request) {
  var key = request.key;

  var validKey = validateKey(key);
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
