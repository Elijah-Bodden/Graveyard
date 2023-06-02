import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";

DEFAULT_PROFILE_URL = "/images/profile_128.png";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO7esByebzglertjt0swODXdpnsUgb0n4",
  authDomain: "voxiversal-1.firebaseapp.com",
  projectId: "voxiversal-1",
  storageBucket: "voxiversal-1.appspot.com",
  messagingSenderId: "1045437218421",
  appId: "1:1045437218421:web:fb216675f8ad8731db823c",
  measurementId: "G-PBE43EW75W"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Get the Auth instance
const authInstance = auth.getAuth();
 
function getUserProfilePhoto() {
  url = (() => {
    if (authInstance.currentUser) {
      return authInstance.currentUser.photoURL;
    } else {
      return null;
    }
  })()
  return url ? url : null;
}

function CTAs() {
  console.log("CTAs");
  for (j of document.querySelectorAll(".signup-CTA")) conditionalStyle(j, "display", "none");
  for (j of document.querySelectorAll(".profile-link")) conditionalStyle(j, "display", "visible");
  for (j of document.querySelectorAll(".user_icon")) conditionalAttr(j, "src", getUserProfilePhoto() ? getUserProfilePhoto() : DEFAULT_PROFILE_URL);
  document.cookie = "isAuth=" + !!authInstance.currentUser + ";path=/;max-age=86400;SameSite=Lax";
}

function hasAuthCookie() {
  return document.cookie.split("; ").filter((row) => row.startsWith("isAuth="))?.[0].split("=")[1]=="true";
}

function conditionalStyle(element, styleName, styleValue) {
  if (authInstance?.currentUser || hasAuthCookie()) {
    element.style[styleName] = styleValue;
  } else {
    element.style[styleName] = null;
  }
}

function conditionalAttr(element, attrName, attrValue) {
  if (authInstance?.currentUser || hasAuthCookie()) {
    element[attrName] = attrValue;
  }
}

authInstance.onAuthStateChanged(CTAs);

window.authInstance = authInstance;
window.auth = auth;

window.addEventListener("DOMContentLoaded", (event) => {
  hasAuthCookie() ? CTAs() : null;
});

window.conditionalStyle = conditionalStyle;