// https://devsite.googleplex.com/datastudio/connector/reference#getauthtype
const getAuthType: GetAuthType = () => {
  const AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.NONE)
    .build();
};
