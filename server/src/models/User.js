const bcrypt = require('bcrypt-nodejs')

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  // return bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
  //   console.log(err)
  //   return bcrypt.hash(user.password, salt, null, function (err, hash) {
  //     console.log(err)
  //     return user.setDataValue('password', hash)
  //   })
  // })

  const salt = bcrypt.genSaltSync(SALT_FACTOR)
  const hash = bcrypt.hashSync(String(user.password), salt)
  return user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword
      // beforeUpdate: hashPassword,
      // beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    // return bcrypt.compare(password, this.password, (err, res) => {
    //   console.log(err)
    //   return res
    // })
    return bcrypt.compareSync(String(password), this.password) // true
  }

  return User
}
