import  Sequelize  from 'sequelize';

export const sequelize = new Sequelize(
    'new',
    'postgres',
    '123456',
    {
    host: 'localhost',
    dialect: 'postgres',

});