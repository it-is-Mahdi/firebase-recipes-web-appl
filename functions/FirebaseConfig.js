const functions = require("firebase-functions");
const admin = require("firebase-admin");

const FIREBASE_STORAGE_BUCKET = "fir-recipes-6de29.appspot.com";

const apiFirebaseOptions = {
  ...functions.config().firebase,
  Credential: admin.credential.applicationDefault(),
  projectId: `fir-recipes-6de29`,
};

admin.initializeApp(apiFirebaseOptions);

const firestore = admin.firestore();

const settings = { timestampsInSnapshots: true };

firestore.settings(settings);

const storageBucket = admin.storage().bucket(FIREBASE_STORAGE_BUCKET);

const auth = admin.auth();

module.exports = { functions, auth, firestore, storageBucket, admin };
