import React from "react";
import "./App.css";
import { auth, provider } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveUser,
  setLogoutUserState,
  selectUserName,
  selectUserEmail,
} from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handlesignin = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };
  const handlesignout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setLogoutUserState());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="App">
      <header className="App-header">
        {userName ? (
          <>
            <button onClick={handlesignout}>Signout</button>
            <h2>Welcome {userName}</h2>
            Your mail id is {userEmail}
          </>
        ) : (
          <button onClick={handlesignin}> login</button>
        )}
      </header>
    </div>
  );
}

export default App;
