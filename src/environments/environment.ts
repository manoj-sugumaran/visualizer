// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyACIKkJUOegHAwK7dnBHCvAtb3p1cwet4w",
    authDomain: "testproject-cc509.firebaseapp.com",
    databaseURL: "https://testproject-cc509.firebaseio.com",
    projectId: "testproject-cc509",
    storageBucket: "testproject-cc509.appspot.com",
    messagingSenderId: "939401655317"
  },
  baseUrl: 'http://dis.onmo.com/ringtone/',
  artworkUrl: 'https://prodvolt.use.express.onmo.com/catalog/v3/image?width=500&target=s3://omd2cnamatlantis/ARTWORK/'
};