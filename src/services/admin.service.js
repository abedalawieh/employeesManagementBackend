import Admin from "../models/admin.model.js";

export const login = async (email, password) => {
  try {
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      throw new Error("Invalid email or password");
    }

    const passwordMatch = await _sys.bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }
    const token = _sys.jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );

    return { admin: admin, token: token };
  } catch (error) {
    throw new Error(error.message);
  }
};
