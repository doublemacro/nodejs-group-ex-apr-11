# Getting started:
Clone this repository and run

    npm install

Inside the repository.

Start editing the **src/server/server.ts**.

Run:

    npm run dev

This will start the server app with hot reload enabled.

Express server needs to be created, to run on **localhost:3001**.

You should use:

    import cors from "cors";
    app.use(cors());

to enable CORS for the express.js server, so that it accepts http requests from the react app.

## Tasks:

Create an express.js server.
Create create, read, update and delete methods for a "Post" entity, that looks like this:
    {
        id: 0,
        text: "Text 1 here"
    }

Send it to the express.js server using a http POST request, and use an http GET request to get all posts sent to the server. The posts will be stored in a simple array in the server.

To make HTTP requests, use fetch like so:

    // a GET request:

    const response = await fetch(API_BASE_URL + "api/posts", {
        method: "GET",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
    });
    response.json(); // will give you the json response from this request
    
    // a POST request:
    const response = await fetch(API_BASE_URL + "api/posts", {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
    });
    response.json(); // will give you the json response from this request

    // a PUT request:
    const response = await fetch(`${API_BASE_URL}api/posts/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    });

    // DELETE
    const response = await fetch(API_BASE_URL + `api/posts/${id}`, {
      method: "DELETE",
      mode: "cors",
    });


fetch() is async, so it returns a Promise.


The express.js server should return a list of posts in a JSON response, with status code 200. The response should look like this:

    [
        {
            id: 0,
            text: "Text 1 here"
        },
        {
            id: 1,
            text: "Text 2 here"
        },
        ....
    ]


Send an http DELETE request to http://localhost:3001/posts/${id} to delete a post with that specific ID.

Don't forget about the **cors** part, otherwise you'll have problems sending http request from frontend to backend.

Create an express.js app that will listen on port 3001. 

Configure your express app to accept JSON.

Write type definitions for your Posts array.

ID is number, and it starts at 1 and then gets incremented by +1 every time a new post gets created. So the first post will have ID 1, second post will have ID 2, and so on.


