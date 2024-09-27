import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return projects;
  } catch (error: any) {
    console.error("Error getting projects:", error);
    throw new Error("Failed to get projects");
  }
};
