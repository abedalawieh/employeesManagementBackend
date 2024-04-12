import { createEmployees } from "../services/employee.service.js";
const requiredMessage = "All fields are required";
const successCreatedMessage = "Employees Created Successfully";
const invalidDepartmentMessage = "Invalid Department";
const invalidJobTitleMessage = "Invalid Job Title";

const departments = ["Engineering", "Sales", "Marketing", "Finance"];
const jobTitles = ["Engineer", "Salesman", "Accountant", "Seller"];

export const createEmployeesOp = async (req, res, next) => {
  try {
    const errors = [];

    req.body.employees.forEach((employee) => {
      // Check for missing data
      if (
        !employee.name ||
        !employee.email ||
        !employee.location ||
        !employee.department ||
        !employee.jobTitle
      ) {
        errors.push(requiredMessage);
      }

      // Check for invalid department
      if (!departments.includes(employee.department)) {
        errors.push(invalidDepartmentMessage);
      }

      // Check for invalid job title
      if (!jobTitles.includes(employee.jobTitle)) {
        errors.push(invalidJobTitleMessage);
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
