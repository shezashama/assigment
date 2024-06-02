import { Router } from "express";

  import {loginUser, registerUser,getUser,logOutUser,getAllusers, getCounts} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/getuser").get(protect,getUser);
router.route("/logout").get(logOutUser);
router.route("/alluser").get(getAllusers);
router.route("/count").get(getCounts);


export default router;
