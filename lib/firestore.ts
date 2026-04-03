import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  limit,
  where,
  increment,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

// ============================================
// TYPES
// ============================================

export interface WaitlistEntry {
  email: string;
  createdAt: Timestamp;
}

export interface Candidature {
  id?: string;
  artistName: string;
  email: string;
  age: number;
  city: string;
  bio: string;
  soundLink: string; // lien SoundCloud/YouTube
  status: "pending" | "accepted" | "rejected";
  createdAt: Timestamp;
}

export interface Artist {
  id?: string;
  uid: string; // Firebase Auth UID
  artistName: string;
  bio: string;
  city: string;
  soundLink: string;
  profileImage?: string; // URL externe
  votes: number;
  rank: number;
  isChampion: boolean; // top 10 = Ligue des Champions
  createdAt: Timestamp;
}

export interface Vote {
  oderId: string;
  artistId: string;
  createdAt: Timestamp;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  createdAt: Timestamp;
}

// ============================================
// WAITLIST
// ============================================

export async function addToWaitlist(email: string) {
  const ref = collection(db, "waitlist");

  // Check duplicate
  const q = query(ref, where("email", "==", email));
  const snap = await getDocs(q);
  if (!snap.empty) {
    throw new Error("EMAIL_EXISTS");
  }

  return addDoc(ref, {
    email,
    createdAt: serverTimestamp(),
  });
}

// ============================================
// CANDIDATURES
// ============================================

export async function submitCandidature(data: Omit<Candidature, "id" | "status" | "createdAt">) {
  const ref = collection(db, "candidatures");

  // Check duplicate email
  const q = query(ref, where("email", "==", data.email));
  const snap = await getDocs(q);
  if (!snap.empty) {
    throw new Error("CANDIDATURE_EXISTS");
  }

  return addDoc(ref, {
    ...data,
    status: "pending",
    createdAt: serverTimestamp(),
  });
}

export async function getCandidatures(status?: Candidature["status"]) {
  const ref = collection(db, "candidatures");
  const q = status
    ? query(ref, where("status", "==", status), orderBy("createdAt", "desc"))
    : query(ref, orderBy("createdAt", "desc"));

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Candidature));
}

// ============================================
// CLASSEMENT / ARTISTS
// ============================================

export async function getClassement(max: number = 50) {
  const ref = collection(db, "artists");
  const q = query(ref, orderBy("votes", "desc"), limit(max));
  const snap = await getDocs(q);

  return snap.docs.map((d, index) => ({
    id: d.id,
    ...d.data(),
    rank: index + 1,
    isChampion: index < 10,
  } as Artist));
}

export async function getArtist(id: string) {
  const ref = doc(db, "artists", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Artist;
}

// ============================================
// VOTES
// ============================================

export async function voteForArtist(voterId: string, artistId: string) {
  const votesRef = collection(db, "votes");

  // Check if already voted for this artist
  const q = query(
    votesRef,
    where("voterId", "==", voterId),
    where("artistId", "==", artistId)
  );
  const snap = await getDocs(q);
  if (!snap.empty) {
    throw new Error("ALREADY_VOTED");
  }

  // Add vote record
  await addDoc(votesRef, {
    voterId,
    artistId,
    createdAt: serverTimestamp(),
  });

  // Increment artist vote count
  const artistRef = doc(db, "artists", artistId);
  await updateDoc(artistRef, {
    votes: increment(1),
  });
}

// ============================================
// CONTACT
// ============================================

export async function sendContactMessage(data: Omit<ContactMessage, "createdAt">) {
  const ref = collection(db, "contact");
  return addDoc(ref, {
    ...data,
    createdAt: serverTimestamp(),
  });
}
