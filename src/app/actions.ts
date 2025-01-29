"use server";

import { redirect } from "next/navigation";

export async function generateLinkAction(formData: FormData) {
  const name = formData.get("name") as string;
  //   await new Promise((resolve) => {
  //     setTimeout(resolve, 2000);
  //   });
  console.log(name);
}

export async function submitFeedbackAction(formData: FormData) {
  const subject = formData.get("subject") as string;
  const feedback = formData.get("feedback") as string;
  //   await new Promise((resolve) => {
  //     setTimeout(resolve, 2000);
  //   });
  console.log(formData);
  redirect("/");
}
