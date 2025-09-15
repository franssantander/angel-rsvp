// app/dashboard/page.tsx
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 🚨 Redirect if no session
  if (!session) {
    redirect("/login");
  }

  // ✅ Fetch RSVP data
  const { data: rsvpList, error } = await supabase
    .from("rsvps")
    .select("id, full_name, attending");

  if (error) {
    console.error("Error fetching RSVPs:", error.message);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Welcome, {session.user.email}!</p>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Full Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Attending
            </th>
          </tr>
        </thead>
        <tbody>
          {rsvpList?.map((row, idx) => (
            <tr key={row.id}>
              <td className="border border-gray-300 px-4 py-2">{idx + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.full_name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.attending ? "✅ Yes" : "❌ No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
