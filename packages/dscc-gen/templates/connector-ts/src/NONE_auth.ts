// https://developers.google.com/datastudio/connector/reference#getauthtype
const getAuthType: GetAuthType = () => {
  const AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.NONE)
    .build();
};
