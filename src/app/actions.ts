"use server";

import { db } from "@/db";
import { Feedbacks, Messages } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { randomUUID } from "crypto";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const BASE_URL = "http://localhost:3000/feedback";
// const BASE_URL = "https://fydbox.vercel.app/feedback";

export async function generateLinkAction(formData: FormData) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const name = formData.get("name") as string;
  const feedbackId = randomUUID();
  const feedbackLink = `${BASE_URL}/${feedbackId}`;

  const results = await db
    .insert(Feedbacks)
    .values({
      name,
      feedbackLink,
      id: feedbackId,
      status: "active",
      userId: userId,
    })
    .returning({
      name: Feedbacks.name,
      id: Feedbacks.id,
      link: Feedbacks.feedbackLink,
    });
  // console.log(feedbackLink);
  console.log("FEEDBACK RESULTS", results);
  revalidatePath("/dashboard/create", "page");
  return results[0];
}

// delete feedback
export async function deleteFeedbackAction(formData: FormData) {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  const feedbackId = formData.get("id") as string;

  await db.delete(Messages).where(eq(Messages.feedbackId, feedbackId));

  const results = await db
    .delete(Feedbacks)
    .where(and(eq(Feedbacks.id, feedbackId), eq(Feedbacks.userId, userId)));

  console.log("DELETE RESULTS", results);
  redirect("/dashboard");
}

// change status (expire the link if status is inactive)
export async function changeStatusAction(formData: FormData): Promise<void> {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  const feedbackId = formData.get("id") as string;
  const status = formData.get("status") as "active" | "inactive";

  const feedbackLink = status === "active" ? `${BASE_URL}/${feedbackId}` : null;

  const results = await db
    .update(Feedbacks)
    .set({ status, feedbackLink })
    .where(and(eq(Feedbacks.id, feedbackId), eq(Feedbacks.userId, userId)))
    .returning({
      id: Feedbacks.id,
      status: Feedbacks.status,
      feedbackLink: Feedbacks.feedbackLink,
    });

  console.log("STATUS CHANGE RESULTS", results);
  revalidatePath(`/dashboard/chats/${feedbackId}`, "page");
}

export async function submitFeedbackAction(formData: FormData): Promise<void> {
  const feedback = formData.get("feedback") as string;
  const feedbackId = formData.get("feedbackId") as string;

 try {
  const results = await db.insert(Messages).values({
    feedbackId: feedbackId,
    message: [feedback],
  
  });
  console.log(results);
 } catch (error) {
  console.log("feedback submission error", error)
 }
  
  redirect(`/feedback/${feedbackId}/sent`);
}
