import { Sequelize, DataTypes, Model } from "sequelize";
import connection from "../config/db/db.config.js";

class Employee extends Model {}

Employee.init(
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
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: process.env.EMPLOYEE_DEFAULT_PROFILE_PICTURE,
    },
  },
  {
    sequelize: connection,
    modelName: "Employee",
    timestamps: true,
  }
);

export default Employee;
