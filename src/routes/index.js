import authRoutes from "./employee.route.js";
const router = _sys.express.Router();
router.use("/employee", authRoutes);
export default router;
