const { DataTypes } = require('sequelize');

module.exports = blogModel;

function blogModel(sequelize) {
    const attributes = {
        title: { type: DataTypes.STRING, allowNull: false },
        photo: { type: DataTypes.STRING, allowNull: true },
        banner: { type: DataTypes.STRING, allowNull: true },
        body: { type: DataTypes.STRING, allowNull: false }
    };

    return sequelize.define('Blog', attributes);
}