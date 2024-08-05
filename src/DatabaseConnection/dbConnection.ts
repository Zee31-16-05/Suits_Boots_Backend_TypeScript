import mysql from 'mysql2/promise';

const createConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'root@123',
            database: 'suitsboots'
        });
        console.table([{ message: 'Connected to MySQL database' }]);
        return connection;
    } catch (err) {
        console.error('Error connecting to MySQL database:', err);
        throw err;
    }
};

export default createConnection;