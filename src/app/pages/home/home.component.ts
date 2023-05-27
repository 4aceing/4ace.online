import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
