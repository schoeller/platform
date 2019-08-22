export const oidcSettings = {
  authority: process.env.BD_OIDC_IP,
  client_id: process.env.BD_OIDC_CLIENT_ID,
  redirect_uri: process.env.BD_APP_URL + '/oidc-callback',
  post_logout_redirect_uri: process.env.BD_APP_URL,
  response_type: 'id_token token',
  scope: 'openid profile email',
  automaticSilentRenew: true,
  silentRedirectUri: process.env.BD_APP_URL + '/silent-renew-oidc.html',
  revokeAccessTokenOnSignout: true,
  extraQueryParams: {kc_idp_hint: 'bimdataconnect'}
}
