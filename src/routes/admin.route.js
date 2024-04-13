import { loginOp } from "../controllers/admin.controller.js";
import trimRequest from "trim-request";
const router = _sys.express.Router();
router.route("/login").post(trimRequest.all, loginOp);

export default router;
