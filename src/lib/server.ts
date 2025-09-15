// lib/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SP_URL!,
    process.env.NEXT_PUBLIC_SP_ANON!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set() {
          // not available in server components
        },
        remove() {
          // not available in server components
        },
      },
    }
  );
}
