import empRoutes from "./employee.route.js";
import adminRoutes from "./admin.route.js";

const router = _sys.express.Router();
router.use("/employee", empRoutes);
router.use("/admin", adminRoutes);

export default router;
