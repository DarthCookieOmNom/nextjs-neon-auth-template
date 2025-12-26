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
        console.error("ALLOWED_USER_EMAIL environment variable is not set");
        return false;
      }

      const userEmail = user.email?.trim().toLowerCase();

      // Nur erlauben, wenn die E-Mail übereinstimmt (case-insensitive)
      return userEmail === allowedEmail;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Nach erfolgreichem Login zum Dashboard
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return `${baseUrl}/dashboard`;
    },
  },
  pages: {
    error: "/auth/error",
  },
} satisfies NextAuthConfig;
