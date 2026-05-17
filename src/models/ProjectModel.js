const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Project = sequelize.define('project', {

    name: {
    type: DataTypes.STRING(100),
    allowNull: false,
      unique: true,
    
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  endDateEstimated: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  
  timestamps: true, 
  
});
module.exports = Project;