import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { app } from "./firebaseConfig";
import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      role: "user",
      authProvider: "local",
      email,
    });

    alert("berhasil sign up");
  } catch (error) {
    console.error("Error signing up:", error.message);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("berhasil login");
  } catch (error) {
    alert("gagal loginnn:", error.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, signup, login, logout };
