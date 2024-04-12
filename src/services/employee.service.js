import Employee from "../models/employee.model.js";
export async function createEmployees(data) {
  try {
    const employee = await Employee.bulkCreate(data);
    return employee;
  } catch (error) {
    throw new Error(error.message);
  }
}
