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
    async signIn({ user }) {
      const allowedEmail = process.env.ALLOWED_USER_EMAIL?.trim().toLowerCase();

      if (!allowedEmail) {
        console.error("ALLOWED_USER_EMAIL is not set");
        return false;
      }

      const userEmail = user.email?.trim().toLowerCase();

      console.log("Sign-in attempt:", {
        userEmail,
        allowedEmail,
        match: userEmail === allowedEmail,
      });

      // Nur erlauben, wenn die E-Mail übereinstimmt (case-insensitive)
      if (userEmail === allowedEmail) {
        return true;
      }

      // Zugriff verweigern für alle anderen
      return false;
    },
    async redirect({ url, baseUrl }) {
      // Nach dem Login zum Dashboard weiterleiten
      if (url.includes('/api/auth/signin')) {
        return `${baseUrl}/dashboard`;
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
} satisfies NextAuthConfig;
