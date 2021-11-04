import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../component/Login/Firebase/firebase.init'


import { initializeApp } from "firebase/app";
import { useHistory, useLocation } from "react-router";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVPHrlVfzJqv85nu-V-LbvgsXCD9n4kYA",
    authDomain: "travell-assignment.firebaseapp.com",
    projectId: "travell-assignment",
    storageBucket: "travell-assignment.appspot.com",
    messagingSenderId: "904123846880",
    appId: "1:904123846880:web:62fb99ac866ca631204085"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);




const useFirebase = () => {


    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [users, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true)




    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {

                setUsers(result.user);

            })
            .finally(() => setIsLoading(false))

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    return {
        users, signInUsingGoogle, logOut, isLoading
    }

}

export default useFirebase;