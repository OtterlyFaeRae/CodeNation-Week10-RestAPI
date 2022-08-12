const { Router } = require('express');
const userRouter = Router();
const { createUser, login, userList, updateEmail, deleteUser } = require('./controller');
const { hashPass, checkPass, checkToken } = require('../middleware')

userRouter.post("/user", hashPass, createUser);
userRouter.post("/login", checkPass, login);
userRouter.get('/login', checkToken, login);
userRouter.get("/user", userList);
userRouter.patch('/user', checkToken, updateEmail);
userRouter.delete('/user', checkPass, deleteUser)

module.exports = { userRouter };