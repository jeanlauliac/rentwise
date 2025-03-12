import { pgTable, varchar, timestamp, serial } from "drizzle-orm/pg-core";

export const landlordsTable = pgTable("landlords", {
  id: serial("id").primaryKey(),
  name: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  addressLine1: varchar({ length: 200 }).notNull(),
  addressLine2: varchar({ length: 200 }),
  city: varchar({ length: 100 }).notNull(),
  postcode: varchar({ length: 10 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export type Landlord = typeof landlordsTable.$inferSelect;
export type NewLandlord = typeof landlordsTable.$inferInsert;
