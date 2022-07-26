-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE FUNCTION class_check_empty_name()
--     RETURNS trigger AS $$
--     BEGIN
--         IF coalesce(TRIM(NEW.name), '') = '' THEN RAISE EXCEPTION 'class name must be not empty';
--         END IF;
--         RETURN NEW;
--     END
--     $$ LANGUAGE plpgsql;
-- CREATE TRIGGER is_empty_name
-- BEFORE INSERT OR UPDATE ON "Classes" FOR EACH ROW EXECUTE PROCEDURE class_check_empty_name();
--
-- CREATE FUNCTION user_check_empty_values()
--     RETURNS trigger AS $$
--     BEGIN
--         IF coalesce(TRIM(NEW.name), '') = '' THEN RAISE EXCEPTION 'Name must be not empty';
--         ELSIF coalesce(TRIM(NEW.email), '') = '' THEN RAISE EXCEPTION 'email must be not empty';
--         ELSIF coalesce(TRIM(NEW.role), '') = '' THEN RAISE EXCEPTION 'Role name must be not empty';
--         END IF;
--         RETURN NEW;
--     END
--     $$ LANGUAGE plpgsql;
-- CREATE TRIGGER is_empty_values
-- BEFORE INSERT OR UPDATE ON "Users" FOR EACH ROW EXECUTE PROCEDURE user_check_empty_values();
DROP TRIGGER is_empty_values
DROP TRIGGER is_empty_name
DROP FUNCTION class_check_empty_name
DROP FUNCTION user_check_empty_values