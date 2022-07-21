CREATE VIEW student_stats AS 
SELECT "Users"."id" AS student_id, 
	COUNT("StudentEnrolls"."classId") AS register_class_count, 
	( 
		(
			SELECT COUNT("Classes"."id")
			FROM "Classes"
		) - COUNT("StudentEnrolls"."classId")
	) AS unregister_class_count 
FROM "Users"
LEFT JOIN "StudentEnrolls" ON  "Users"."id" = "StudentEnrolls"."studentId"
GROUP BY "Users"."id";