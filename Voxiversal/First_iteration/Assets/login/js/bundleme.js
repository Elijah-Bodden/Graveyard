import * as firebaseui from 'firebaseui';

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(window.authInstance);
 
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    window.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: window.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: window.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    }
  ],
  signInSuccessUrl: "/",
  tosUrl: '/terms',
  privacyPolicyUrl: '/privacy',
  signInFlow: 'popup',
})

function checkAuth() {
  if (authInstance.currentUser) {
    document.querySelector(".heading-2").innerHTML = "Logged in as " + authInstance.currentUser.displayName;
    window.conditionalStyle(document.querySelector("#logout-container"), "display", "inline");
    window.conditionalStyle(document.querySelector("#firebaseui-auth-container"), "display", "none");
    document.cookie = "isAuth=true;path=/;max-age=86400;SameSite=Lax";
  } else {
    document.querySelector(".heading-2").innerHTML = "Login or Sign Up";
    window.conditionalStyle(document.querySelector("#logout-container"), "display", null);
    window.conditionalStyle(document.querySelector("#firebaseui-auth-container"), "display", null);
    document.cookie = "isAuth=false;path=/;max-age=86400;SameSite=Lax";
  }
}

// The start method will wait until the DOM is loaded.
window.authInstance.onAuthStateChanged(checkAuth);
window.addEventListener("DOMContentLoaded", (event) => {
  checkAuth();
})

window.checkAuth = checkAuth;