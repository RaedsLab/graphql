# GraphQL Tutorial (Node) 101

During this tutorial, we will start with a very simple Node (express) project and we will build on it to make a fully functional GraphQL API.

## Data 
We will make a book management API for a library.
You can find the full list of books under  `data/library.js`. 

I have intentionally omitted using a proper database for this tutorial as it would just add another headache. Our main goal is to understand GraphQL, once that is achieved, you can replace the JavaScript array with an adapter for your database and the rest would remain the same. 

## Setup

- Make sure that you have an updated version of Node and NPM and that you have a stable internet connection.

- Clone, or download this code

- Run `npm install` in your terminal (this might take a few minutes)

- Run `npm start`

- Open a browser and go to [localhost:3000](localhost:3000), if everything is set you should see a message : '**Hello**, Welcome to this GraphQL tutorial'.

(If you want to use another port just set the environment variable PORT like this: `PORT=1337 npm start`)

- That's it, you're ready to follow the tutorial.

## Project structure

The project is structured like the following: 

```
├── app.js
├── bin
│   └── www
├── data
│   └── library.js
├── package.json
├── routes
│   └── index.js
└── views
    ├── error.ejs
    └── index.ejs
```

We will focus mainly on the `routes/index.js` and `data/library.js`. 

If this is your first Node project, don't worry about the rest of the files.

## Solution

I don't recommend looking at the solution before attending the tutorial session.

Under `finished` directory there is a working solution for this tutorial. 

It is meant only as a reference for later usage. You should write the code on your own and not copy/paste IT.