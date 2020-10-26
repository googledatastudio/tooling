const PATH_PROPERTY_PATH = 'dscc.path';
const USERNAME_PROPERTY_PATH = 'dscc.username';
const PASSWORD_PROPERTY_PATH = 'dscc.password';

// TODO - implement your credentials validation logic here.
const validateCredentials = (path: string, username: string, password: string): boolean => {
  cc.newDebugError()
    .setText('Implement the validateCredentials() function in ./src/auth.js')
    .throwException();
  return false;
};

// https://developers.google.com/datastudio/connector/auth#getauthtype
const getAuthType: GetAuthType = () => {
  return cc
    .newAuthTypeResponse()
    .setAuthType(cc.AuthType.PATH_USER_PASS)
    .setHelpUrl('https://www.example.org/connector-auth-help')
    .build();
};

// https://developers.google.com/datastudio/connector/auth#isauthvalid
const isAuthValid: IsAuthValid = () => {
  const userProperties = PropertiesService.getUserProperties();
  const path = userProperties.getProperty(PATH_PROPERTY_PATH);
  const username = userProperties.getProperty(USERNAME_PROPERTY_PATH);
  const password = userProperties.getProperty(PASSWORD_PROPERTY_PATH);
  return validateCredentials(path, username, password);
};

// https://developers.google.com/datastudio/connector/auth#setcredentials
const setCredentials: SetCredentials = (request: PathUserPassCredentials) => {
  const {
    pathUserPass: {path, username, password},
  } = request;

  const validCreds = validateCredentials(path, username, password);
  if (!validCreds) {
    return {
      errorCode: 'INVALID_CREDENTIALS',
    };
  }
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(PATH_PROPERTY_PATH, path);
  userProperties.setProperty(USERNAME_PROPERTY_PATH, username);
  userProperties.setProperty(PASSWORD_PROPERTY_PATH, password);
  return {
    errorCode: 'NONE',
  };
};

// https://developers.google.com/datastudio/connector/auth#resetauth
const resetAuth: ResetAuth = () => {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty(PATH_PROPERTY_PATH);
  userProperties.deleteProperty(USERNAME_PROPERTY_PATH);
  userProperties.deleteProperty(PASSWORD_PROPERTY_PATH);
};
