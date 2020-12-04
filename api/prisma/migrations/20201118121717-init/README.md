# Migration `20201118121717-init`

This migration has been generated at 11/18/2020, 12:17:17 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Builds" DROP CONSTRAINT "Builds_UserId_fkey"

ALTER TABLE "builds" DROP CONSTRAINT "builds_userId_fkey"

CREATE TABLE "Link" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

DROP TABLE "ABC"

DROP TABLE "Builds"

DROP TABLE "User"

DROP TABLE "Users"

DROP TABLE "builds"

DROP TABLE "user"

DROP TABLE "users"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201118121717-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Link {
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  description String
+  url         String
+}
```


