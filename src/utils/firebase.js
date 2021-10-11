import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCAQes38uk62qECrG5K_bWWUt8h47rCgzE',
	authDomain: 'delta2021-94d2b.firebaseapp.com',
	databaseURL:
		'https://delta2021-94d2b-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'delta2021-94d2b',
	storageBucket: 'delta2021-94d2b.appspot.com',
	messagingSenderId: '504457357038',
	appId: '1:504457357038:web:cce8d7d625dcfe1b5b75ff',
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const storage = firebase.storage();
