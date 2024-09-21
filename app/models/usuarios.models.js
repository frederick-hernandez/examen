module.exports = function(sequelize,Sequelize) {
    const usuario = sequelize.define('usuario',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        apellido: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        telefono:{
            type: Sequelize.STRING(20),
            allowNull: false
        },
        direccion: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        estado:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    });
    return usuario;
}