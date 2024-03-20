# ExpertsCloud Evaluation Task
## Tech Stacks
#### Frontend
- ReactJs
#### Backend 
- Nodejs
- Sequelize - MySQL
- ExpressJS

## Setup 

There are two folders named **_frontend_**  and **_backend_**. 

### Setup the Frontend

Enter into the frontend folder enter the todo folder and run the command **_npm run dev_** it will start/run the app.
#### **steps**
- cd frontend
- cd todo
- npm run dev

### Setup the Backend

Enter into the backend folder here and run the command **npm start** it will run ur server.
#### **steps**
- cd backend
- npm start

## Folder Structure

#### Frontend

There are three main folders 
- Components
- api
- Utils

- In the **component** folder, I have placed the card UI Logic that displays each todo item with its metadata 

- In the **Api** folder, I have written down all the functions that are interacting with the backend through an API.

- In **Utils** I wrote down the reusable code like helpers and time Convert, the helper take the
functions that are communicating with the backend and enclosed them in a try-catch block for error handling


#### Backend

**Server.js is the main entry point of our Server.**

In the backend, I have created separate folders for the controller, routes, config, and model to increase the readability of the code. 

- In the routes folder, there is a file named routes.js I have specified all the routes that we are hitting from our front end.
- In the Model folder, I have created a schema that represents the structure of our data to be stored in a database.
- In the controller folder, all the logic to handle HTTP requests and interact with the Model to perform CRUD operation.
- In the config folder, there's a config.json file that contains info about the database in key-value pair, set the credentials values according to ur database setting.

In the config file of the backend change the development variable defined in the key-value pair as your local Mysql Server if the deployed link doesn't work...
## CRUD Operation

**Create**: Added/Inserted new Tasks by clicking the Add button  
**Read**: Fetching all the tasks to show in UI.
**Update**: On Clicking the complete button the task status will change from pending to completed with a visual effect visible in UI updating the updatedAt parameter of the specific task.
**Delete**: The Delete button will delete the specific task.

## API EndPoints for local host environment

https://expertscloudtask.onrender.com/api/tasks/getAllTasks --- Will show you all the tasks added to the db

## Deployment Links

### frontend

https://experts-cloud-task.vercel.app/

### backend

https://expertscloudtask.onrender.com






