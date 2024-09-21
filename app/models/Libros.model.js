module.exports = function(sequelize,Sequelize) {
    const Libroos = sequelize.define('Libroos',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        id_autor: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        isbn:{
            type: Sequelize.STRING(13),
            allowNull: false
        },
        editorial: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        anio_pl: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        categoria: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cantidad_disponible:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ubicacion:{	
            type: Sequelize.STRING(100),
            allowNull: false
    
        }
    });
    return Libroos;
}
