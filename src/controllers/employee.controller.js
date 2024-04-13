import {
  createEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployee,
  getEmployees,
} from "../services/employee.service.js";
const requiredMessage = "All fields are required";
const successCreatedMessage = "Employees Created Successfully";
const successDeletedMessage = "Employee Deleted Successfully";
const successUpdatedMessage = "Employee Updated Successfully";
const successReadMessage = "Employee Successfully Found";
const successReadAllMessage = "Employees Successfully Found";

const invalidDepartmentMessage = "Invalid Department";
const invalidJobTitleMessage = "Invalid Job Title";

const departments = ["Engineering", "Sales", "Marketing", "Finance"];
const jobTitles = ["Engineer", "Salesman", "Accountant", "Seller"];

export const createEmployeesOp = async (req, res, next) => {
  try {
    const errors = [];

    req.body.employees.forEach((employee, index) => {
      // Check for missing data
      if (
        !employee.name ||
        !employee.email ||
        !employee.location ||
        !employee.department ||
        !employee.jobTitle
      ) {
        errors.push(requiredMessage + ` for elemet at index ${index}`);
      }

      // Check for invalid department
      if (!departments.includes(employee.department)) {
        errors.push(invalidDepartmentMessage + ` for elemet at index ${index}`);
      }

      // Check for invalid job title
      if (!jobTitles.includes(employee.jobTitle)) {
        errors.push(invalidJobTitleMessage + ` for elemet at index ${index}`);
      }
    });

    if (errors.length > 0) {
      return _sys.utils.response1.clientError(res, errors.join(", "));
    }

    req.body.employees = await _sys.sanitize.array(req.body.employees);
    const employees = req.body.employees;
    const result = await createEmployees(employees);

    return _sys.utils.response1.success(res, successCreatedMessage, result);
  } catch (error) {
    return _sys.utils.response1.clientError(res, error.message);
  }
};
export const deleteEmployeeOp = async (req, res, next) => {
  try {
    if (!req.query.id) {
      return _sys.utils.response1.clientError(res, requiredMessage);
    }
    const id = await _sys.sanitize.string(req.query.id);
    await deleteEmployee(id);

    return _sys.utils.response1.success(res, successDeletedMessage);
  } catch (error) {
    return _sys.utils.response1.clientError(res, error.message);
  }
};
export const updateEmployeeOp = async (req, res, next) => {
  try {
    if (!req.query.id) {
      return _sys.utils.response1.clientError(res, requiredMessage);
    }
    const id = await _sys.sanitize.string(req.query.id);
    if (!req.body.data) {
      return _sys.utils.response1.clientError(res, requiredMessage);
    }
    const data = await _sys.sanitize.object(req.body.data);
    await updateEmployee(id, data);
    return _sys.utils.response1.success(res, successUpdatedMessage);
  } catch (error) {
    return _sys.utils.response1.clientError(res, error.message);
  }
};
export const getEmployeeOp = async (req, res, next) => {
  try {
    if (!req.query.id) {
      return _sys.utils.response1.clientError(res, requiredMessage);
    }
    const id = await _sys.sanitize.string(req.query.id);
    const result = await getEmployee(id);

    return _sys.utils.response1.success(res, successReadMessage, result);
  } catch (error) {
    return _sys.utils.response1.clientError(res, error.message);
  }
};
export const getEmployeesOp = async (req, res, next) => {
  try {
    const result = await getEmployees();

    return _sys.utils.response1.success(res, successReadAllMessage, result);
  } catch (error) {
    return _sys.utils.response1.clientError(res, error.message);
  }
};
