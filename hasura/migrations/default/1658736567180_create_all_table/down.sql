
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."Users" add column "tokenCounter" integer
--  null default '1';

alter table "public"."Users" alter column "tokenCounter" drop not null;
alter table "public"."Users" add column "tokenCounter" text;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."Users" add column "name" text
--  not null;

ALTER TABLE "public"."Users" ALTER COLUMN "tokenCounter" TYPE ARRAY;

alter table "public"."StudentEnrolls" rename column "classId" to "class_id";

alter table "public"."StudentEnrolls" rename column "studentId" to "user_id";

alter table "public"."Users" rename column "refreshTokens" to "refreshToken";
ALTER TABLE "public"."Users" ALTER COLUMN "refreshToken" TYPE ARRAY;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."Users" add column "refreshToken" Text[]
--  null;

alter table "public"."Users" rename column "tokenCounter" to "token_counter";
ALTER TABLE "public"."Users" ALTER COLUMN "token_counter" TYPE ARRAY;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."Users" add column "password" text
--  not null;

alter table "public"."Users" rename to "user";

alter table "public"."StudentEnrolls" rename to "enroll";

alter table "public"."Classes" rename to "class";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."classes";

DROP TABLE "public"."classes";

alter table "public"."user" alter column "password" drop not null;
alter table "public"."user" add column "password" text;

DELETE FROM "public"."user_role" WHERE "value" = 'teacher';

DELETE FROM "public"."user_role" WHERE "value" = 'student';

alter table "public"."user_role" rename column "value" to "role";

DROP TABLE "public"."user_role";

ALTER TABLE "public"."user" ALTER COLUMN "id" drop default;

ALTER TABLE "public"."class" ALTER COLUMN "id" drop default;

DROP TABLE "public"."enroll";

DROP TABLE "public"."class";

DROP TABLE "public"."user";
