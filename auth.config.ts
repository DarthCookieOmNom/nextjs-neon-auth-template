import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("\n\n=== SIGN-IN CALLBACK START ===");
      console.log("User object:", JSON.stringify(user, null, 2));
      console.log("Account object:", JSON.stringify(account, null, 2));
      console.log("Profile object:", JSON.stringify(profile, null, 2));

      const allowedEmail = process.env.ALLOWED_USER_EMAIL?.trim().toLowerCase();
      console.log("Environment ALLOWED_USER_EMAIL:", {
        exists: !!process.env.ALLOWED_USER_EMAIL,
        raw: process.env.ALLOWED_USER_EMAIL,
        processed: allowedEmail,
      });

      if (!allowedEmail) {
        console.error("❌ ALLOWED_USER_EMAIL is not set");
        return false;
      }

      const userEmail = user.email?.trim().toLowerCase();

      console.log("Email comparison:", {
        userEmail,
        allowedEmail,
        match: userEmail === allowedEmail,
        userEmailLength: userEmail?.length,
        allowedEmailLength: allowedEmail?.length,
      });

      // Nur erlauben, wenn die E-Mail übereinstimmt (case-insensitive)
      if (userEmail === allowedEmail) {
        console.log("✅ Sign-in ALLOWED");
        return true;
      }

      // Zugriff verweigern für alle anderen
      console.log("❌ Sign-in DENIED - email mismatch");
      return false;
    },
    async jwt({ token, user, trigger }) {
      console.log("JWT callback called:", { trigger, hasUser: !!user, hasToken: !!token });
      if (user) {
        console.log("JWT: Adding user to token:", user.email);
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback called:", { hasSession: !!session, hasToken: !!token });
      if (token && session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
        console.log("Session populated with email:", session.user.email);
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback:", { url, baseUrl });

      // Nach erfolgreichem Login zum Dashboard
      if (url.startsWith(baseUrl)) {
        return url;
      }

      // Standardmäßig zum Dashboard
      return `${baseUrl}/dashboard`;
    },
  },
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
} satisfies NextAuthConfig;
