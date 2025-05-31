import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

export const onVoteChange = functions.firestore
  .document("votes/{visitorId}")
  .onWrite(async (change, context) => {
    if (!change.before.exists && change.after.exists) {
      const voteData = change.after.data();
      const artId = voteData.id;
      const artRef = db.collection("artToVote").doc(artId);

      await artRef.update({
        voteCount: admin.firestore.FieldValue.increment(1),
      });
    }

    if (change.before.exists && !change.after.exists) {
      const voteData = change.before.data();
      const artId = voteData.id;
      const artRef = db.collection("artToVote").doc(artId);

      await artRef.update({
        voteCount: admin.firestore.FieldValue.increment(-1),
      });
    }
  });
