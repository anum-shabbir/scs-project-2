module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("user", {
    User_ID: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    firstname: { type: Sequelize.STRING, notEmpty: true },
    lastname: { type: Sequelize.STRING, notEmpty: true },
    username: { type: Sequelize.TEXT },
    postalcode: { type: Sequelize.STRING, notEmpty: true },
    about: { type: Sequelize.TEXT },
    email: { type: Sequelize.STRING, validate: { isEmail: true } },
    password: { type: Sequelize.STRING, allowNull: false },
    last_login: { type: Sequelize.DATE },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  return User;
};

// module.exports = function(sequelize, Sequelize) {
//   var User = sequelize.define("user", {
//     User_ID: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
//     firstname: { type: Sequelize.STRING, notEmpty: true },
//     lastname: { type: Sequelize.STRING, notEmpty: true },
//     username: { type: Sequelize.TEXT },
//     postalcode: { type: Sequelize.STRING, notEmpty: true },
//     about: { type: Sequelize.TEXT },
//     email: { type: Sequelize.STRING, validate: { isEmail: true } },
//     password: { type: Sequelize.STRING, allowNull: false },
//     last_login: { type: Sequelize.DATE },
//     status: {
//       type: Sequelize.ENUM("active", "inactive"),
//       defaultValue: "active"
//     }
//   });

//   return User;
// };
