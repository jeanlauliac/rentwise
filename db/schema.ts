import { pgTable, varchar, timestamp, uuid } from "drizzle-orm/pg-core";
import { authUsers } from "drizzle-orm/supabase";

// FIXME: maybe enable RLS for this table, see https://orm.drizzle.team/docs/rls
// and https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/supabase/rls.ts
// and https://github.com/rphlmr/drizzle-supabase-rls/blob/main/database/schema.ts
// Right this moment it's not absolutely required because I'm doing only
// server-side fetches and rendering, and I disabled the Supabase Data API.
//
export const landlords = pgTable("landlords", {
  id: uuid("id")
    .primaryKey()
    .references(() => authUsers.id, {
      onDelete: "cascade",
    }),
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
