ALTER TABLE "feedbacks" ADD COLUMN "messages" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "feedbacks" DROP COLUMN "feedbacks";