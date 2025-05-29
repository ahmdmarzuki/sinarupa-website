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
import { auth } from "./auth";
import { useId } from "react";
import { toast } from "react-toastify";

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

const createArtToVote = async (name, title, desc, url) => {
  try {
    await addDoc(artToVoteRef, {
      name: name,
      title: title,
      desc: desc,
      url: url,
      voteCount: 0,
    });

    toast.success("Berhasil Upload Karya!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } catch (error) {
    toast.error("Gagal Upload Karya!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};

const getAllArtToVote = async () => {
  const data = [];
  const snapshot = await getDocs(collection(db, "artToVote"));

  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
};

const vote = async (artId, visitorId) => {
  try {
    const voteDoc = await getDoc(doc(db, "votes", visitorId));

    if (voteDoc.exists()) {
      alert("UDAHHH VOTINGG");
      return;
    }

    // Update vote count langsung pakai Firestore increment
    const artRef = doc(db, "artToVote", artId);
    await updateDoc(artRef, {
      voteCount: increment(1),
    });

    await setDoc(doc(db, "votes", visitorId), {
      id: artId,
      votedAt: new Date(),
    });

    // alert("Vote berhasil!");
  } catch (error) {
    alert("Error saat voting: ", error);
    // alert("Terjadi kesalahan saat voting. Coba lagi!");
  }
};

const getVoteCount = async (artId) => {
  const votersColRef = collection(db, "artToVote", artId, "voters");

  const snapshot = await getDocs(votersColRef);
  const voteCount = snapshot.size;

  return voteCount;
};

const resetVote = async (visitorId, artId) => {
  try {
    const voteDoc = doc(db, "votes", visitorId);

    await deleteDoc(voteDoc);

    const artRef = doc(db, "artToVote", artId);
    await updateDoc(artRef, {
      voteCount: increment(-1),
    });
    // alert(`berhasilll reset, ayok voting ulang`);
  } catch (error) {
    alert(`gagal reset: ${error}`);
  }
};

const removeArt = async (artId) => {
  try {
    const artRef = doc(db, "artToVote", artId);
    await deleteDoc(artRef);
  } catch (error) {
    alert(`gagal remove: ${error}`);
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
  resetVote,
  removeArt,
};
