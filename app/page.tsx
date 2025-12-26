import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SignInButton } from "@/components/SignInButton";

export default async function Home() {
  const session = await auth();

  console.log("Homepage - Session check:", {
    hasSession: !!session,
    user: session?.user?.email,
  });

  // Wenn bereits eingeloggt, zum Dashboard weiterleiten
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-12 max-w-2xl w-full border border-secondary/20">
        <h1 className="text-5xl font-bold text-white mb-6 text-center">
          Willkommen zur <span className="text-secondary">Sports App</span>
        </h1>
        <p className="text-xl text-white/80 text-center mb-8">
          Melden Sie sich an, um fortzufahren.
        </p>
        <div className="flex justify-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
