import { createEmployeesOp } from "../controllers/employee.controller.js";
import trimRequest from "trim-request";
const router = _sys.express.Router();
router.route("/create").post(trimRequest.all, createEmployeesOp);

export default router;
