"use server";

import { revalidatePath } from "next/cache";
import db from "@/db";
import { customColumnsTable, moleculesTable } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function createCustomColumn(formData: FormData) {
  const title = formData.get("title") as string;
  const dataType = formData.get("dataType") as string;
  if (!title || !dataType) return;

  await db.insert(customColumnsTable).values({ title, dataType });

  // At this point we could fill up all rows in the molecule DB with random
  // values but I felt it wasn't really meaningful for this demo.

  // Revalidate the cache (refresh the page seamlessly)
  revalidatePath("/");
}

export async function deleteCustomColumn(id: number) {
  await db.delete(customColumnsTable).where(eq(customColumnsTable.id, id));

  // TODO: Delete field from all molecules.

  revalidatePath("/");
}

export async function updateCustomColumnValue(
  zincId: string,
  columnId: number,
  value: string | number
) {
  // TODO: do some validation of the data type.

  await db
    .update(moleculesTable)
    .set({
      customData: sql`jsonb_set("customData", array[${columnId.toString()}], 
        ${JSON.stringify(value)}::jsonb)`,
    })
    .where(eq(moleculesTable.zincId, zincId));
}
