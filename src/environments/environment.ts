// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyApj2zl3yx5gOhxWzb6y7R8nbO4pimESoU",
    authDomain: "epnbet-36077.firebaseapp.com",
    projectId: "epnbet-36077",
    storageBucket: "epnbet-36077.firebasestorage.app",
    messagingSenderId: "47001758781",
    appId: "1:47001758781:web:5150cf28a192e4184b0e54"
  },
  footballData: {
    apiKey: "5214b9b426594893890aa1bcedd9f9ed", // X-Auth-Token
    baseUrl: "https://api.football-data.org/v4"
  },
  newsApi: {
    apiKey: "7e7e749882954caa8c663aaf91350193",
    baseUrl: "https://newsapi.org/v2"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
