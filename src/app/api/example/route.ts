import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();
  if (session) {
    return Response.json({ data: session });
  } else {
    return Response.json({ message: "Unauthorized" });
  }
}
