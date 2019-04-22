var cc = DataStudioApp.createCommunityConnector();
var CLIENT_ID_PROPERTY_NAME = 'OAUTH_CLIENT_ID';
var CLIENT_SECRET_PROPERTY_NAME = 'OAUTH_CLIENT_SECRET';

// TODO - Edit these values to reflect your service.
var SERVICE_NAME = 'your-service-name';
var AUTHORIZATION_BASE_URL = 'your-authorization-base-url';
var TOKEN_URL = 'your-token-url';

// TODO - remove this function after setting the CLIENT_ID_PROPERTY_NAME &
// CLIENT_SECRET_PROPERTY values in your script properties.
(function checkConfiguration() {
  if (!PropertiesService.getProperty(CLIENT_ID_PROPERTY_NAME)) {
    cc.newDebugError()
      .setText(
        'You must set the "' +
          CLIENT_ID_PROPERTY_NAME +
          '" script property for this project.'
      )
      .throwException();
  }
  if (!PropertiesService.getProperty(CLIENT_ID_PROPERTY_NAME)) {
    cc.newDebugError()
      .setText(
        'You must set the "' +
          CLIENT_ID_PROPERTY_NAME +
          '" script property for this project.'
      )
      .throwException();
  }
  if (SERVICE_NAME === 'your-service-name') {
    cc.newDebugError()
      .setText('You must set "SERVICE_NAME" variable.')
      .throwException();
  }
  if (AUTHORIZATION_BASE_URL === 'your-authorization-base-url') {
    cc.newDebugError()
      .setText('You must set "AUTHORIZATION_BASE_URL" variable.')
      .throwException();
  }
  if (TOKEN_URL === 'your-token-url') {
    cc.newDebugError()
      .setText('You must set "TOKEN_URL" variable.')
      .throwException();
  }
})();

// https://developers.google.com/datastudio/connector/auth#getauthtype
function getAuthType() {
  var AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.OAUTH2)
    .build();
}

// https://developers.google.com/datastudio/connector/auth#get3pauthorizationurls
function get3PAuthorizationUrls() {
  return getOAuthService().getAuthorizationUrl();
}

// https://developers.google.com/datastudio/connector/auth#authcallback
function authCallback(request) {
  var authorized = getOAuthService().handleCallback(request);
  if (authorized) {
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab');
  }
}

// https://developers.google.com/datastudio/connector/auth#isauthvalid
function isAuthValid() {
  return getOAuthService().hasAccess();
}

// https://developers.google.com/datastudio/connector/auth#resetauth
function resetAuth() {
  getOAuthService().reset();
}

// Helper function to get the configured OauthService.
function getOAuthService() {
  var scriptProps = PropertiesService.getScriptProperties();

  return OAuth2.createService(SERVICE_NAME)
    .setAuthorizationBaseUrl(AUTHORIZATION_BASE_URL)
    .setTokenUrl(TOKEN_URL)
    .setClientId(scriptProps.getProperty(CLIENT_ID_PROPERTY_NAME))
    .setClientSecret(scriptProps.getProperty(CLIENT_SECRET_PROPERTY_NAME))
    .setPropertyStore(PropertiesService.getUserProperties())
    .setCallbackFunction('authCallback');
}
