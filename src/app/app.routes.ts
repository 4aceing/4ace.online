import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", loadComponent: () => import("./pages/home/home.component").then((c) => c.HomeComponent) },
      {
        path: "privacy-policy",
        loadComponent: () =>
          import("./pages/privacy-policy/privacy-policy.component").then((c) => c.PrivacyPolicyComponent),
      },
      {
        path: "terms-of-service",
        loadComponent: () =>
          import("./pages/terms-of-service/terms-of-service.component").then((c) => c.TermsOfServiceComponent),
      },
    ],
  },
  { path: "**", redirectTo: "" },
];
