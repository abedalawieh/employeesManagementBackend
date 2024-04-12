import {
  createEmployeesOp,
  deleteEmployeeOp,
  updateEmployeeOp,
} from "../controllers/employee.controller.js";
import trimRequest from "trim-request";
const router = _sys.express.Router();
router.route("/create").post(trimRequest.all, createEmployeesOp);
router.route("/delete").delete(trimRequest.all, deleteEmployeeOp);
router.route("/update").put(trimRequest.all, updateEmployeeOp);

export default router;
