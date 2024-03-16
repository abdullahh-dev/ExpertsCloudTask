module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Task;
};
