var cc = DataStudioApp.createCommunityConnector();
var CLIENT_ID_PROPERTY_NAME = 'OAUTH_CLIENT_ID';
var CLIENT_SECRET_PROPERTY_NAME = 'OAUTH_CLIENT_SECRET';

// TODO - Edit these values to reflect your service.
var SERVICE_NAME = 'your-service-name';
var AUTHORIZATION_BASE_URL = 'your-authorization-base-url';
var TOKEN_URL = 'your-token-url';

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
  // Remove this call after setting the necessary config values.
  checkConfiguration();

  var scriptProps = PropertiesService.getScriptProperties();

  return OAuth2.createService(SERVICE_NAME)
    .setAuthorizationBaseUrl(AUTHORIZATION_BASE_URL)
    .setTokenUrl(TOKEN_URL)
    .setClientId(scriptProps.getProperty(CLIENT_ID_PROPERTY_NAME))
    .setClientSecret(scriptProps.getProperty(CLIENT_SECRET_PROPERTY_NAME))
    .setPropertyStore(PropertiesService.getUserProperties())
    .setCallbackFunction('authCallback');
}

// TODO - remove this function, (and it's invocation on line 47) after setting
// the `OAUTH_CLIENT_ID`, & `OAUTH_CLIENT_SECRET` values in your script
// properties and the SERVICE_NAME, AUTHORIZATION_BASE_URL, & TOKEN_URL
// variables.
function checkConfiguration() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var errors = [];
  if (!scriptProperties.getProperty(CLIENT_ID_PROPERTY_NAME)) {
    errors.push(
      'Set the "' +
        CLIENT_ID_PROPERTY_NAME +
        '" script property for this project.'
    );
  }
  if (!scriptProperties.getProperty(CLIENT_ID_PROPERTY_NAME)) {
    errors.push(
      'Set the "' +
        CLIENT_ID_PROPERTY_NAME +
        '" script property for this project.'
    );
  }
  if (SERVICE_NAME === 'your-service-name') {
    errors.push('Set the "SERVICE_NAME" variable.');
  }
  if (AUTHORIZATION_BASE_URL === 'your-authorization-base-url') {
    errors.push('Set the "AUTHORIZATION_BASE_URL" variable.');
  }
  if (TOKEN_URL === 'your-token-url') {
    errors.push('Set the "TOKEN_URL" variable.');
  }
  if (errors.length !== 0) {
    cc.newDebugError()
      .setText(errors.join(' '))
      .throwException();
  }
}
