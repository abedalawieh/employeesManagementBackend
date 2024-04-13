import {
  createEmployeesOp,
  deleteEmployeeOp,
  updateEmployeeOp,
  getEmployeeOp,
  getEmployeesOp,
} from "../controllers/employee.controller.js";
import trimRequest from "trim-request";
const router = _sys.express.Router();
router.route("/create").post(trimRequest.all, createEmployeesOp);
router.route("/delete").delete(trimRequest.all, deleteEmployeeOp);
router.route("/update").put(trimRequest.all, updateEmployeeOp);
router.route("/get").get(trimRequest.all, getEmployeeOp);
router.route("/get").post(trimRequest.all, getEmployeesOp);

export default router;
