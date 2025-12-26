import { handlers } from "@/auth";
import { NextRequest } from "next/server";

async function wrappedGET(req: NextRequest) {
  console.log("NextAuth GET handler called:", {
    url: req.url,
    pathname: req.nextUrl.pathname,
    searchParams: Object.fromEntries(req.nextUrl.searchParams),
  });
  try {
    const response = await handlers.GET(req);
    console.log("NextAuth GET response:", {
      status: response.status,
      headers: Object.fromEntries(response.headers),
    });
    return response;
  } catch (error) {
    console.error("NextAuth GET error:", error);
    throw error;
  }
}

async function wrappedPOST(req: NextRequest) {
  console.log("NextAuth POST handler called:", {
    url: req.url,
    pathname: req.nextUrl.pathname,
  });
  try {
    const response = await handlers.POST(req);
    console.log("NextAuth POST response:", {
      status: response.status,
    });
    return response;
  } catch (error) {
    console.error("NextAuth POST error:", error);
    throw error;
  }
}

export { wrappedGET as GET, wrappedPOST as POST };
