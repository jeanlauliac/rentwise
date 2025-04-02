import { pgTable, varchar, timestamp, uuid } from "drizzle-orm/pg-core";
import { authUsers } from "drizzle-orm/supabase";

// FIXME: enable RLS for this table, see https://orm.drizzle.team/docs/rls
// and https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/supabase/rls.ts
export const landlords = pgTable("landlords", {
  id: uuid("id").references(() => authUsers.id, { onDelete: "cascade" }),
  name: varchar({ length: 100 }).notNull(),
  addressLine1: varchar({ length: 200 }).notNull(),
  addressLine2: varchar({ length: 200 }),
  city: varchar({ length: 100 }).notNull(),
  postcode: varchar({ length: 10 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export type Landlord = typeof landlords.$inferSelect;
export type NewLandlord = typeof landlords.$inferInsert;
