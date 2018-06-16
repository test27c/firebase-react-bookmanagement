import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA_04MlRox4T_vnat7ou_WIyI61xYJ6VPw",
    authDomain: "cinema-awesome.firebaseapp.com",
    databaseURL: "https://cinema-awesome.firebaseio.com",
    projectId: "cinema-awesome",
    storageBucket: "",
    messagingSenderId: "676339213396"
  };

firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default};