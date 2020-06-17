'use strict';
var Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    var Registro = sequelize.define('registro', {
        becons: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.ENUM('Entra', 'Sale')
        },
        hora: {
          type: Sequelize.TIME
        },
        fecha: {
          type: Sequelize.DATE
        }
    });
    return Registro;
};