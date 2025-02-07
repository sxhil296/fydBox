import { sql } from "drizzle-orm";
import {
  pgTable,
  timestamp,
  text,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("fydboxlink_status", ["active", "inactive"]);

export const Feedbacks = pgTable("feedbacks", {
  id: text("id").primaryKey().notNull(),
  createTs: timestamp("createTs").defaultNow().notNull(),
  name: text("name").notNull(),
  feedbackLink: text("feedbackLink"),
  status: statusEnum("status").notNull(),
  privacy: text("privacy").notNull(),
  userId: text("userId").notNull(),
  messages: jsonb("messages")
    .$type<Array<{ message: string; time: string }>>()
    .default(sql`'[]'::jsonb`)
    .notNull(),
});


// export const Messages = pgTable("messages", {
//   id: serial("id").primaryKey().notNull(),
//   createTs: timestamp("createTs").defaultNow().notNull(),
//   message: jsonb("message").$type<string[]>(),
//   feedbackId: text("feedbackId")
//     .notNull()
//     .references(() => Feedbacks.id),
// });
