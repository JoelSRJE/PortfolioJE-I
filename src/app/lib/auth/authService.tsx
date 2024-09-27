import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const signIn = async (email: string, password: string) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    const user = userCredentials.user;
    return user;
  } catch (error: any) {
    console.error("Error during login:", error);
    if (error.code === "auth/user-not-found") {
      throw new Error("No user found with this email!");
    } else if (error.code === "auth/wrong-password") {
      throw new Error("Wrong password!");
    } else {
      throw new Error("Failed to login!");
    }
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export const authStateListener = (callback: any) => {
  auth.onAuthStateChanged(callback);
};
