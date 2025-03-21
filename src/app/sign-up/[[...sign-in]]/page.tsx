"use client";

import { Button } from "@/components/ui/button";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { MessageCircle } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="grid w-full flex-grow items-center min-h-screen px-4 sm:justify-center">
      <SignUp.Root>
        <SignUp.Step
          name="start"
          className="w-full space-y-6  px-4 py-10  ring-black/5 sm:w-96 sm:px-8 border rounded-lg"
        >
          <header className="flex flex-col justify-center items-center">
            <MessageCircle className="w-9 h-9" />
            <h1 className="mt-4 text-xl font-medium tracking-tight ">
              Sign Up to FydBox
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <div className="space-y-4">
            <Clerk.Field name="emailAddress" className="space-y-2">
              <Clerk.Label className="text-sm font-medium ">Email</Clerk.Label>
              <Clerk.Input
                type="email"
                required
                placeholder="Email"
                className="w-full border border-neutral-600  p-2 rounded-md text-sm/6  outline-none placeholder:text-neutral-400 hover:border-neutral-400 focus:border-neutral-300 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Label className="text-sm font-medium ">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                placeholder="Password"
                className="w-full border border-neutral-600  p-2 rounded-md text-sm/6  outline-none placeholder:text-neutral-400 hover:border-neutral-400 focus:border-neutral-300 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <SignUp.Captcha />
          <SignUp.Action submit asChild>
            <Button className="w-full">Sign Up</Button>
          </SignUp.Action>

          <p className="text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className=" text-neutral-300  underline-offset-4 outline-none  hover:underline focus-visible:underline"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>
        <SignUp.Step
          name="verifications"
          className="w-full space-y-6 rounded-2xl  px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
        >
          <header className="flex flex-col justify-center items-center">
            <MessageCircle className="w-9 h-9" />
            <h1 className="mt-4 text-xl font-medium tracking-tight ">
              Verify Email Code
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <SignUp.Strategy name="email_code">
            <Clerk.Field name="code" className="space-y-2">
              <Clerk.Label className="text-sm font-medium ">
                Email code
              </Clerk.Label>
              <Clerk.Input
                type="otp"
                required
                className="w-full border border-neutral-600  p-2 rounded-md text-sm/6  outline-none placeholder:text-neutral-400 hover:border-neutral-400 focus:border-neutral-300 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <SignUp.Action submit asChild>
              <Button>Verify</Button>
            </SignUp.Action>
          </SignUp.Strategy>
          <p className="text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className=" text-neutral-300  underline-offset-4 outline-none  hover:underline focus-visible:underline"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}
