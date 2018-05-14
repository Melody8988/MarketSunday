# MarketSunday
Have you ever thought of starting a small buisness on the side or selling hand-made items as a hobby, to fundraise or just to make some extra cash? You might have thought of going to a handmade marketplace like Etsy, but what if you just want to display your products quickly, update the description, and view what other's are saying about what you've made? 

The app MarketSunday gives artists and small entrepreneurs their own simple, easy space, to show what they've made and get feedback from potiential buyers. 

# Built With
* Express
* Filestack image upload API
* Material-UI
* Node.js
* Passport.js
* PostgreSQL
* React, Redux
* SweetAlerts


# Database

```SQL
--LOGIN TABLE
CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);
--GALLERYITEMS TABLE
CREATE TABLE "galleryitems" (
  "id" serial primary key,
  "title" varchar(120),
  "image_url" varchar(480),
  "description" varchar (500)
  );
--VIEWERMESSAGES TABLE
CREATE TABLE "viewermessages" (
  "id" serial primary key,
  "date" date not null default CURRENT_DATE,
  "name" varchar(120) NOT NULL, CHECK (name <> ''),
  "email" varchar(480) NOT NULL, CHECK (name <> ''),
  "message" varchar (500) NOT NULL, CHECK (name <> ''),
  "resolved" boolean default false, NOT NULL
  "galleryitems_id" integer NOT NULL REFERENCES galleryitems
);
```

![Screenshot](FrontPage.png)

## Heroku

