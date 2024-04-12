import { Sequelize, DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";
import connection from "../config/db/db.config.js";

class Admin extends Model {
  static async createAdminIfNotExist() {
    const [admin, created] = await this.findOrCreate({
      where: { email: process.env.ADMIN_EMAIL },
      defaults: {
        name: process.env.ADMIN_NAME,
        password: process.env.ADMIN_PASSWORD,
      },
    });

    if (created) {
      _sys.logger.info("Admin account was created.");
    } else {
      _sys.logger.info("Admin account already exists.");
    }
  }
}

Admin.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email format",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Admin",
    timestamps: true,
    hooks: {
      beforeCreate: async (admin) => {
        const salt = await bcrypt.genSalt();
        admin.password = await bcrypt.hash(admin.password, salt);
      },
    },
  }
);
Admin.createAdminIfNotExist();

export default Admin;
