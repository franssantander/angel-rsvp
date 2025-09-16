"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import RsvpTable from "./_component/RvspTable";
import { Button } from "@/components/ui/button";

interface SessionUser {
  id: string;
  email: string | undefined;
}

interface Session {
  user: SessionUser;
}

interface Rsvp {
  id: number;
  full_name: string;
  attending: boolean;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SP_URL!,
  process.env.NEXT_PUBLIC_SP_ANON!
);

export default function DashboardPage() {
  const router = useRouter();

  const [session, setSession] = useState<Session | null>(null);
  const [rsvpList, setRsvpList] = useState<Rsvp[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSessionAndData = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/login");
        return;
      }

      setSession({
        user: { id: data.session.user.id, email: data.session.user.email },
      });

      const { data: list } = await supabase
        .from("rsvps")
        .select("id, full_name, attending");

      setRsvpList(list as Rsvp[]);
    };

    fetchSessionAndData();
  }, [router]);

  if (!session) return null;

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="md:p-6 w-full h-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button size="sm" variant="outline" onClick={handleLogout} disabled={loading}>
          {loading ? "Logging out..." : "Logout"}
        </Button>
      </div>
      <p className="mb-6">Welcome, {session.user.email}!</p>
      <RsvpTable rsvpList={rsvpList} />
    </div>
  );
}
