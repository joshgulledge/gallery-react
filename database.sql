CREATE TABLE "pictures" (
  "id" SERIAL PRIMARY KEY,
  "path" VARCHAR (1024) NOT NULL,
  "description" VARCHAR (1024) NOT NULL,
  "likes" INTEGER NOT NULL
);

INSERT INTO "pictures" 
('path', 'desciption', 'likes')
VALUES
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0 ),
('images/banana.jpg', 'Photo of a great banana', 0),
('images/mountains.jpg', 'Photo of Beautiful Mountains', 0),
('images/tacosnstuff.jpg', 'Photo of the best food ever', 0);

