import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: 'auth/login',
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = await  auth?.user;
      console.log(auth)
      const isOnDashboard = nextUrl.pathname.startsWith('/home');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/home', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;