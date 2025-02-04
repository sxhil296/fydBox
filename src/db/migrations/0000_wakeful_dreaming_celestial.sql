CREATE TYPE "public"."fyd_status" AS ENUM('active', 'inactive');--> statement-breakpoint
CREATE TABLE "feedbacks" (
	"id" text PRIMARY KEY NOT NULL,
	"createTs" timestamp DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"feedbackLink" text,
	"status" "fyd_status" NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"createTs" timestamp DEFAULT now() NOT NULL,
	"message" jsonb,
	"feedbackId" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_feedbackId_feedbacks_id_fk" FOREIGN KEY ("feedbackId") REFERENCES "public"."feedbacks"("id") ON DELETE no action ON UPDATE no action;