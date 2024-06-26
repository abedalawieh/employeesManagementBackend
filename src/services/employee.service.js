import Employee from "../models/employee.model.js";
export const createEmployees = async (data) => {
  try {
    const employee = await Employee.bulkCreate(data);
    return employee;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleteEmployee = async (employeeId) => {
  try {
    const result = await Employee.destroy({ where: { id: employeeId } });
    if (result[0] === 0) {
      throw new Error("No employee with this id");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const updateEmployee = async (employeeId, data) => {
  try {
    const result = await Employee.update(data, { where: { id: employeeId } });
    if (result[0] === 0) {
      throw new Error("No employee with this id");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getEmployee = async (employeeId) => {
  try {
    const result = await Employee.findByPk(employeeId);
    if (result === null) {
      throw new Error("No employee with this id");
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getEmployees = async () => {
  try {
    const employees = await Employee.findAll();

    return employees;
  } catch (error) {
    throw new Error(error.message);
  }
};
