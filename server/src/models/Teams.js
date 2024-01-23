const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('team', {
        id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        },
        nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
          },
        },
        {timestamps: false}
    );
}