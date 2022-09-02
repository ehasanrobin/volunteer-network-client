import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase/Firebase.init";


const useFirebase = () => {
    const [user,setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        
      return signInWithPopup(auth, provider)

    }

    // observe the user signin or not and it's saves when it's reload.
    useEffect(()=>{
        onAuthStateChanged(auth, user=> {
            if(user){
                setUser(user);
            }
        })
       },[]);
 const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        setUser([]);
      }).catch((error) => {
        // An error happened.
      });
 }
  return {googleSignIn,user,logOut}
};

export default useFirebase;