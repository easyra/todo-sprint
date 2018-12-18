import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'ezradavis.auth0.com',
    clientID: 's8e2CVzuzMO9YLm62PMQCszbCtarQQhj',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid',
  });

  login() {
    this.auth0.authorize();
  }
}
