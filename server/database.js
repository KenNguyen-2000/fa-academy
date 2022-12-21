import mysql from 'mysql';

export const connectDB = () => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Joker-345',
      database: 'fa',
    });

    connection.connect((err) => {
      if (err) {
        reject(err);
      }
      resolve(connection);
    });
  });
};

export const closeDB = (connection) => {
  console.log('CLose connection');
  connection.destroy();
};
