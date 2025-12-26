import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-secondary/20">
        <h1 className="text-4xl font-bold text-white mb-4">
          Dashboard
        </h1>
        <p className="text-xl text-white/80 mb-6">
          Willkommen, {session.user.name || session.user.email}!
        </p>
        <div className="flex items-center space-x-4">
          {session.user.image && (
            <img
              src={session.user.image}
              alt={session.user.name || "User"}
              className="w-16 h-16 rounded-full border-2 border-secondary"
            />
          )}
          <div>
            <p className="text-white font-semibold">{session.user.name}</p>
            <p className="text-white/60 text-sm">{session.user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-secondary/20">
          <h2 className="text-2xl font-bold text-secondary mb-2">0</h2>
          <p className="text-white/80">Aktivitäten</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-secondary/20">
          <h2 className="text-2xl font-bold text-secondary mb-2">0</h2>
          <p className="text-white/80">Veranstaltungen</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-secondary/20">
          <h2 className="text-2xl font-bold text-secondary mb-2">0</h2>
          <p className="text-white/80">Teams</p>
        </div>
      </div>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Abmelden
        </button>
      </form>
    </div>
  );
}
