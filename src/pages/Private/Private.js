
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/Firebase.init';
import Spinner from 'react-bootstrap/Spinner';
const Private = ({children}) => {
  
  const [user, loading, error] = useAuthState(auth);
   
    const location = useLocation();
    if(loading){
      return <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    }
     if (!user?.email) {
        
        return <Navigate to="/login" state={{from: location}} replace />;
      }
     
      return children;
};


export default Private;