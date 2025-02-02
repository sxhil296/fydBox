import { pgTable, timestamp, text, pgEnum } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("feed_status", ["active", "inactive"]);

export const Feedbacks = pgTable("feedbacks", {
  id: text("id").primaryKey().notNull(),
  createTs: timestamp("createTs").defaultNow().notNull(),
  name: text("name").notNull(),
  feedbackLink: text("feedbackLink").notNull(),
  status: statusEnum("status").notNull(),
  userId: text("userId").notNull()
});
