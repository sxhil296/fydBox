"use server";

import { db } from "@/db";
import { Feedbacks } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { randomUUID } from "crypto";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const BASE_URL = "http://localhost:3000/feedback";

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

  const results = await db
    .delete(Feedbacks)
    .where(and(eq(Feedbacks.id, feedbackId), eq(Feedbacks.userId, userId)));

  console.log("DELETE RESULTS", results);
  revalidatePath("/dashboard", "page");
}

export async function submitFeedbackAction(formData: FormData) {
  const subject = formData.get("subject") as string;
  const feedback = formData.get("feedback") as string;
  //   await new Promise((resolve) => {
  //     setTimeout(resolve, 2000);
  //   });
  console.log(subject, feedback);
  redirect("/");
}
