import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../model/userModel.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { CustomError } from "../utils/customerError.js";

const singToken = (id, name) => {
  return jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: "1hr",
  });
};

const registerUser = asyncErrorHandler(async (req, res, next) => {
  const {email, phoneNo, password } = req.body;

  const exits = await user.findOne({ email });
  if (exits) {
    const error = new CustomError("User Name already have", 404);
    return next(error);
  }

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      const error = new CustomError("Hash error", 404);
      return next(error);
    }
    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) {
        const error = new CustomError("Hash error", 404);
        return next(error);
      }
      // Store hash in your password DB.
      const userCreate = await user.create({
       
        email,
        phoneNo,
        password: hash,
        role: "user",
      });
      const token = jwt.sign(
        { userId: userCreate._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );


      res
        .status(201)
        .send({ message: "user Create successfull" });
    });
  });
  //create the user
});


const loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const userFind = await user.findOne({ email });
  if (!userFind) {
    const error = new CustomError("Invalid Credentials", 404);
    return next(error);
  }
 

  if (userFind && !userFind.isActive) {
    const error = new CustomError("Not Allowed to access", 404);
    return next(error);
  }

  bcrypt.compare(password, userFind.password, async function (err, result) {
    if (err) {
      const error = new CustomError("Internal Server Error", 500);
      return next(error);
    }
    if (result) {
      const newUser = await user.findOne({ email }).select("-password");
      const token = singToken(userFind._id, userFind.email);
      res.cookie("token", token, {
        httpOnly: true,
        // domain: 'localhost',
        path: "/",
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: "lax",
      }),
        res.status(200).json({ 'message':"ok",token, newUser });
    } else {
      const error = new CustomError("Invalid Credential", 500);
      return next(error);
    }
  });
});

const getUser = asyncErrorHandler(async (req, res, next) => {
  const userId = req.user;
  let newuser;

  try {
    newuser = await user.findById(userId, "-password");
  } catch (err) {
    const error = new CustomError("Login again..", 500);
    return next(error);
  }
  if (!newuser) {
    return res.status(404).json({ messsage: "User Not FOund" });
  }
  return res.status(200).json({ newuser });
});


const logOutUser = asyncErrorHandler(async (req, res, next) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  }),
    res.status(200).json({ message: "log out" });
});
export {
  registerUser,
  loginUser,
  getUser,
  logOutUser
};
