/* global window, FB, document */

export function loadFbSdk(appId, version) {
  return new Promise(resolve => {
    window.fbAsyncInit = function () { // eslint-disable-line func-names
      FB.init({
        appId,
        // xfbml: false,
        xfbml: true,
        version,
        cookie: true
      });
      FB.AppEvents.logPageView();
      resolve('SDK Loaded!');
    };
    (function (d, s, id) { // eslint-disable-line func-names
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}

export function getLoginStatus() {
  return new Promise(resolve => {
    window.FB.getLoginStatus(responseStatus => {
      resolve(responseStatus);
    });
  });
}

export function fbLogin(options) {
  return new Promise(resolve => {
    window.FB.login(response => resolve(response), options);
  });
}
export function fbLogout() {
  return new Promise(resolve => {
    window.FB.logout(response => resolve(response));
  });
}