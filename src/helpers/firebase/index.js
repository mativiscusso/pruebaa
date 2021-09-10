import firebase from "firebase";

if (!!!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY, // Auth / General Use
        authDomain: "lamesa-customer.firebaseapp.com",
        projectId: "lamesa-customer",
        storageBucket: "lamesa-customer.appspot.com",
        messagingSenderId: "433312528962",
        appId: "1:433312528962:web:af7c207ef63cef24f94bdb",
        measurementId: "G-SQV7GFTKWD",
    });
} else {
    firebase.app(); // if already initialized, use that one
}

export const loginWithGoogleAndGetIdToken = async () => {
    try {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        googleAuthProvider.addScope("email");
        await firebase.auth().signInWithPopup(googleAuthProvider);
        const token = await firebase.auth().currentUser.getIdToken(true);
        return { token };
    } catch (error) {
        console.log(error);
        return { error };
    }
};

export const loginWithFacebookAndGetIdToken = async () => {
    try {
        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
        facebookAuthProvider.addScope("public_profile");
        facebookAuthProvider.addScope("email");
        await firebase.auth().signInWithPopup(facebookAuthProvider);
        const token = await firebase.auth().currentUser.getIdToken(true);

        return { token };
    } catch (error) {
        console.log(error);
        return { error };
    }
};
