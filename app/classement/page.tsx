"use client";

import { useEffect, useState } from "react";
import { getClassement, voteForArtist, Artist } from "@/lib/firestore";
import { useAuth } from "@/lib/AuthContext";
import { Crown, ChevronUp } from "lucide-react";

export default function ClassementPage() {
  const { user } = useAuth();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [votingId, setVotingId] = useState<string | null>(null);
  const [voteError, setVoteError] = useState("");

  useEffect(() => {
    loadClassement();
  }, []);

  async function loadClassement() {
    try {
      const data = await getClassement(50);
      setArtists(data);
    } catch {
      // empty state
    } finally {
      setLoading(false);
    }
  }

  async function handleVote(artistId: string) {
    if (!user) {
      setVoteError("Connecte-toi pour voter.");
      return;
    }
    setVotingId(artistId);
    setVoteError("");
    try {
      await voteForArtist(user.uid, artistId);
      await loadClassement();
    } catch (err: any) {
      if (err.message === "ALREADY_VOTED") {
        setVoteError("Tu as déjà voté pour cet artiste.");
      } else {
        setVoteError("Erreur, réessaie.");
      }
    } finally {
      setVotingId(null);
    }
  }

  return (
    <>
      <section className="pt-24 pb-8 px-6 text-center">
        <p className="font-mono text-[0.6rem] tracking-[5px] uppercase text-rouge mb-4">
          // Classement général
        </p>
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase tracking-tight">
          Qui <span className="text-rouge">domine</span> ?
        </h1>
        <p className="text-blanc-muted text-sm mt-4 max-w-md mx-auto">
          Le top 10 accède à la Ligue des Champions. Vote pour tes favoris.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        {loading ? (
          <div className="text-center py-20">
            <p className="font-mono text-xs text-blanc-muted tracking-wider">CHARGEMENT...</p>
          </div>
        ) : artists.length === 0 ? (
          <div className="text-center py-20 border border-white/[0.04] bg-noir-card">
            <p className="font-display text-xl uppercase tracking-wide mb-2">
              La compétition n&apos;a pas encore commencé.
            </p>
            <p className="text-sm text-blanc-muted">
              Les premiers artistes apparaîtront ici après la phase de sélection.
            </p>
          </div>
        ) : (
          <>
            {voteError && (
              <p className="text-center text-xs text-rouge font-mono mb-4">{voteError}</p>
            )}

            <div className="space-y-2">
              {artists.map((artist) => (
                <div
                  key={artist.id}
                  className={`flex items-center gap-4 px-5 py-4 border transition-colors ${
                    artist.isChampion
                      ? "border-rouge/20 bg-rouge/[0.03]"
                      : "border-white/[0.04] bg-noir-card"
                  }`}
                >
                  {/* Rank */}
                  <span className={`font-display text-2xl font-bold w-10 text-center shrink-0 ${
                    artist.rank <= 3 ? "text-rouge" : "text-blanc-muted/30"
                  }`}>
                    {artist.rank}
                  </span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-sm tracking-wider uppercase truncate">
                        {artist.artistName}
                      </h3>
                      {artist.isChampion && (
                        <Crown size={14} className="text-rouge shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-blanc-muted truncate">{artist.city}</p>
                  </div>

                  {/* Votes */}
                  <span className="font-mono text-xs text-blanc-muted shrink-0">
                    {artist.votes} vote{artist.votes !== 1 ? "s" : ""}
                  </span>

                  {/* Vote button */}
                  <button
                    onClick={() => artist.id && handleVote(artist.id)}
                    disabled={votingId === artist.id}
                    className="shrink-0 p-2 border border-white/[0.06] hover:border-rouge/50 hover:text-rouge transition-colors disabled:opacity-30"
                  >
                    <ChevronUp size={16} />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
