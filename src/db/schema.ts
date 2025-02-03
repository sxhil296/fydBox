import {
  pgTable,
  timestamp,
  text,
  pgEnum,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("linkfeedback_status", ["active", "inactive"]);

export const Feedbacks = pgTable("feedbacks", {
  id: text("id").primaryKey().notNull(),
  createTs: timestamp("createTs").defaultNow().notNull(),
  name: text("name").notNull(),
  feedbackLink: text("feedbackLink"),
  status: statusEnum("status").notNull(),
  userId: text("userId").notNull(),
});

export const Messages = pgTable("messages", {
  id: text("id").primaryKey().notNull(),
  createTs: timestamp("createTs").defaultNow().notNull(),
  message: text("message").notNull(),
  feedbackId: text("feedbackId")
    .notNull()
    .references(() => Feedbacks.id),
});
