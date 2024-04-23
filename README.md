# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## ROUTES

| Method | Path                       | Purpose                                                                        |
| ------ | -------------------------- | ------------------------------------------------------------------------------ |
| GET    | `/`                        | The home page                                                                  |
| GET    | `/places`                  | Index page listing all places                                                  |
| GET    | `/places/new`              | New form for a place                                                           |
| POST   | `/places`                  | Create a new place                                                             |
| GET    | `/places/:id`              | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET    | `/places/:id/edit`         | Edit form for a place                                                          |
| PUT    | `/places/:id`              | Make changes to existing place                                                 |
| DELETE | `/places/:id`              | Delete a place                                                                 |
| POST   | `/places/:id/rant`         | Add rant to a place                                                            |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant                                                                  |

---

## USER STORIES & WIREFRAMES

- "As a food enthusiast, I want to effortlessly discover, rate, and review restaurants nearby to share my dining experiences with others and make informed decisions about where to eat next."
- "As a traveler exploring new cities, I desire a convenient app to quickly find and evaluate local restaurants, ensuring memorable culinary experiences during my adventures."
- "As a software engineer, I plan to develop a restaurant app with intuitive user interfaces, seamless navigation, and backend architecture, empowering users to effortlessly share and explore culinary experiences."

## DATA
- a work in progress, check back soon!
- 
---

### Places

| Field    | Type      |
| -------- | --------- |
| \_id     | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |

---
