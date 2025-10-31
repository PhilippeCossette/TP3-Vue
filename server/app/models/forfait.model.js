module.exports = (connex, Sequelize) => {
  const Forfait = connex.define("forfait", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    length: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
  });

  return Forfait;
};
