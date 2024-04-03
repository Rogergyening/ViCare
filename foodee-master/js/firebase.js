import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhnPAYqzh32Y_QCIKdegq7WDoeqUGyxnU",
  authDomain: "vicare-30b38.firebaseapp.com",
  projectId: "vicare-30b38",
  // Add other Firebase configurations
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
