
CREATE TABLE "public"."user" ("id" uuid NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "role" Text NOT NULL, "token_counter" Text[] NOT NULL, PRIMARY KEY ("id") , UNIQUE ("email"), UNIQUE ("id"));

CREATE TABLE "public"."class" ("id" uuid NOT NULL, "name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("name"));

CREATE TABLE "public"."enroll" ("user_id" uuid NOT NULL, "class_id" uuid NOT NULL, PRIMARY KEY ("user_id","class_id") , FOREIGN KEY ("class_id") REFERENCES "public"."class"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE cascade ON DELETE cascade);

alter table "public"."class" alter column "id" set default gen_random_uuid();

alter table "public"."user" alter column "id" set default gen_random_uuid();

CREATE TABLE "public"."user_role" ("role" text NOT NULL, PRIMARY KEY ("role") );

alter table "public"."user_role" rename column "role" to "value";

INSERT INTO "public"."user_role"("value") VALUES (E'student');

INSERT INTO "public"."user_role"("value") VALUES (E'teacher');

alter table "public"."user" drop column "password" cascade;

CREATE TABLE "public"."classes" ("id" text NOT NULL, PRIMARY KEY ("id") );

DROP table "public"."classes";

alter table "public"."class" rename to "Classes";

alter table "public"."enroll" rename to "StudentEnrolls";

alter table "public"."user" rename to "Users";

alter table "public"."Users" add column "password" text
 not null;

ALTER TABLE "public"."Users" ALTER COLUMN "token_counter" TYPE text[];
alter table "public"."Users" rename column "token_counter" to "tokenCounter";

alter table "public"."Users" add column "refreshToken" Text[]
 null;

ALTER TABLE "public"."Users" ALTER COLUMN "refreshToken" TYPE text[];
alter table "public"."Users" rename column "refreshToken" to "refreshTokens";

alter table "public"."StudentEnrolls" rename column "user_id" to "studentId";

alter table "public"."StudentEnrolls" rename column "class_id" to "classId";

ALTER TABLE "public"."Users" ALTER COLUMN "tokenCounter" TYPE text;

alter table "public"."Users" add column "name" text
 not null;

alter table "public"."Users" drop column "tokenCounter" cascade;

alter table "public"."Users" add column "tokenCounter" integer
 null default '0';
