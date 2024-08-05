"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createUser = 'INSERT INTO user (id, userName, email, phone, password) VALUES (?, ?, ?, ?, ?)';
const readUsers = 'SELECT * FROM user';
const deleteUser = 'DELETE FROM user WHERE id = ?';
const getUserById = 'SELECT * FROM user WHERE id = ?';
exports.default = { createUser, readUsers, deleteUser, getUserById };
