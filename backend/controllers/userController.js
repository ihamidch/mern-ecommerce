import userModel from "../models/userModel.js";
import encryptPassword from "../utills/userutills.js";

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(`Registering user: ${name}, Email: ${email}`);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // encrypt password before saving
    const hashedPassword = await encryptPassword(password);

    // Optional: check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await userModel.create({
      name,
      email,
      password : hashedPassword ,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export default userRegister;
