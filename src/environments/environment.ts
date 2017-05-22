// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyB2acFlU8jyXNQw-hGGCGYOEHbJ8J1h08k',
    authDomain: 'blogng4.firebaseapp.com',
    databaseURL: 'https://blogng4.firebaseio.com',
    projectId: 'blogng4',
    storageBucket: 'blogng4.appspot.com',
    messagingSenderId: '489253796737'
  }
};
