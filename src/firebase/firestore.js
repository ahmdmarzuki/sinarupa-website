import {
  arrayRemove,
  arrayUnion,
  getDoc,
  getFirestore,
  increment,
  setDoc,
} from "@firebase/firestore";
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
import { confirmAlert } from "react-confirm-alert";

const db = getFirestore(app);
const usersCollectionRef = collection(db, "users");
const artToVoteRef = collection(db, "artToVote");
const artVoteCountRef = collection(db, "artVoteCount");

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
    const artData = await addDoc(artToVoteRef, {
      name: name,
      title: title,
      desc: desc,
      url: url,
    });

    // alert(artData.id);

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

    return artData.id;
  } catch (error) {
    toast.error("Gagal Upload Karya!: Login Sebagai Admin", {
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

const createVoteCount = async (id) => {
  try {
    await setDoc(doc(db, "artVoteCount", id), {
      voteBy: [],
    });
  } catch (error) {
    // alert(`errorrr: ${error}`);
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

const getArtWithVotes = async () => {
  const result = [];

  const querySnapshot = await getDocs(artToVoteRef);
  for (const docSnap of querySnapshot.docs) {
    const artData = docSnap.data();
    const id = docSnap.id;

    // Ambil vote count berdasarkan ID yang sama
    const voteSnap = await getDoc(doc(db, "artVoteCount", id));
    const voteData = voteSnap.exists() ? voteSnap.data() : { voteCount: 0 };

    result.push({
      id,
      ...artData,
      ...voteData, // gabungkan voteCount ke data art
    });
  }

  return result; // bentuk array of object
};

const getVoteCount = async () => {
  const data = [];
  const snapshot = await getDocs(collection(db, "artVoteCount"));

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
    const artRef = doc(db, "artVoteCount", artId);
    await updateDoc(artRef, {
      voteBy: arrayUnion(visitorId),
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

const resetVote = async (visitorId, artId) => {
  try {
    const voteDoc = doc(db, "votes", visitorId);
    const voteCountDoc = doc(db, "artVoteCount", artId);

    await deleteDoc(voteDoc);

    // Hapus visitorId dari array voteBy
    await updateDoc(voteCountDoc, {
      voteBy: arrayRemove(visitorId),
    });

    // const artRef = doc(db, "artToVote", artId);
    // await updateDoc(artRef, {
    //   voteCount: increment(-1),
    // });
    // alert(`berhasilll reset, ayok voting ulang`);
  } catch (error) {
    alert(`gagal reset: ${error}`);
  }
};

const removeArt = async (artId) => {
  try {
    confirmAlert({
      title: "Remove Karya",
      message: "Apakah kamu yakin ingin menghapus vote karya ini?",
      buttons: [
        {
          label: "Ya",
          onClick: () => {
            const artRef = doc(db, "artToVote", artId);
            const voteRef = doc(db, "artVoteCount", artId);
            deleteDoc(artRef);
            deleteDoc(voteRef);
          },
        },
        {
          label: "Batal",
          onClick: () => {
            console.log("batal");
          },
        },
      ],
    });
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
  getVoteCount,
  createVoteCount,
  getArtWithVotes,
};
