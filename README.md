# REST-Rant

## Description

REST-Rant is a full-stack web application that lets food enthusiasts share their dining experiences. Users can add, rate, and review restaurants, making it a perfect platform for honest food critics and casual diners alike. Share your culinary adventures, discover new local spots, and join the community of food lovers!

_Note: This project was built as part of my web development journey and serves for educational purposes._

## Features

- Create and view restaurant listings
- Share detailed reviews or quick "rants" about dining experiences
- Rate restaurants with a 1-5 star system
- Add photos of restaurants and dishes
- Browse local restaurant recommendations
- Edit or remove your own reviews and listings

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Additional Tools**:
  - dotenv (environment variables)
  - Express React Views (templating)

## Routes Table

| Method | Path                       | Purpose                                                                        |
| ------ | -------------------------- | ------------------------------------------------------------------------------ |
| GET    | `/`                        | Home page                                                                      |
| GET    | `/places`                  | Index page listing all places                                                  |
| GET    | `/places/new`              | New form for a place                                                           |
| POST   | `/places`                  | Create a new place                                                             |
| GET    | `/places/:id`              | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET    | `/places/:id/edit`         | Edit form for a place                                                          |
| PUT    | `/places/:id`              | Make changes to existing place                                                 |
| DELETE | `/places/:id`              | Delete a place                                                                 |
| POST   | `/places/:id/rant`         | Add rant to a place                                                            |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant                                                                  |
