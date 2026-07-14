"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { getSupabaseBrowser } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { notifySessionChanged, startGuestSession } from "@/lib/session";
import { LogoIcon } from "@/components/ui/Logo";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const isLogin = mode === "login";
  const nextPath = searchParams.get("next") ?? (isLogin ? "/dashboard" : "/roadmap");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const supabase = getSupabaseBrowser();
      if (!supabase) {
        // Demo mode: create a local guest identity instead.
        startGuestSession(name.trim() || "Student");
        router.push(nextPath);
        return;
      }
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name: name.trim() || email.split("@")[0] } },
        });
        if (error) throw error;
        if (!data.session) {
          setNotice(
            "Account created. Please check your email to confirm your address, then sign in."
          );
          setBusy(false);
          return;
        }
      }
      notifySessionChanged();
      router.push(nextPath);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-10 sm:px-6">
      <div className="card p-8">
        <div className="flex flex-col items-center text-center">
          <LogoIcon size={38} />
          <h1 className="mt-4 font-display text-2xl font-semibold">
            {isLogin ? "Welcome back" : "Begin your journey"}
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            {isLogin
              ? "Sign in to continue your study plan."
              : "Create an account to build your study schedule."}
          </p>
        </div>

        {!isSupabaseConfigured && (
          <div className="mt-6 rounded-md border border-line bg-tint px-4 py-3 text-sm text-ink-soft">
            <strong className="font-display text-ink">Demo mode.</strong> Progress
            is saved in this browser only. Enter a name to continue as a guest.
          </div>
        )}

        {notice ? (
          <div className="mt-6 rounded-md border border-forest-soft/40 bg-forest-tint px-4 py-3 text-[0.98rem]">
            {notice}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            {(!isLogin || !isSupabaseConfigured) && (
              <label className="block">
                <span className="mb-1.5 block font-display text-[0.95rem] font-semibold">
                  Your name
                </span>
                <input
                  className="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Abdullah"
                  required={!isSupabaseConfigured}
                  autoComplete="name"
                />
              </label>
            )}
            {isSupabaseConfigured && (
              <>
                <label className="block">
                  <span className="mb-1.5 block font-display text-[0.95rem] font-semibold">
                    Email
                  </span>
                  <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-display text-[0.95rem] font-semibold">
                    Password
                  </span>
                  <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete={isLogin ? "current-password" : "new-password"}
                  />
                </label>
              </>
            )}
            {error && (
              <p className="rounded-md border border-red-800/30 bg-red-900/10 px-3 py-2 text-[0.95rem] text-red-800 dark:text-red-300">
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary w-full" disabled={busy}>
              {busy
                ? "One moment…"
                : isSupabaseConfigured
                  ? isLogin
                    ? "Sign In"
                    : "Create Account"
                  : "Continue as Guest"}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-[0.98rem] text-ink-soft">
          {isLogin ? (
            <>
              New to the library?{" "}
              <Link href="/signup" className="font-semibold text-forest hover:underline">
                Create an account
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-forest hover:underline">
                Sign in
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
