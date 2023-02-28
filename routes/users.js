const users = require('express').Router();
const { getUsers, createUser, getUser, updateUser, updateAvatar } = require('../controllers/users');


users.get('/', getUsers); //возвращает всех пользователей
users.post('/', createUser); //создаёт пользователя
users.get('/:usersId', getUser); //возвращает пользователя по _id
//обновление Разрешено частичное обновление профиля. Можно передавать
//в метод PATCH только те поля, значения которых нужно изменить.
users.patch('/me', updateUser);//обновляет профиль
users.patch('/me/avatar', updateAvatar);//обновляет аватар

module.exports = users;