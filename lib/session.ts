"use client";

import { getSupabaseBrowser } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export type SessionInfo = {
  mode: "supabase" | "guest";
  name: string;
  userId: string | null;
};

/** Dispatched whenever sign-in state changes so the header can refresh. */
export const SESSION_EVENT = "maktabah:session-changed";

export const GUEST_NAME_KEY = "maktabah-guest-name";

export function notifySessionChanged() {
  window.dispatchEvent(new Event(SESSION_EVENT));
}

/**
 * Resolve the current session. With Supabase configured this is the real
 * auth session; otherwise a localStorage "guest" identity (demo mode).
 */
export async function getSessionInfo(): Promise<SessionInfo | null> {
  const supabase = getSupabaseBrowser();
  if (supabase) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return null;
    const name =
      (session.user.user_metadata?.name as string | undefined) ??
      session.user.email?.split("@")[0] ??
      "Student";
    return { mode: "supabase", name, userId: session.user.id };
  }
  if (typeof window === "undefined") return null;
  const guestName = localStorage.getItem(GUEST_NAME_KEY);
  if (guestName) return { mode: "guest", name: guestName, userId: null };
  return null;
}

export function startGuestSession(name: string) {
  localStorage.setItem(GUEST_NAME_KEY, name || "Student");
  notifySessionChanged();
}

export async function signOut() {
  const supabase = getSupabaseBrowser();
  if (supabase) {
    await supabase.auth.signOut();
  }
  if (!isSupabaseConfigured) {
    localStorage.removeItem(GUEST_NAME_KEY);
  }
  notifySessionChanged();
}
