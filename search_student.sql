CREATE OR REPLACE FUNCTION search_student(searchString TEXT)
    RETURNS TEXT[]
    LANGUAGE plpgsql
AS
$$
DECLARE
    userName TEXT[];
BEGIN
    SELECT array_agg("Users"."name") into userName
    FROM "Users"
    WHERE UPPER("Users"."name") LIKE UPPER(CONCAT('%', searchstring, '%'));

    return userName;
END;
$$;

SELECT search_student('Ha')