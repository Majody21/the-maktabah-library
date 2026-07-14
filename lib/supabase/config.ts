export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/**
 * When Supabase credentials are absent the app runs in demo mode: content is
 * served from the bundled seed data and user state lives in localStorage.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
