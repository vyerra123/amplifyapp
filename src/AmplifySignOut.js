import React from 'react'
import {Auth} from "aws-amplify";
import './App.css';

function AmplifySignOut() {
    const signOut = (e) => {
        e.preventDefault();
        Auth.signOut().then(()=>{
            window.location.reload(false); 
        });
    }
    return (
        <button onClick={signOut}>
            Sign out
        </button>
    )
}

export default AmplifySignOut;