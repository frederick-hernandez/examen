module.exports = function(sequelize,Sequelize) {
    const prueba =  sequelize.define('prueba',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    return prueba;
}
