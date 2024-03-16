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
      defaultValue: 'pending',
      type: DataTypes.ENUM('pending', 'completed'),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Task;
};
