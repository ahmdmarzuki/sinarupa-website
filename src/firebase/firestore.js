import { getDoc, getFirestore, increment, setDoc } from "@firebase/firestore";
import { app } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import fpPromise from "./fingerPrint";
import { auth } from "./auth";

const db = getFirestore(app);
const usersCollectionRef = collection(db, "users");
const artToVoteRef = collection(db, "artToVote");

const createUser = async (name, age) => {
  await addDoc(usersCollectionRef, { name: name, age: Number(age) });
};

const updateUser = async (id, age) => {
  const userDoc = doc(db, "users", id);
  const newFields = { age: age + 1 };
  await updateDoc(userDoc, newFields);
};

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};

const createArtToVote = async (name, desc, url) => {
  await addDoc(artToVoteRef, {
    name: name,
    desc: desc,
    url: url,
    voteCount: 0,
  });
};

const getAllArtToVote = async () => {
  const data = [];
  const snapshot = await getDocs(collection(db, "artToVote"));

  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
};

const vote = async (id) => {
  try {
    const user = auth.currentUser;
    const userId = user.uid;

    const voteDoc = await getDoc(doc(db, "votes", userId));

    if (voteDoc.exists()) {
      alert("UDAHHH VOTING WOEEE");
      return;
    }

    // Update vote count langsung pakai Firestore increment
    const artRef = doc(db, "artToVote", id);
    await updateDoc(artRef, {
      voteCount: increment(1),
    });

    await setDoc(doc(db, "votes", userId), {
      id: id,
      votedAt: new Date(),
    });

    alert("Vote berhasil!");
  } catch (error) {
    alert("Error saat voting: ", error);
    // alert("Terjadi kesalahan saat voting. Coba lagi!");
  }
};

export {
  db,
  usersCollectionRef,
  createUser,
  updateUser,
  deleteUser,
  createArtToVote,
  getAllArtToVote,
  vote,
};
