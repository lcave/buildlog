# Migration `20201118125218`

This migration has been generated at 11/18/2020, 12:52:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Link" DROP CONSTRAINT "Link_userId_fkey"

ALTER TABLE "Link" DROP COLUMN "userId",
ADD COLUMN     "postedById" INTEGER

ALTER TABLE "Link" ADD FOREIGN KEY("postedById")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201118123003..20201118125218
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -14,10 +14,10 @@
   id          Int      @id @default(autoincrement())
   createdAt   DateTime @default(now())
   description String
   url         String
-  User        User?    @relation(fields: [userId], references: [id])
-  userId      Int?
+  postedBy    User?    @relation(fields: [postedById], references: [id])
+  postedById  Int?
 }
 model User {
   id       Int    @id @default(autoincrement())
```


