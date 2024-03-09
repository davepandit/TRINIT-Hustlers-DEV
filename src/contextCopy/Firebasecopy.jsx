import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";


//creating a context 
const FirebaseContext = createContext(null)

//config


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//for authentication
const auth = getAuth(app);

//custom hook
const useFirebase = ()=>{
   return useContext(FirebaseContext)
}

//making a provider
const FirebaseContextProvider = (props)=>{
    //signUp function 
    const SignUpUserWithEmailAndPassword = async(email , password)=>{
        await createUserWithEmailAndPassword(auth , email , password)
        

    }
    return(
        <FirebaseContext.Provider value={{SignUpUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

export {useFirebase}
export default FirebaseContextProvider