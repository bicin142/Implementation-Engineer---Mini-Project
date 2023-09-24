# Postr
## Implementation Engineer - Mini Project for MyRobin.Id

This is a developer test for my application as Implementation Engineer for MyRobin.Id to demonstrate my programming knowledge.

[Link to Project Specifications](https://docs.google.com/document/d/1ESmOe0GgRfPuj4Am1exUX6Ja0s3kzFPvM0Qq388swGc/edit#heading=h.wi1z4htrgv97)

## Tech Stacks :
- OS: MacOS
- Programming Language: Node.js (JavaScript)
- Framework: Express
- API: RESTful API
- VCS: Git (GitHub)
- Development Environment: VS Code
- Database Tools: Sequelize, Sequelize-CLI, Postgres

## Libraries :
- dotenv
- nodemon

## Assumptions :
- Postr does note require a user login as the platform is anonymous
- A user will be assigned a random username to identify him/herself whem creating post and replies. However, the identity witll still be anonymous as only a random username is associated to the user


## Scope :
- This project only covers the server-side of the app
- The database used is the bare minimum for a functioning anonymous forum
- The entities included in this project are only users, posts, and replies
- This project only covers the functions to create and read, without the function to edit and delete
- Table relationship is limited to basic foreign key relations

User Table

![User Table](<CleanShot 2023-09-25 at 01.01.31.png>)

Post Table

![Post Table](<CleanShot 2023-09-25 at 01.02.01.png>)

Reply Table

![Reply Table](<CleanShot 2023-09-25 at 01.02.21.png>)

## Additional Notes :
- You will need postgres installed in your machine to run this server locally
- To initiate this project, please run the following command in your terminal 
```
npm i
npm run init:db
```
- if npm run init:db does not work properly, you can try running the following commands separately
```
    npm run db:drop
    npm run db:create
    npm run migrate
    npm run drop
    npm run seed
```

- To run this project, please run the following command in your terminal 
```
npm run dev
```