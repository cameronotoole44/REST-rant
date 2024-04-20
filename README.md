# Project REST-Rant

REST-Rant is an app where users can review restaurants.

- work in progress, check back soon!

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

- TBD

## DATA

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

### Rants

| Field    | Type                  |
| -------- | --------------------- |
| \_id     | Object ID             |
| place_id | ref(places) Object_Id |
| rant     | String                |
| rating   | String                |
| comment  | String                |
| reviewer | String                |
