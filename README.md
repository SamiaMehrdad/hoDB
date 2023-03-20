# MSK hoduno start

## TO RUN PROJECT:

1. Create a .env file in the root folder and add values for the following variables : NODE_ENV (Set this to = development), PORT (Set this to = 5000 NOTE: Whatever you set this to must be the same in frontend package.json proxy field example: "proxy":"http://localhost:5000"), MONGODB_URI (Set this to the mongoDB connection string), JWT_SECRET (Set this to a random string), JWT_EXPIRES_IN (You can Set this to a number of days(d) e.g 30d).
2. Run npm install in root folder.
3. Run cd frontend to enter the frontend folder.
4. Run npm install in frontend folder.
5. Run cd .. to return to the root folder.
6. Run npm run dev to start the server and client concurrently.

---

## COMMENTS:
This principals should be followed for coding:
* **`/frontend/src/shares` folder includes common utilities and definitions.** 
    *  `hfixes.js` contains fixed values for Enum, Finance, Review, Report those are accessible through `HF` object. Both **Frontend** and  **Backend** should use this file.
    * `componentStore.js` is the single source of React component importing. All components should be registered to this file and only this file should be imported anywhere need a component.
    * `state.js` Exports the `ST` global object that stores all states. <u>States should be accessed through `set()` , `reset()`, `toggle()` and `get()` , not by direct assigning.</u>

* Naming principals should be followed. Principals are accessible through [this file](https://docs.google.com/document/d/1TrrNznLK40JLSCJJ4q-oM34frFMPv7ZGrOF00abycD4/edit?usp=sharing).