CREATE TYPE "public"."linkfeed_status" AS ENUM('active', 'inactive');--> statement-breakpoint
CREATE TABLE "feedbacks" (
	"id" text PRIMARY KEY NOT NULL,
	"createTs" timestamp DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"feedbackLink" text,
	"status" "linkfeed_status" NOT NULL,
	"userId" text NOT NULL
);
