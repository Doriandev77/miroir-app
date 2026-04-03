import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

// ============================================
// INSCRIPTION
// ============================================

export async function registerUser(email: string, password: string, displayName: string) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName });
  return result.user;
}

// ============================================
// CONNEXION
// ============================================

export async function loginUser(email: string, password: string) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

// ============================================
// DÉCONNEXION
// ============================================

export async function logoutUser() {
  return signOut(auth);
}

// ============================================
// OBSERVER
// ============================================

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
