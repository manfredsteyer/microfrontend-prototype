# AngularMicrofrontendDemo

This project shows a problem when using an Angular Microfrontend within an Angular Shell app.

All was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Reproduce

```
npm install
npm run show-problem
```

Navigate to `http://localhost:4202`, open the Dev Tools and display the `Elements`, there you can see that `_nghost` attributes are injected into `<app-root>` endlessly.
