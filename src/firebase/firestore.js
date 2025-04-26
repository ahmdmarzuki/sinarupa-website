import { getFirestore } from "@firebase/firestore";
import { app } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

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

const vote = async () => {
  const art = doc(db, "artToVote", id);
  newField = { voteCount: voteCount + 1 };
  await updateDoc(art, newField);
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
