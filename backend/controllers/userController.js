import userModel from "../models/userModel.js";
import { encryptPassword, verifyPassword } from "../utills/userutills.js";

/**
 * =========================
 * REGISTER CONTROLLER
 * =========================
 */
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(`Registering user: ${name}, Email: ${email}`);

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Encrypt password
    const hashedPassword = await encryptPassword(password);

    // Create user
    await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

/**
 * =========================
 * LOGIN CONTROLLER
 * =========================
 */
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
     //remove password of user from backend to frontenduser
     // passwod is not send to frontend
    user.password = undefined;

    // ✅ Success response
    return res.status(200).json({
      message: "Login successful", 
      user
    });
   
  

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export { userRegister, loginController };
