import {
  createEmployeesOp,
  deleteEmployeeOp,
  updateEmployeeOp,
  getEmployeeOp,
  getEmployeesOp,
} from "../controllers/employee.controller.js";
import trimRequest from "trim-request";
import verifyToken from "../middlewares/auth.middleware.js";
const router = _sys.express.Router();

router.route("/create").post(trimRequest.all, verifyToken, createEmployeesOp); // Apply middleware to routes
router.route("/delete").delete(trimRequest.all, verifyToken, deleteEmployeeOp);
router.route("/update").put(trimRequest.all, verifyToken, updateEmployeeOp);
router.route("/get").get(trimRequest.all, verifyToken, getEmployeeOp);
router.route("/get").post(trimRequest.all, verifyToken, getEmployeesOp);

export default router;
