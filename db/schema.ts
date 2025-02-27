// import {
//   integer,
//   pgTable,
//   varchar,
//   text,
//   real,
//   jsonb,
//   timestamp,
//   serial,
// } from "drizzle-orm/pg-core";

// export const customColumnsTable = pgTable("custom_columns", {
//   id: serial("id").primaryKey(),
//   title: varchar({ length: 100 }).notNull(),
//   dataType: varchar({ length: 20 }).notNull(),
//   createdAt: timestamp().defaultNow().notNull(),
// });

// export const moleculesTable = pgTable("molecules", {
//   zincId: varchar({ length: 16 }).primaryKey(),
//   smiles: text().notNull(),
//   molecularWeight: real().notNull(),
//   logP: real().notNull(),
//   numHeavyAtoms: integer().notNull(),
//   numHBondAcceptors: integer().notNull(),
//   numHBondDonors: integer().notNull(),
//   x: real().notNull(),
//   y: real().notNull(),
//   customData: jsonb().default({}).$type<Record<string, string | number>>(),
// });

// export type Molecule = typeof moleculesTable.$inferSelect;
// export type CustomColumn = typeof customColumnsTable.$inferSelect;
