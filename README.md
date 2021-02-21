# TODO-LIST with login mongodb

## Task: login with mongodb and reset password function.

Fully functional todo-list, backend task (don't look at the css class names...).

## Loginsystem - Works with multiple users.

- I have created two models, user/todo.
- Todo is pushed into user with each todo id.
- When loged in user only see their own todos.
- bcrypt, jsonwebtoken

## Reset Password - zoho mail. Works like a charm. :)

- bcrypt, crypto and nodemailer.

## Install

Clone https://github.com/johced/mongodb-login-todo

- npm i
- create .env file and set:
  -- PORT=3000?
  -- MONGO_URI=yourMongoDBconnectionString
  -- SECRET_KEY=whateveryouwant
  -- USER_MAIL=your zoho mail...
  -- USER_PASSWORD=your zoho mail password
- npm start in terminal

All set to try it out! Enjoy :-)

// **
If you edit ejs files with my vs code/prettier settings you have to create .prettierignore and set "\*.ejs" in order for it to work (adds end tags where they shouldn't be otherwise)
// **
