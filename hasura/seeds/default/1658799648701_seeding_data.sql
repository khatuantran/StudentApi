SET check_function_bodies = false;
INSERT INTO public."Classes" (id, name) VALUES ('40d1b9cf-7d90-440a-a93c-97800c2d404a', 'Data structure and algorithms');
INSERT INTO public."Classes" (id, name) VALUES ('602ac118-ffef-44f8-8a53-4fa7d4531ecb', 'Introduce to information technology');
INSERT INTO public."Classes" (id, name) VALUES ('1ba22fe1-018a-40d7-8894-761a5fa9a40c', 'Introduce to machine learning');
INSERT INTO public."Users" (id, name, email, password, role, "refreshTokens", "tokenCounter") VALUES ('150efff9-c772-4099-9ce9-cdd7bb874534', 'Tu Tran', 'tudeptrai@gmail.com', '$2a$10$gPH4H25pc2yaiQcJdAvwzez6kRaJcwS4h5f7oaY5TYwhj9t2AhUL.', 'teacher', NULL, 0);
INSERT INTO public."Users" (id, name, email, password, role, "refreshTokens", "tokenCounter") VALUES ('de20f151-f22e-4aa5-9788-a5f42f69c7fd', 'An Ha', 'hadeptrai@gmail.com', '$2a$10$wNcv4Vq23EcSK3aBQM6qGO/tpxbwi55bp.iAfjlKS7AGW2ZZpuBgm', 'teacher', NULL, 0);
INSERT INTO public."Users" (id, name, email, password, role, "refreshTokens", "tokenCounter") VALUES ('faf58e79-16d9-4e07-8780-9ba3bff5f25a', 'Thai Nguyen', 'thaideptrai@gmail.com', '$2a$10$yXq2LCGeWJRXNz3tecO3.e7qb/Of/fQ1YYgoRC./v20REntlXWp.e', 'student', NULL, 0);
INSERT INTO public."Users" (id, name, email, password, role, "refreshTokens", "tokenCounter") VALUES ('47ec6fda-6dbe-4f6d-963f-f7be917675be', 'Kha Tran', 'khatretrau@gmail.com', '$2a$10$OIBdfw1EkmGJdh/saKcoWuUCZRxROirK8hirzUBW5K5CYGen4q7L.', 'student', NULL, 0);
INSERT INTO public."StudentEnrolls" ("studentId", "classId") VALUES ('47ec6fda-6dbe-4f6d-963f-f7be917675be', '40d1b9cf-7d90-440a-a93c-97800c2d404a');
INSERT INTO public."StudentEnrolls" ("studentId", "classId") VALUES ('150efff9-c772-4099-9ce9-cdd7bb874534', '40d1b9cf-7d90-440a-a93c-97800c2d404a');
INSERT INTO public."StudentEnrolls" ("studentId", "classId") VALUES ('150efff9-c772-4099-9ce9-cdd7bb874534', '1ba22fe1-018a-40d7-8894-761a5fa9a40c');

