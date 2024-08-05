 const createUser: any = 'INSERT INTO user (id, userName, email, phone, password) VALUES (?, ?, ?, ?, ?)';
 const readUsers: string = 'SELECT * FROM user';
 const deleteUser: string = 'DELETE FROM user WHERE id = ?';
 const getUserById: string = 'SELECT * FROM user WHERE id = ?';

 export default {createUser, readUsers, deleteUser, getUserById}