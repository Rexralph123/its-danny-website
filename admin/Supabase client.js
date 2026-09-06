/* ══════════════════════════════════════════════════════════
   SUPABASE CLIENT — shared config
   Used by: admin-login.html, admin-dashboard.html,
            index.html, shop.html

   Fill in your project's URL + anon (public) key below.
   Find them in Supabase Dashboard → Project Settings → API.

   Safe to expose in frontend code: the ANON key is meant to be
   public — it can only do what your Row Level Security (RLS)
   policies allow (see supabase-schema.sql). NEVER put the
   "service_role" key in any file that reaches the browser.
   ══════════════════════════════════════════════════════════ */

const SUPABASE_URL = "https://silamqlwnfukivplfguq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_JH8wkCL9xxiNAo5aMhQOxw_4zvoG_DD";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);