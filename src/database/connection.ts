import { Sequelize } from 'sequelize';


const db = new Sequelize('cite_node_bd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
    // logging: false,
});

export default db;
