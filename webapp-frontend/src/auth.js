module.exports = {
  login(googleUser, cb) { //Taken from google-sign in example
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    //store the token
    //we will use this token to authenticate with our backend
    localStorage.token = id_token;
    if(cb) cb();
  },

  getToken() {
    return localStorage.token;
  },

 //I hate handling google signout here but I couldn't find a better way to do it.
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
