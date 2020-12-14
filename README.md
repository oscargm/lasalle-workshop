# How to setup the project for the first time

```bash
npm install
```

## Run mock-server in order to mock the REST services

```bash
npm run mock-server
```

test with the following GET request:

```
http://localhost:3000/
```

## Run the App

```bash
npm start
```

http://localhost:5070/

## Guides

### Testing

- React Components

  - [Overview](https://reactjs.org/docs/testing.html)
  - [Recipes](https://reactjs.org/docs/testing-recipes.html)

- React Hooks

  - [General Hooks](https://react-hooks-testing-library.com/)
  - [Custom Hooks](https://kentcdodds.com/blog/how-to-test-custom-react-hooks)

- Redux

  - [Overview and recipes](https://redux.js.org/recipes/writing-tests)
  - [Redux Sagas](http://redux-saga-test-plan.jeremyfairbank.com/)

# Create new route

### Create route config

  - Add new route in src/routes/routes.ts
  - Add Scene to draw in app.router.tsx
  - Create new Scene in Scenes and export in index.ts
  - Create new Pod in pods/folder with scene name and index.ts to export
