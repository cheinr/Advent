import axios from 'axios';

module.exports = {

  login(googleUser, cb) {

    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;

    /*
    *   Send the token to our backend server, which will check if the user exists,
    *   and if not create a new one.
    */
    axios({
      method: 'post',
      url: '/api/auth/register',
      headers: {"google-id-token": id_token}
    }).then(function(response) { //success
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    //store the token
    //we will use this token to authenticate with our backend
    localStorage.token = id_token;

    if(cb) cb();

  },


  getToken() {
    return localStorage.token;
  },

  logout(auth2, cb) {
    delete localStorage.token;
    auth2.signOut().then(function () {
      if (cb) cb();
    });
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token;
  },

  onChange() {}
}
