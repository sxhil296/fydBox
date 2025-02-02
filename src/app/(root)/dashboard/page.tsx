import FeedbackTable from "@/components/dashboard/feedbackTable";
import GenerateLinkForm from "@/components/dashboard/generateLinkForm";
import { db } from "@/db";
import { Feedbacks } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) return;
  const feedbacks = await db
    .select()
    .from(Feedbacks)
    .where(eq(Feedbacks.userId, userId));
  console.log("Dashbaord results>>>", feedbacks);

  return (
    <div className="my-10 w-full flex flex-col items-center gap-4 md:gap-10">
      <GenerateLinkForm />
      <FeedbackTable  feedbacks={feedbacks}/>
    </div>
  );
}
