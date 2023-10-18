import React, { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth, db, onAuthStateChanged } from "../Firebase/Firebase";
import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  updateDoc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AppContext = ({ children }) => {
  
  const collectionUsersRef = collection(db, "users");
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const popup = await signInWithPopup(auth, provider);
      const user = popup.user;
      const q = query(collectionUsersRef, where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        if (user.email.includes("gitam")) {
          addDoc(collectionUsersRef, {
            uid: user?.uid,
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            authProvider: popup?.providerId,
          });
          navigate("/signup/"+user?.uid);
        } else{
          alert("please use the university email id")
        }
      } else{
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  const completeSignUp = async (uid,phno,year) => {
    try {
      const q = query(collectionUsersRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0];
    await updateDoc(doc.ref, {
      phoneNo: phno,
      yearStudy: year,
    });
          navigate("/dashboard")
        
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };



  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collectionUsersRef, {
        uid: user.uid,
        name,
        providerId: "email/password",
        email: user.email,
      });
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };


  const signOutUser = async () => {
    await signOut(auth);
  };

  const userStateChanged = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collectionUsersRef, where("uid", "==", user?.uid));
        await onSnapshot(q, (doc) => {
          setUserData(doc?.docs[0]?.data());
        });
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    userStateChanged();
    if (user || userData) {
      navigate("/");
    } else {
      navigate("/login");
    }
    return () => userStateChanged();
  }, []);

  const initialState = {
    signInWithGoogle: signInWithGoogle,
    registerWithEmailAndPassword: registerWithEmailAndPassword,
    signOutUser: signOutUser,
    user: user,
    userData: userData,
    completeSignUp: completeSignUp
  };
  // console.log("user", user);
  // console.log("userData", userData);
  return (
    <div>
      <AuthContext.Provider value={initialState}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AppContext;
