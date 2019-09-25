const AUTH_PROPERTY_PATH = 'dscc.key';

// TODO - implement your credentials validation logic here.
const validateCredentials = (key): boolean => {
  cc.newDebugError()
    .setText('Implement the validateCredentials() function in ./src/auth.ts')
    .throwException();
  return false;
};

// https://developers.google.com/datastudio/connector/auth#getauthtype
const getAuthType: GetAuthType = () => {
  return cc
    .newAuthTypeResponse()
    .setAuthType(cc.AuthType.KEY)
    .setHelpUrl('https://www.example.org/connector-auth-help')
    .build();
};

// https://developers.google.com/datastudio/connector/auth#isauthvalid
const isAuthValid = (): boolean => {
  const userProperties = PropertiesService.getUserProperties();
  const key = userProperties.getProperty(AUTH_PROPERTY_PATH);
  return validateCredentials(key);
};

// https://developers.google.com/datastudio/connector/auth#setcredentials
const setCredentials: SetCredentials = (request: KeyCredentials) => {
  const key = request.key;

  const validKey = validateCredentials(key);
  if (!validKey) {
    return {
      errorCode: 'INVALID_CREDENTIALS',
    };
  }
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(AUTH_PROPERTY_PATH, key);
  return {
    errorCode: 'NONE',
  };
};

// https://developers.google.com/datastudio/connector/auth#resetauth
const resetAuth: ResetAuth = () => {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty(AUTH_PROPERTY_PATH);
};
