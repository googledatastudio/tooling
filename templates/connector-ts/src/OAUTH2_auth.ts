const CLIENT_ID_PROPERTY_NAME = 'OAUTH_CLIENT_ID';
const CLIENT_SECRET_PROPERTY_NAME = 'OAUTH_CLIENT_SECRET';

// TODO - Edit these values to reflect your service.
const SERVICE_NAME = 'your-service-name';
const AUTHORIZATION_BASE_URL = 'your-authorization-base-url';
const TOKEN_URL = 'your-token-url';

// https://developers.google.com/datastudio/connector/auth#getauthtype
const getAuthType: GetAuthType = () => {
  const AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.OAUTH2)
    .build();
};

// https://developers.google.com/datastudio/connector/auth#get3pauthorizationurls
const get3PAuthorizationUrls = () => {
  return getOAuthService().getAuthorizationUrl();
};

// https://developers.google.com/datastudio/connector/auth#authcallback
const authCallback: AuthCallback = (request) => {
  const authorized = getOAuthService().handleCallback(request);
  if (authorized) {
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab');
  }
};

// https://developers.google.com/datastudio/connector/auth#isauthvalid
const isAuthValid: IsAuthValid = () => {
  return getOAuthService().hasAccess();
};

// https://developers.google.com/datastudio/connector/auth#resetauth
const resetAuth: ResetAuth = () => {
  getOAuthService().reset();
};

// Helper function to get the configured OauthService.
const getOAuthService = (): GoogleAppsScriptOAuth2.OAuth2Service => {
  // Remove this call after setting the necessary config values.
  checkConfiguration();

  const scriptProps = PropertiesService.getScriptProperties();

  return OAuth2.createService(SERVICE_NAME)
    .setAuthorizationBaseUrl(AUTHORIZATION_BASE_URL)
    .setTokenUrl(TOKEN_URL)
    .setClientId(scriptProps.getProperty(CLIENT_ID_PROPERTY_NAME))
    .setClientSecret(scriptProps.getProperty(CLIENT_SECRET_PROPERTY_NAME))
    .setPropertyStore(PropertiesService.getUserProperties())
    .setCallbackFunction('authCallback');
};

// TODO - remove this function, (and it's invocation on line 47) after setting
// the `OAUTH_CLIENT_ID`, & `OAUTH_CLIENT_SECRET` values in your script
// properties and the SERVICE_NAME, AUTHORIZATION_BASE_URL, & TOKEN_URL
// constiables.
const checkConfiguration = () => {
  const scriptProperties = PropertiesService.getScriptProperties();
  const errors = [];
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
    errors.push('Set the "SERVICE_NAME" constiable.');
  }
  if (AUTHORIZATION_BASE_URL === 'your-authorization-base-url') {
    errors.push('Set the "AUTHORIZATION_BASE_URL" constiable.');
  }
  if (TOKEN_URL === 'your-token-url') {
    errors.push('Set the "TOKEN_URL" constiable.');
  }
  if (errors.length !== 0) {
    cc.newDebugError()
      .setText(errors.join(' '))
      .throwException();
  }
};
