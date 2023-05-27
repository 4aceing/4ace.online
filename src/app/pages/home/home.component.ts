import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  login() {
    const firebaseConfig = {
      apiKey: "AIzaSyArWv1plOm1XDgMrBPCzhkadufxScDK9kE",
      authDomain: "ace-6d3d2.firebaseapp.com",
      projectId: "ace-6d3d2",
      storageBucket: "ace-6d3d2.appspot.com",
      messagingSenderId: "213108665728",
      appId: "1:213108665728:web:ecee9cd100607cb882a565",
      measurementId: "G-P54F99DZ6S",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result)
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("credential", credential);
      })
      .catch((error) => {
        console.log("error", error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log("credential", credential);
      });
  }
}
