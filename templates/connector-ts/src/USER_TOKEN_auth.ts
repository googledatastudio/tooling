const USERNAME_PROPERTY_PATH = 'dscc.username';
const TOKEN_PROPERTY_PATH = 'dscc.token';

// TODO - implement your credentials validation logic here.
const validateCredentials = (username: string, token: string): boolean => {
  cc.newDebugError()
    .setText('Implement the validateCredentials() function in ./src/auth.js')
    .throwException();
  return false;
};

// https://developers.google.com/datastudio/connector/auth#getauthtype
const getAuthType: GetAuthType = () => {
  return cc
    .newAuthTypeResponse()
    .setAuthType(cc.AuthType.USER_TOKEN)
    .setHelpUrl('https://www.example.org/connector-auth-help')
    .build();
};

// https://developers.google.com/datastudio/connector/auth#isauthvalid
const isAuthValid: IsAuthValid = () => {
  const userProperties = PropertiesService.getUserProperties();
  const username = userProperties.getProperty(USERNAME_PROPERTY_PATH);
  const token = userProperties.getProperty(TOKEN_PROPERTY_PATH);
  return validateCredentials(username, token);
};

// https://developers.google.com/datastudio/connector/auth#setcredentials
const setCredentials: SetCredentials = (request: UserTokenCredentials) => {
  const {
    userToken: {username, token},
  } = request;

  const validCreds = validateCredentials(username, token);
  if (!validCreds) {
    return {
      errorCode: 'INVALID_CREDENTIALS',
    };
  }
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(USERNAME_PROPERTY_PATH, username);
  userProperties.setProperty(TOKEN_PROPERTY_PATH, token);
  return {
    errorCode: 'NONE',
  };
};

// https://developers.google.com/datastudio/connector/auth#resetauth
const resetAuth: ResetAuth = () => {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty(USERNAME_PROPERTY_PATH);
  userProperties.deleteProperty(TOKEN_PROPERTY_PATH);
};
