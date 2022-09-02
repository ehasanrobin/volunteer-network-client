import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";



const getAuth = () => {
    return (
        useContext(AuthContext)
        );

};

export default getAuth;