import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../../../Firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("result:", result);
        console.log("result:", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error:", error);
        setUser(null);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error:", error);
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        setUser(null);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // if user exists ? sign out : sign in

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login with google</button>
          <button onClick={handleGithubSignIn}>Login with github</button>
        </>
      )}

      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
