export const oidcSettings = {
  authority: process.env.BD_OIDC_IP + '/auth/realms/bimdata',
  client_id: process.env.BD_OIDC_CLIENT_ID,
  redirect_uri: process.env.BD_APP_URL + '/oidc-callback',
  post_logout_redirect_uri: process.env.BD_APP_URL,
  response_type: 'code',
  scope: 'openid profile email',
  revokeAccessTokenOnSignout: true,
  automaticSilentRenew: true,
  silentRedirectUri: process.env.BD_APP_URL + '/oidc-silent-renew.html',
  extraQueryParams: {kc_idp_hint: 'bimdataconnect'}
}
