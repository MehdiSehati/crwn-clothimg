import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
    apiKey: "AIzaSyC-ge-WoI5G-NQNaa4vaq5nh7TdOSutfmA",
    authDomain: "crwn-db-20999.firebaseapp.com",
    databaseURL: "https://crwn-db-20999.firebaseio.com",
    projectId: "crwn-db-20999",
    storageBucket: "crwn-db-20999.appspot.com",
    messagingSenderId: "800146077280",
    appId: "1:800146077280:web:8590053a8aea779d05b505",
    measurementId: "G-ES7DLKSD16"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
