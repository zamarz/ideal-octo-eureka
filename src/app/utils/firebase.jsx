import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../../firebaseConfig";

export async function getProjects() {
  const snapshot = await getDocs(collection(fireDB, "projects"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
}
